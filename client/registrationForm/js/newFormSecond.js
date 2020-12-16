$(document).ready(function () {
    // Universal Form Component
    const UNIVERSAL_FORM2 = () => {
        // Append component to HTML container
        document.querySelector("#registration-form-container2").innerHTML = `
        <form class="registrationForm" id="registrationForm2">
           <div class="form-group">
                <label id="gender-error2" class="error form-info" for="gender2">Сhoose your <span class="form-text">gender</span> below</label>
                <select name="gender2" class="custom-select" id="gender2" required>
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <div class="form-group">
                <label id="firstName-error2" class="error form-info" for="firstName2">Please enter a valid <span class="form-text">First Name</span> below</label>
                <input type="text" class="form-control" name="firstName2" placeholder="First Name" required id="firstName2">
            </div>
            <div class="form-group">
                <label id="lastName-error2" class="error form-info" for="lastName2">Please enter a valid <span class="form-text">Last Name</span> below</label>
                <input type="text" class="form-control" name="lastName2" placeholder="Last Name" required id="lastName2">
            </div>
            <div class="form-group">
                <label id="codePhone-error2" class="error form-info" for="codePhone2">Please enter a valid <span class="form-text">Phone Number</span> below</label>
                <input type="text" class="form-control form-phone" name="codePhone2" id="codePhone2" autocomplete="false" required>
            </div>
            <div class="form-group">
                <label id="email-error2" class="error form-info" for="email2">Please enter a valid <span class="form-text">E-mail</span> below</label>
                <input type="email" class="form-control" name="email2" placeholder="E-mail" id="email2" required>
            </div>
            <div class="form-group">
                <button class="button-main" type="submit">Registration</button>
            </div>
            <div class="form-group">
                <p>By continuing you confirm that you are over 18 years and agree to the terms <a href="#" target="_blank">privacy policy</a>.</p>
            </div>
        </form>
        `;

        // Extreme IP request link
        const extremeIpLookup = 'https://extreme-ip-lookup.com/json/?key=tyBscGg0HMHoK23fMq4l';
        // CRM request url
        const crmURL = 'https://956crm.com/your/callback';
        //Registration Form
        const form = $("#registrationForm2");
        // Phone input #1
        const input = document.querySelector("#codePhone2");
        // Phone number errors field
        const output = document.querySelector("#codePhone-error2");



        // Parse URL params
        const urlParam = (name) => {
            const results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            if (results==null){
                return null;
            }
            else {
                let ret_val = decodeURI(results[1]) || 0;
                ret_val = ret_val.toString().replace(/\+/g, ' ');
                return ret_val;
            }
        };

        // Create object of utm params
        const utmParams = {
            af : urlParam('affiliate_id'),
            clickID : urlParam('clickid'),
            partnerClickID:  urlParam('partner_click_id') ||"No data",
            utmCampaign: urlParam('utmCampaign') || "No data",
            utmContent: urlParam('utmContent') || "No data",
            utmSource: urlParam('utmSource') || "No data",
            utmMedia: urlParam('utmMedia') || "No data"
        };
        console.log(`UTM params object here: `, utmParams);

        // Initialize phone input #1
        const iti = intlTelInput(input, {
            initialCountry: "auto",
            nationalMode: true,
            geoIpLookup: function (callback) {
                fetch(extremeIpLookup)
                    .then(response => response.json())
                    .then(data => {
                        console.log(`User IP information: `, data);
                        return callback(data.countryCode);
                    })
                    .catch(error => console.log(`Something wrong with IP request: ${error}`));
            }
        });

        // here, the index maps to the error code returned from getValidationError - see readme
        const errorMap = ["Invalid number, correction required", "Invalid country code", "Too short.. continue writing", "Too long.. correction required", "Continue writing.."];

        // Validation number function
        const numberValidation = () => {
            const text = (iti.isValidNumber()) ? `✓ International: ${iti.getNumber()}` : errorMap[iti.getValidationError()];
            const textNode = document.createTextNode(text);

            output.innerHTML = " ";
            output.appendChild(textNode);

            if (!input.value.length) {output.innerHTML = `Please enter a valid <span class="form-text">Phone Number</span> below`}
        };

        // Some event listener for number field
        input.addEventListener('change', numberValidation);
        input.addEventListener('keyup', numberValidation);
        input.addEventListener("countrychange",  () => console.log(`User change country, new data: `, iti.getSelectedCountryData()));


        // HTTP Request function
        const httpRequest = async (url, clickID, partnerClickID, utmCampaign, utmContent, utmSource, utmMedia) => {
            // First Name input
            const firstName = document.querySelector("#firstName").value.trim();
            // Last Name input
            const lastName = document.querySelector("#lastName").value.trim();
            // Email input
            const email = document.querySelector("#email").value.trim();
            // User country by IP
            const country = iti.defaultCountry.toUpperCase();
            // User phone number
            const phone =  iti.getNumber().trim();

            // Create data object needed for CRM
            let userData= {
                "params": {
                    "first_name": firstName,
                    "last_name": lastName,
                    "af": utmParams.af,
                    "country": country,
                    "phone": phone,
                    "email": email,
                    "click_id": utmParams.clickID,
                    "partner_click_id": utmParams.partnerClickID,
                    "sub": utmParams.utmCampaign,
                    "utm_content":  utmParams.utmContent,
                    "utm_source": utmParams.utmSource,
                    "utm_media": utmParams.utmMedia
                }
            };

            console.log("..I'am create for you final data object, please check it:", userData);
            try {
                // Send Request to CRM
                const response = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(userData),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                });
                const data = await response.json();
                console.log("Server response: ", data);

                // Create HasOffers redirection link
                const redirect = `https://walkmarketing.go2cloud.org/aff_lsr?transaction_id=${clickID}&adv_sub2=${email}&adv_sub3=${name}&adv_sub4=${lastName}&google_aid_sha1=${country}&windows_aid=${utmCampaign}&windows_aid_md5=${utmContent}&windows_aid_sha1=${utmSource}&google_aid_md5=${phone}&aff_click_id=${partnerClickID}&aff_unique1=${utmMedia}`;
                console.log(redirect);

                // Send request to HasOffers
                const requestToHasOffers = await fetch(redirect,{
                    method: 'POST'
                });
                const hasOffersResponse = await requestToHasOffers;
                console.log("HasOffers response: ", hasOffersResponse);
                // Redirect to deposit page
                top.location.href = "https://mycoinbankingtraderoom.com/user/fastauth/"+email;
            }  catch (error) {
                console.error('Something wrong:', error);
            }
        };

        jQuery.validator.addMethod("isNumber", function (value) {
            const pattern = /\d/;
            return !pattern.test(value)
        });
        jQuery.validator.addMethod("validateEmail", function (value) {
            const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return pattern.test(value)
        });
        // This is validate rules object
        const validationRules = {
            focusCleanup: false,
            onkeyup: false,
            onfocusout: false,
            rules: {
                gender: "required",
                firstName: {
                    required: true,
                    minlength: 2,
                    maxlength: 16,
                    isNumber: true

                },
                lastName: {
                    required: true,
                    number: false,
                    minlength: 2,
                    maxlength: 16,
                    isNumber: true
                },
                codePhone: {
                    required: true,
                    digits: true,
                    minlength: 6,
                    maxlength: 14
                },
                email: {
                    required: true,
                    email: true,
                    validateEmail: true
                }
            },
            messages: {
                firstName: {
                    required: 'This field is required',
                    number: 'Only letters here',
                    minlength: 'Min length is 2 letters',
                    maxlength: 'Max length is 16 letters',
                    isNumber: 'Name should be without numbers'
                },
                lastName: {
                    required: 'This field is required',
                    number: 'Only letters here',
                    minlength: 'Min length is 2 letters',
                    maxlength: 'Max length is 16 letters',
                    isNumber: 'Last Name should be without numbers'
                },
                email: {
                    required: 'E-mail is required field',
                    email: "Invalid E-mail example: example@gmail.com",
                    validateEmail: "Invalid E-mail example: example@gmail.com"
                }
            },
            success: (label) => {
                label.addClass("valid").text("✓ valid")
            },
            highlight: (element, errorClass) => {
                $(element).fadeOut(() => {
                    $(element).fadeIn();
                    $(element).addClass(errorClass)
                });
            },
            submitHandler: () => httpRequest(crmURL, utmParams.clickID, utmParams.partnerClickID, utmParams.utmCampaign, utmParams.utmContent, utmParams.utmSource, utmParams.utmMedia),
        };

        // Subtim form and validate it
        form.submit((e) => e.preventDefault()).validate(validationRules);
    };
    UNIVERSAL_FORM2();
});

