$(document).ready(function () {

    // Universal Form Component

    const UNIVERSAL_FORM = () => {

        // Append component to HTML container

        document.querySelector("#registration-form-container").innerHTML = `

        <form class="registrationForm" id="registrationForm">

            <div class="form-group">

                <label id="firstName-error" class="error form-info" for="firstName"></label>

                <input type="text" class="form-control" name="firstName" required id="firstName">

            </div>

            <div class="form-group">

                <label id="lastName-error" class="error form-info" for="lastName"></label>

                <input type="text" class="form-control" name="lastName" required id="lastName">

            </div>

            <div class="form-group">

                <label id="codePhone-error" class="error form-info" for="codePhone"></label>

                <input type="text" class="form-control form-phone" name="codePhone" id="codePhone" autocomplete="false" required>

            </div>

            <div class="form-group">

                <label id="email-error" class="error form-info" for="email"></label>

                <input type="email" class="form-control" name="email" id="email" required>

            </div>

            <div class="form-group">

                <button class="button-main" type="submit" id="registrationButton"></button>

            </div>

            <div class="form-group">

                <p id="policy"></p>

            </div>

        </form>

        `;



        // Lang of HTML

        const lang = document.querySelector("html").getAttribute("lang").toLowerCase();



        let firstNameError = document.querySelector("#firstName-error");

        let lastNameError = document.querySelector("#lastName-error");

        let codePhoneError = document.querySelector("#codePhone-error");

        let emailError = document.querySelector("#email-error");

        let regBtn = document.querySelector("#registrationButton");

        let policy= document.querySelector("#policy");

        let firstName = document.querySelector("#firstName");

        let lastName = document.querySelector("#lastName");

        let email = document.querySelector("#email");



        // Switch label according HTML lang

        switch(lang) {

            case 'en':

                firstNameError.innerHTML = `Please enter a valid <span class="form-text">First Name</span> below`;

                lastNameError.innerHTML = `Please enter a valid <span class="form-text">Last Name</span> below`;

                codePhoneError.innerHTML = `Please enter a valid <span class="form-text">Phone Number</span> below`;

                emailError.innerHTML = `Please enter a valid <span class="form-text">E-mail</span> below`;

                regBtn.innerHTML = `Registration`;

                policy.innerHTML = `By continuing you confirm that you are over 18 years and agree to the terms <a href="#" target="_blank">privacy policy</a>.`;

                firstName.setAttribute("placeholder", "First Name");

                lastName.setAttribute("placeholder", "Last Name");

                email.setAttribute("placeholder", "E-mail");

                break;

            case 'ru':

                firstNameError.innerHTML = `Введите правильное <span class="form-text">Имя</span> ниже`;

                lastNameError.innerHTML = `Введите правильную <span class="form-text">Фамилию</span> ниже`;

                codePhoneError.innerHTML = `Введите правильный <span class="form-text">Номер телефона</span> ниже`;

                emailError.innerHTML = `Введите правльный <span class="form-text">E-mail</span> ниже`;

                regBtn.innerHTML = `Регистрация`;

                policy.innerHTML = `Продолжая, вы подтверждаете, что вам больше 18 лет и соглашаетесь с условиями <a href="#" target="_blank">политики конфиденциальности</a>.`;

                firstName.setAttribute("placeholder", "Имя");

                lastName.setAttribute("placeholder", "Фамилия");

                email.setAttribute("placeholder", "E-mail");

                break;

            case 'de':

                firstNameError.innerHTML = `Bitte geben Sie unten einen gueltigen <span class="form-text">Vornamen</span> ein`;

                lastNameError.innerHTML = `Bitte geben Sie unten einen gueltigen <span class="form-text">Nachnamen</span> ein`;

                codePhoneError.innerHTML = `Bitte geben Sie eine gueltige <span class="form-text">Telefonnummer</span> ein`;

                emailError.innerHTML = `Bitte geben Sie eine gueltige <span class="form-text">E-Mail-Adresse</span> ein`;

                regBtn.innerHTML = `Anmeldung`;

                policy.innerHTML = `Indem Sie fortfahren, bestaetigen Sie, dass Sie ueber 18 Jahre alt sind, und stimmen den <a href="#" target="_blank">Datenschutzbestimmungen</a> zu.`;

                firstName.setAttribute("placeholder", "Vorname");

                lastName.setAttribute("placeholder", "Nachname");

                email.setAttribute("placeholder", "E-Mail-Adresse");

                break;

            case 'ar':

                firstNameError.innerHTML = `الرجاء إدخال الاسم الأول صحيح أدناه`;

                lastNameError.innerHTML = `الرجاء إدخال اسم العائلة صحيح أدناه`;

                codePhoneError.innerHTML = `الرجاء إدخال رقم هاتف صحيح أدناه`;

                emailError.innerHTML = `يرجى إدخال بريد إلكتروني صالح أدناه`;

                regBtn.innerHTML = `التسجيل`;

                policy.innerHTML = `بالمتابعة ، تؤكد أنك تجاوزت 18 عامًا وتوافق على شروط سياسة الخصوصية`;

                firstName.setAttribute("placeholder", "الاسم الاول\n");

                lastName.setAttribute("placeholder", "الكنية");

                email.setAttribute("placeholder", "البريد الإلكتروني\n");

                break;

            default:

                firstNameError.innerHTML = `Please enter a valid <span class="form-text">First Name</span> below`;

                lastNameError.innerHTML = `Please enter a valid <span class="form-text">Last Name</span> below`;

                codePhoneError.innerHTML = `Please enter a valid <span class="form-text">Phone Number</span> below`;

                emailError.innerHTML = `Please enter a valid <span class="form-text">E-mail</span> below`;

                regBtn.innerHTML = `Registration`;

                policy.innerHTML = `By continuing you confirm that you are over 18 years and agree to the terms <a href="#" target="_blank">privacy policy</a>.`;

                firstName.setAttribute("placeholder", "First Name");

                lastName.setAttribute("placeholder", "Last Name");

                email.setAttribute("placeholder", "E-mail");

                break;

        }



        // Extreme IP request link

        const extremeIpLookup = 'https://extreme-ip-lookup.com/json/?key=tyBscGg0HMHoK23fMq4l';

        // CRM request url

        const crmURL = 'https://crm.edu2income.com/edutwoincome/register';

        //Registration Form

        const form = $("#registrationForm");

        // Phone input #1

        const input = document.querySelector("#codePhone");

        // Phone number errors field

        const output = document.querySelector("#codePhone-error");





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



        // Here, the index maps to the error code returned from getValidationError - see readme

        let errorMap;

        switch(lang) {

            case 'en':

                errorMap = ["Invalid number, correction required", "Invalid country code", "Too short.. continue writing", "Too long.. correction required", "Continue writing.."];

                break;

            case 'ru':

                errorMap = ["Неправильный номер, требуется исправление", "Неверный код страны", "Слишком короткий номер..", "Слишком длинный номер", "Продолжайте писать.."];

                break;

            case 'de':

                errorMap = ["Ungueltige Nummer, Korrektur erforderlich", "Ungueltiger Laendercode", "Zu kurz .. schreibe weiter", "Zu lange .. Korrektur erforderlich", "Schreibe weiter.."];

                break;

            case 'ar':

                errorMap = ["رقم غير صحيح ، التصحيح مطلوب\n", "رمز البلد غير صالح\n", "قصيرة جدا .. مواصلة الكتابة\n", "طويل جدًا .. التصحيح مطلوب\n", "مواصلة الكتابة..\n"];

                break;

            default:

                errorMap = ["Invalid number, correction required", "Invalid country code", "Too short.. continue writing", "Too long.. correction required", "Continue writing.."];

                break;

        }



        // Switch international string according HTML lang

        let international;

        switch(lang) {

            case 'en':

                international = "✓ International:";

                break;

            case 'ru':

                international = "✓ Международный:";

                break;

            case 'de':

                international = "✓ International:";

                break;

            case 'ar':

                international = "✓ دولي\n:";

                break;

            default:

                international = "✓ International:";

                break;

        }



        // Validation number function

        const numberValidation = () => {

            const text = (iti.isValidNumber()) ? `${international} ${iti.getNumber()}` : errorMap[iti.getValidationError()];

            const textNode = document.createTextNode(text);



            output.innerHTML = " ";

            output.appendChild(textNode);



            if (!input.value.length) {

                switch(lang) {

                    case 'en':

                        output.innerHTML = `Please enter a valid <span class="form-text">Phone Number</span> below`;

                        break;

                    case 'ru':

                        output.innerHTML = `Введите правильный <span class="form-text">Номер телефона</span> ниже`;

                        break;

                    case 'de':

                        output.innerHTML = `Bitte geben Sie eine gueltige <span class="form-text">Telefonnummer</span> ein`;

                        break;

                    case 'ar':

                        output.innerHTML = `الرجاء إدخال رقم هاتف صحيح أدناه`;

                        break;

                    default:

                        output.innerHTML = `Please enter a valid <span class="form-text">Phone Number</span> below`;

                        break;

                }

            }

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

                const redirect = `https://walkmarketing.go2cloud.org/aff_lsr?transaction_id=${clickID}&adv_sub2=${email}&adv_sub3=${firstName}&adv_sub4=${lastName}&google_aid_sha1=${country}&windows_aid=${utmCampaign}&windows_aid_md5=${utmContent}&windows_aid_sha1=${utmSource}&google_aid_md5=${phone}&aff_click_id=${partnerClickID}&aff_unique1=${utmMedia}`;

                console.log(redirect);



                // Send request to HasOffers

                const requestToHasOffers = await fetch(redirect,{

                    method: 'POST'

                });

                const hasOffersResponse = await requestToHasOffers;

                console.log("HasOffers response: ", hasOffersResponse);

                // Redirect to deposit page

                try {

                    const pixel = await fbq('track', 'Lead')

                    return top.location.href = "https://promo.edu2income.com/en/thank-you/?page=2&name="+firstName+' '+lastName;

                } catch (e) {

                    console.log(e.message)

                }

                top.location.href = "https://promo.edu2income.com/en/thank-you/?page=2&name="+firstName+' '+lastName;

            }  catch (error) {

                console.error('Something wrong:', error);

            }

        };



        // Add some validation methods

        jQuery.validator.addMethod("isNumber", function (value) {

            const pattern = /\d/;

            return !pattern.test(value)

        });

        jQuery.validator.addMethod("validateEmail", function (value) {

            const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            return pattern.test(value)

        });



        // Switch valid class string according HTML lang

        let valid;

        switch(lang) {

            case 'en':

                valid = "✓ Valid";

                break;

            case 'ru':

                valid = "✓ Правильно";

                break;

            case 'de':

                valid = "✓ Gültig";

                break;

            default:

                valid = "✓ Valid";

                break;

        }



        // This is validate rules object

        const validationRules = {

            focusCleanup: false,

            onkeyup: false,

            onfocusout: false,

            rules: {

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

            messages: {},

            success: (label) => {

                label.addClass("valid").text(valid)

            },

            highlight: (element, errorClass) => {

                $(element).fadeOut(() => {

                    $(element).fadeIn();

                    $(element).addClass(errorClass)

                });

            },

            submitHandler: () => httpRequest(crmURL, utmParams.clickID, utmParams.partnerClickID, utmParams.utmCampaign, utmParams.utmContent, utmParams.utmSource, utmParams.utmMedia),

        };



        // Change some rules messages according HTML lang

        switch(lang) {

            case 'en':

                validationRules.messages = {

                    firstName: {required: 'This field is required', number: 'Only letters here', minlength: 'Min length is 2 letters', maxlength: 'Max length is 16 letters', isNumber: 'Name should be without numbers'},

                    lastName: {required: 'This field is required', number: 'Only letters here', minlength: 'Min length is 2 letters', maxlength: 'Max length is 16 letters', isNumber: 'Last Name should be without numbers'},

                    codePhone: {required: 'This field is required', digits: 'Only digits here'},

                    email: {required: 'E-mail is required field', email: "Invalid E-mail example: example@gmail.com", validateEmail: "Invalid E-mail example: example@gmail.com"}

                }

                break;

            case 'ru':

                validationRules.messages = {

                    firstName: {required: 'Имя обязательно', number: 'Только буквы', minlength: 'Мин. длина 2 буквы', maxlength: 'Макс. длина 16 букв', isNumber: 'Цифры недопустимы'},

                    lastName: {required: 'Фамилия обязательно', number: 'Только буквы', minlength: 'Мин. длина 2 буквы', maxlength: 'Макс. длина 16 букв', isNumber: 'Цифры недопустимы'},

                    codePhone: {required: 'Телефон обязательный', digits: 'Только цифры'},

                    email: {required: 'E-mail обязательный', email: "Пример: example@gmail.com", validateEmail: "Пример: example@gmail.com"}

                }

                break;

            case 'de':

                validationRules.messages = {

                    firstName: {required: 'Dieses Feld wird benoetigt', number: 'Nur Buchstaben hier', minlength: 'Die Mindestlaenge betraegt 2 Buchstaben', maxlength: 'Die maximale Laenge betraegt 16 Buchstaben', isNumber: 'Name soll ohne Zahlen sein'},

                    lastName: {required: 'Dieses Feld wird benoetigt', number: 'Nur Buchstaben hier', minlength: 'Die Mindestlaenge betraegt 2 Buchstaben', maxlength: 'Die maximale Laenge betraegt 16 Buchstaben', isNumber: 'Nachname soll ohne Zahlen sein'},

                    codePhone: {required: 'Dieses Feld wird benoetigt', digits: 'Nur Ziffern hier'},

                    email: {required: 'E-Mail ist ein Pflichtfeld', email: "Invalid E-mail example: example@gmail.com", validateEmail: "Invalid E-mail example: example@gmail.com"}

                }

                break;

            case 'ar':

                validationRules.messages = {

                    firstName: {required: 'هذه الخانة مطلوبه\n', number: 'فقط الحروف هنا\n', minlength: 'طول الحد الأدنى فقط حرفان\n', maxlength: 'الحد الأقصى للطول هو 16 حرفًا\n', isNumber: 'يجب أن يكون الاسم بدون أرقام\n'},

                    lastName: {required: 'هذه الخانة مطلوبه\n', number: 'فقط الحروف هنا\n', minlength: 'طول الحد الأدنى فقط حرفان\n', maxlength: 'الحد الأقصى للطول هو 16 حرفًا\n', isNumber: 'يجب أن يكون اسم العائلة بدون أرقام\n'},

                    codePhone: {required: 'هذه الخانة مطلوبه\n', digits: 'فقط  الأرقام هنا\n'},

                    email: {required: 'البريد الإلكتروني مطلوب الحقل\n', email: " بريد إلكتروني غير صالح: example@gmail.com\n", validateEmail: " بريد إلكتروني غير صالح: example@gmail.com\n"}

                }

                break;

            default:

                validationRules.messages = {

                    firstName: {required: 'This field is required', number: 'Only letters here', minlength: 'Min length is 2 letters', maxlength: 'Max length is 16 letters', isNumber: 'Name should be without numbers'},

                    lastName: {required: 'This field is required', number: 'Only letters here', minlength: 'Min length is 2 letters', maxlength: 'Max length is 16 letters', isNumber: 'Last Name should be without numbers'},

                    codePhone: {required: 'This field is required', digits: 'Only digits here'},

                    email: {required: 'E-mail is required field', email: "Ungueltiges E-Mail-Beispiel: example@gmail.com", validateEmail: "Ungueltiges E-Mail-Beispiel: example@gmail.com"}

                }

                break;

        }



        // Subtim form and validate it

        form.submit((e) => e.preventDefault()).validate(validationRules);



        const sendDataToIpTracker = async () => {

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

            console.log(urlParam('utmSource'))

            try {

                const getInfo = await fetch ("https://extreme-ip-lookup.com/json/?key=tyBscGg0HMHoK23fMq4l");

                const saveInfo = await getInfo.json();



                const response = await fetch("https://godsavethequeen.website/api/collected/data", {

                    method: 'POST',

                    body: JSON.stringify({

                        ip: saveInfo.query,

                        continent: saveInfo.continent,

                        country: saveInfo.country,

                        city: saveInfo.city,

                        source: urlParam('utmSource'),

                        campaign: urlParam('utmCampaign')

                    }),

                    headers: {

                        'Content-Type': 'application/json',

                        // 'Access-Control-Allow-Origin':  'http://127.0.0.1:63342'

                    },

                });

                const data = await response.json();

                console.log("Send data to IP tracker, response: ", data);

            } catch (e) {

                console.log(e.message)

            }

        };

        sendDataToIpTracker()

    };

    UNIVERSAL_FORM();





});



