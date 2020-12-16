var Form = new function () {

    /**
     * Метод инициализации Form
     *
     * @returns {Form}
     */
    this.init = function () {

        this.submit_count = 0;
        this.form_container = $('.form-container');
        this.country_input_val = '';
        this.validationCountries = ['gb', 'ie'];
        this.messages = {
            "firstname": "- поле обязательно для заполнения<br>- длина имени - не менее 2 символов<br>- поле должно содержать только буквы",
            "lastname": "- поле обязательно для заполнения<br>- длина имени - не менее 2 символов<br>- поле должно содержать только буквы",
            "email": "- поле должно содержать правильный email-адрес",
            "phone": "- поле должно содержать корректный номер телефона",
            "conditions": "Пожалуйста, подтвердите ваше согласие с условиями",
            "success": "Ваша регистрация прошла успешно, поздравляем Вас! Ожидайте звонка в ближайшее время.",
            "error": "К сожалению, регистрация не прошла успешно",
            "limit": "К сожалению, лимит на отправку формы исчерпан",
            0: "Поздравляем с успешной регистрацией. Ваш личный консультант свяжется с Вами в ближайшее время.",
            1: "Поздравляем с успешной регистрацией. Ваш личный консультант свяжется с Вами в ближайшее время. Через несколько секунд Вы будете перенаправлены в личный кабинет.",
            2: "Ваш адрес электронной почты уже зарегистрирован в системе. Пожалуйста, попробуйте другой адрес.",
            3: "Поздравляем с успешной регистрацией. Ваш личный консультант свяжется с Вами в ближайшее время.",
            4: "К сожалению, при регистрации произошла ошибка. Пожалуйста, попробуйте позже.",
            5: "К сожалению, в данный момент нет подходящих для Вас брокеров.",
            6: "Поздравляем с успешной регистрацией. К сожалению, система в данный момент недоступна. Ваш личный консультант свяжется с Вами в ближайшее время.",
            7: "К сожалению, введенные Вами данные не могут быть приняты системой. Попробуйте другие регистрационные данные."
        };
        this.timeout;
        this.truePhone;
        this.trueEmail;
        this.preloadButton = '<svg viewBox="0 0 125 125" width="40" height="25" xmlns="http://www.w3.org/2000/svg" fill="#fff"><rect y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="30" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="60" width="15" height="140" rx="6"><animate attributeName="height" begin="0s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="90" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.25s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.25s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect><rect x="120" y="10" width="15" height="120" rx="6"><animate attributeName="height" begin="0.5s" dur="1s" values="120;110;100;90;80;70;60;50;40;140;120" calcMode="linear" repeatCount="indefinite"/><animate attributeName="y" begin="0.5s" dur="1s" values="10;15;20;25;30;35;40;45;50;0;10" calcMode="linear" repeatCount="indefinite"/></rect></svg>';


        this.initFormData();
        this.addUrlData();

        return this;
    };

    /**
     * Метод инициализации елементов
     *
     * @returns {void}
     */
    this.initElem = function () {

        this.main_modal = $(".main-modal");
        this.post_modal = $('#postModal');
        this.congrats_modal = $('.congrats');
        this.congrats_alert = $('.congrats-left__text');
        this.call_back_modal = $("#call_back_form");
        this.alert = $('#postModal .alert');
        this.closer = $('.close-form');
        this.affID = $('input[data-validation-type="affid"]');
        this.subID = $('input[data-validation-type="subid"]');
        this.offerID = $('input[data-validation-type="offerid"]');
        this.transID = $('input[data-validation-type="transactionid"]');
        this.plid = $('input[data-validation-type="plid"]');
        this.tsid = $('input[data-validation-type="tsid"]');
        this.buid = $('input[data-validation-type="buid"]');
        this.bcamp_id = $('input[data-validation-type="bcamp_id"]');
        this.waitWindow = $('.wait-window');
        this.hiddenParamForm = $('#hiddenParamForm');
        this.telInput = $("input[name=phone]");

    }

    /**
     * Метод инициализации динамики
     *
     * @returns {void}
     */
    this.initFormData = function () {

        this.getConfig();
        this.createForms();
        this.initElem();
        this.hideInputs();

    }

    /**
     * Метод инициализации загрузки страници
     *
     * @returns {void}
     */
    this.DOMReady = function () {

        this.validationOnInput();
        this.validationOnHover();
        this.submitForm();
        this.initCountrySelect();
        this.form_container.find('button[type=submit]').attr('disabled', 'disabled');
    }

    this.getConfig = function () {

        this.config = CONFIG;
        this.forms = this.config['forms'];
        this.style = this.config['style'];
        this.template = this.config['main-template'];
        this.inputs = this.config['inputs-template'];
        this.modal = this.config['modal-template'];
        this.source_id = this.config['source-id'];
        this.registration = this.config['registration'];
        this.iframe = this.config['iframe'];
        this.iframeTemplate = this.config['iframe-template'];
        this.externalTrackers = this.config['externalTrackers'];
        this.externalTrackerEvents = this.config['externalTrackerEvents'];
        this.backOffer = this.config['backOffer'];
        this.backOfferEnabled = this.config['backOfferEnabled'];
        this.secondOffer = this.config['secondOffer'];
        this.secondOfferEnabled = this.config['secondOfferEnabled'];
        this.defaultAffiliateID = this.config['defaultAffiliateID'];
        this.defaultOfferID = this.config['defaultOfferID'];
        this.emailValidation = this.config['emailValidation'];
        this.phoneValidation = this.config['phoneValidation'];
        this.redirectTarget = this.config['redirectTarget'];
        if (this.config['validationCountries']) this.validationCountries = this.config['validationCountries'];

        this.changeConfig();

    }

    /**
     * Метод замены config
     *
     * @returns {void}
     */
    this.changeConfig = function () {
        if (this.urlParam('reg'))
            this.registration = this.urlParam('reg')
        if (this.urlParam('bo') === '1')
            this.backOfferEnabled = true
        if (this.urlParam('so') === '1')
            this.secondOfferEnabled = true
    }

    this.createForms = function () {

        for (var input in this.inputs) {
            this.form_container.append(this.inputs[input]);
        }
        this.form_container.append('<style>' + this.style + '</style>', this.template);
        $('body').append(this.modal, this.iframeTemplate);

    }

    this.hideInputs = function () {

        !this.config['modal'] ? this.closer.hide() : this.closer.show();

        for (var form in this.forms) {

            for (var param in this.forms[form].hidden) {
                $("#" + form).find('input[name=' + param + ']').attr({
                    'type': 'hidden',
                    'value': param !== 'country' ? this.forms[form].hidden[param] : ''
                }).siblings('label:not(#code-label)').hide();
                if (param === 'age') {
                    $("#" + form).find('input[name=age]').parent().hide()
                } else if (param === 'conditions') {
                    $("#" + form).find('input[name=conditions]').parent().hide()
                }

            }

            if (this.forms[form].hidden.hasOwnProperty('country')) {
                this.country_input_val = this.forms[form].hidden['country'];
            }

        }

    }

    /**
     * Метод парсинга URL
     *
     * @param {string} name
     * @returns {result}
     */
    this.urlParam = function (name, location) {
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results !== null) {
            return results[1] || 0;
        } else {
            return false;
        }

    }

    /**
     * Метод заменения backOffer и secondOffer с URL
     *
     * @returns {void}
     */
    this.changeOffers = function (name) {

        var arr = ['affiliate_id', 'aff_sub', 'offer_id', 'transaction_id', 'plid', 'tsid', 'buid', 'bcamp_id'],
            newOffer = name;
        for (var i = 0; i <= arr.length - 1; i++) {
            if (newOffer.includes('{' + arr[i] + '}')) {
                var defaultName = '',
                    splitOffer = newOffer.split('{' + arr[i] + '}')

                if (arr[i] === 'affiliate_id') {

                    defaultName = this.urlParam('affiliate_id') ?
                        this.urlParam('affiliate_id') :
                        this.affID.val() ?
                            this.affID.val() :
                            this.defaultAffiliateID;
                } else if (arr[i] === 'offer_id') {

                    defaultName = this.urlParam('offer_id') ?
                        this.urlParam('offer_id') :
                        this.offerID.val() ?
                            this.offerID.val() :
                            this.defaultOfferID;
                }

                newOffer = splitOffer[0] + defaultName + splitOffer[1]
            }
        }
        return newOffer
    }

    /**
     * Метод парсинга URL и заполенения полей
     *
     * @returns {void}
     */
    this.addUrlData = function () {


        if (this.hiddenParamForm.length > 0) {
            var html = this.hiddenParamForm.html();
            $('.form-container .form_group--hidden').html(html);
        } else {
            this.urlParam('affiliate_id') ?
                this.affID.val(this.urlParam('affiliate_id')) :
                !this.affID.val() ?
                    this.affID.val(this.defaultAffiliateID) :
                    '';
            this.urlParam('offer_id') ?
                this.offerID.val(this.urlParam('offer_id')) :
                !this.offerID.val() ?
                    this.offerID.val(this.defaultOfferID) :
                    '';
            this.urlParam('aff_sub') ? this.subID.val(this.urlParam('aff_sub')) : '';
            this.urlParam('transaction_id') ? this.transID.val(this.urlParam('transaction_id')) : '';
            this.urlParam('plid') ? this.plid.val(this.urlParam('plid')) : '';
            this.urlParam('tsid') ? this.tsid.val(this.urlParam('tsid')) : '';
            this.urlParam('buid') ? this.buid.val(this.urlParam('buid')) : '';
            this.urlParam('bcamp_id') ? this.bcamp_id.val(this.urlParam('bcamp_id')) : '';
        }

    }

    /**
     * Метод валидации телефона и почты c бека
     *
     * @param {object} data
     * @returns {void}
     */
    this.checkValidationRemote = function (data) {
        return new Promise(function (resolve, reject) {
            var json;
            switch (data.name) {
                case 'email':
                    json = {email_address: data.value};
                    break;
                case 'phone':
                    json =  {phone: data.value};
                    break;
            }
            $.post('' + data.name, JSON.stringify(json), function (response) {
                var r = JSON.parse(response);
                resolve(r.success);

            }).fail(function (res) {
                reject(false)
            })
        })
    }

    /**
     * Метод валидации телефона с помощю СheckMobi сервиса.
     *
     * @param {string} phone
     * @returns {void}
     */
    this.checkPhoneRemote = function (phone) {
        return new Promise(function (resolve, reject) {
            var json = {phone: phone};
            $.post('', JSON.stringify(json), function (response) {
                var r = JSON.parse(response);
                resolve(r.success);
            }).fail(function (res) {
                reject(false);
            })
        })
    }

    /**
     * Метод валидации кода телефона.
     *
     * @returns {void}
     */
    this.checkCodeRemote = function () {
        return new Promise(function (resolve, reject) {
            var json = {
                phone: Form.truePhone,
                code: $("input[name=code]").val()
            };
            $.post('', JSON.stringify(json), function (response) {
                var r = JSON.parse(response);
                resolve(r.success);
            }).fail(function (res) {
                reject(false);
            })
        })
    }

    this.check_required_inputs = function (target) {
        var findEmpty = true
        if ($(target[0].form).find('.invalid').length > 0) findEmpty = false
        $(target[0].form).find('input[required]:not([name=code]):not([type=checkbox]):not([type=hidden])').each(function () {
            if ($(this).val() === "") {
                findEmpty = false
            }
        });
        $(target[0].form).find('input[type=checkbox]').each(function () {
            if (!$(this).prop("checked")) {
                findEmpty = false
            }
        });
        return findEmpty
    };


    this.validInput = function ($target, name) {
        if (name === 'phone') {
            $target.removeClass('invalid')
                .addClass('valid')
                .parent()
                .siblings('.error').text('')
                .siblings(".validation").fadeOut(200);
        } else {
            $target.removeClass('invalid')
                .addClass('valid')
                .siblings('.error').text('')
                .siblings(".validation").fadeOut(200);
        }
        if (Form.check_required_inputs($target)) {
            $target.parents('.form-container').find('button[type=submit]').removeAttr('disabled');
        }
    }

    this.invalidInput = function ($target, name) {
        if (name === 'phone') {
            $target.removeClass('valid')
                .addClass('invalid')
                .parent()
                .siblings('.error').html(Form.messages[name])
                .siblings(".validation").fadeIn(200);
        } else {
            $target.removeClass('valid')
                .addClass('invalid')
                .siblings('.error').html(Form.messages[name])
                .siblings(".validation").fadeIn(200);
        }
        $target.parents('.form-container').find('button[type=submit]').attr('disabled', 'disabled');
    }

    this.validCheckbox = function ($target) {
        $target.removeClass('invalid')
            .addClass('valid')
            .parent()
            .siblings('.error')
            .text('')
            .siblings(".validation")
            .fadeOut(200);
        if (Form.check_required_inputs($target)) {
            $target.parents('.form-container').find('button[type=submit]').removeAttr('disabled');
        }
    }

    this.invalidCheckbox = function ($target, name) {
        $target.parent()
            .siblings('.error')
            .html(Form.messages[name])
            .siblings(".validation").fadeIn(200);
        $target.parents('.form-container').find('button[type=submit]').attr('disabled', 'disabled');
    }

    this.check_validation = function (target) {

        var $target = target,
            validType = $target.data('validation-type'),
            val = $target.val();

        switch (validType) {

            case 'firstname':
            case 'lastname':
                var rv_name = /^[(a-zA-Zа-яА-Я-')]*$/;
                val = val.split(' ').join('');
                val.length > 2 && val != '' && rv_name.test(val) ?
                    Form.validInput($target) :
                    Form.invalidInput($target, validType)
                break;

            case 'email':
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

                if (this.emailValidation === 0) {
                    Form.validInput($target);
                } else if (this.emailValidation === 1 || this.emailValidation === undefined) {

                    val != '' && rv_email.test(val) ?
                        Form.validInput($target) :
                        Form.invalidInput($target, validType)

                } else if (this.emailValidation === 2) {

                    if (val != '' && rv_email.test(val)) {
                        clearTimeout(this.timeout);
                        this.timeout = setTimeout(function () {

                            Form.checkValidationRemote({
                                name: 'email',
                                value: val
                            }).then(function (res) {
                                Form.trueEmail = val;
                                if (res) {
                                    Form.validInput($target);
                                } else {
                                    Form.invalidInput($target, validType);
                                }
                            }).catch(function (error) {
                                Form.invalidInput($target, validType);
                            })
                        }, 1000)
                    } else {
                        Form.invalidInput($target, validType);
                    }

                }
                break;

            case 'phone':

                var country = Form.telInput.intlTelInput("getSelectedCountryData").iso2;
                var rv_name = /^([- _().:=+]?\d[- _().:=+]?){2,14}(\s*)?$/;

                if (this.phoneValidation === 0) {
                    Form.validInput($target, validType);
                } else if (this.phoneValidation === 1) {

                    $target.intlTelInput("isValidNumber") && $.trim(val) && rv_name.test(val) ?
                        Form.validInput($target, validType) :
                        Form.invalidInput($target, validType)

                } else if (this.phoneValidation === 3 || this.validationCountries.includes(country)) {

                    if ($target.intlTelInput("isValidNumber") && $.trim(val) && rv_name.test(val)) {
                        clearTimeout(this.timeout);
                        this.timeout = setTimeout(function () {

                            val = $target.intlTelInput("getNumber", intlTelInputUtils.numberFormat.E164);
                            Form.checkPhoneRemote(val)
                                .then(function (res) {
                                    Form.truePhone = val;
                                    if (res) {
                                        Form.validInput($target, validType);
                                        $target.parents('form')
                                            .find('.form_input--group.code')
                                            .show()
                                            .find('input')
                                            .attr('type', 'number');
                                        $target.attr('disabled', 'disabled');
                                    } else {
                                        Form.invalidInput($target, validType);
                                    }
                                }).catch(function (error) {
                                Form.invalidInput($target, validType);
                            })
                        }, 500)
                    } else {
                        Form.invalidInput($target, validType);
                    }


                } else if (this.phoneValidation === 2 || this.phoneValidation === undefined) {

                    if ($target.intlTelInput("isValidNumber") && $.trim(val) && rv_name.test(val)) {
                        clearTimeout(this.timeout);
                        this.timeout = setTimeout(function () {
                            val = $target.intlTelInput("getNumber", intlTelInputUtils.numberFormat.E164);
                            Form.checkValidationRemote({
                                name: 'phone',
                                value: val
                            }).then(function (res) {
                                Form.truePhone = val;
                                if (res) {
                                    Form.validInput($target, validType);
                                } else {
                                    Form.invalidInput($target, validType);
                                }
                            }).catch(function (error) {
                                Form.invalidInput($target, validType);
                            })
                        }, 500)
                    } else {
                        Form.invalidInput($target, validType);
                    }

                }
                break;

            case 'age':
            case 'conditions':
                !$target.prop("checked") ?
                    Form.invalidCheckbox($target, 'conditions') :
                    Form.validCheckbox($target)
                break;

            case 'code':

                if (val.length === 5) {
                    clearTimeout(this.timeout);
                    this.timeout = setTimeout(function () {
                        Form.checkCodeRemote()
                            .then(function (res) {
                                if (res) {
                                    Form.validInput($target);
                                    $target.attr('disabled', 'disabled')
                                } else {
                                    Form.invalidInput($target, validType);
                                }
                            }).catch(function (error) {
                            Form.invalidInput($target, validType);
                        })
                    }, 500)
                }


                break;
        }
    };

    /**
     * Метод инициализации валидации
     *
     * @returns {void}
     */
    this.validationOnInput = function () {
        this.form_container.find('input').on('input', function (event) {
            Form.check_validation($(event.target))
        })
    };

    /**
     * Метод инициализации валидации при hover кнопки отправки формы
     *
     * @returns {void}
     */
    this.validationOnHover = function () {
        this.form_container.find('.form_group--button').on('mouseover touchstart', function (e) {
            var inputs = Form.form_container.find('input').not(".valid").not(":hidden");
            for (var i = 0; i <= inputs.length - 1; i++) {
                Form.check_validation($(inputs[i]))
            }
        })
    };

    this.registrationFrame = function (res, json) {
        setTimeout(function () {
            var url = res.message;
            var ifr = document.getElementById('iframe');
            ifr.src = url.replace("http:", "https:");
            ifr.onload = function () {
                window.location.replace("app.php?username=" + json.first_name + " " + json.last_name + "&email=" + json.email_address);
            };
        }, 5000)
    };

    this.registrationTrue = function (res, json) {
        if (res.code === 1) {
            if (this.iframe) {
                this.waitWindow.show();
                Form.alert.addClass('alert-success').text(Form.messages[res.code]);
                this.registrationFrame(res, json)
            } else {
                this.waitWindow.show();
                Form.alert.addClass('alert-success').text(Form.messages[res.code]);
                setTimeout(function () {
                    window.location.assign(res.message);
                }, Form.registerRedirectDelay || 5000)
            }
        } else {
            Form.alert.addClass('alert-success').text(Form.messages[res.code]);
        }

    };

    /**
     * Метод создания JSON для нагрузки запросов
     *
     * @param {DOM} parent
     *
     * @returns {Object}
     **/

    this.submitForm = function () {

        this.form_container.submit(function (e) {
            e.preventDefault();


            var countryData = Form.telInput.intlTelInput("getSelectedCountryData");
            var json = {
                partner: $(this).find('input[name="partner"]').val(),
                language: $(this).find('input[name="language"]').val(),
                clickid: $(this).find('input[name="clickid"]').val(),
                source: $(this).find('input[name="source"]').val(),
                firstName: $(this).find('input[data-validation-type="firstname"]').val(),
                lastName: $(this).find('input[data-validation-type="lastname"]').val(),
                //first_name: $(this).find('input[data-validation-type="firstname"]').val(),
                //last_name: $(this).find('input[data-validation-type="lastname"]').val(),
                email: Form.trueEmail || $(this).find('input[data-validation-type="email"]').val(),
                //email_address: Form.trueEmail || $(this).find('input[data-validation-type="email"]').val(),
                phone: Form.truePhone || $(this).find('input[data-validation-type="phone"]').intlTelInput("getNumber", intlTelInputUtils.numberFormat.E164),
                country: countryData.iso2,
                //countryISO: countryData.iso2,
                //affiliate_id: $(this).find('input[data-validation-type="affid"]').val(),
                //aff_sub: $(this).find('input[data-validation-type="subid"]').val(),
                //offer_id: $(this).find('input[data-validation-type="offerid"]').val(),
                //transaction_id: $(this).find('input[data-validation-type="transactionid"]').val(),
                //plid: $(this).find('input[data-validation-type="plid"]').val(),
                //tsid: $(this).find('input[data-validation-type="tsid"]').val(),
                //buid: $(this).find('input[data-validation-type="buid"]').val(),
                //bcamp_id: $(this).find('input[data-validation-type="bcamp_id"]').val(),
                //source_id: Form.source_id,
                //registration: Form.registration,
                redirectTarget: Form.redirectTarget
            };

            if (Form.submit_count < 3) {

                if (!$(this).find('.invalid').length) {

                    var $button = $(this).find('button[type=submit]');
                    var defaultButtonHtml = $button.html();
                    $button.html(Form.preloadButton);
                    $button.attr('disabled', 'disabled');

                    $.post('https://promo-fin.com/api.php?api=add', JSON.stringify(json), function (response) {
                        // console.log('ADD');
                        try {
                            var r = JSON.parse(response);
                            console.log(r);
                            console.log('Sent');
                            if (Form.redirectTarget !== '') {
                                if (r.redirectUrl !== undefined || typeof r.redirectUrl !== 'undefined') {
                                    function setCookie(cname, cvalue, exdays) {
                                        var d = new Date();
                                        d.setTime(d.getTime() + (exdays*24*60*60*1000));
                                        var expires = "expires="+ d.toUTCString();
                                        var updatedCookie = encodeURIComponent(cvalue);
                                        document.cookie = cname + "=" + updatedCookie + ";" + expires;
                                    }
                                    setCookie('reLink', r.redirectUrl, 1);
                                }
                                setTimeout(function () {
                                    window.location.href = Form.redirectTarget;
                                }, 1000);
                            } else if (r.redirectUrl !== undefined || typeof r.redirectUrl !== 'undefined') {
                                setTimeout(function () {
                                    window.location.href = r.redirectUrl;
                                }, 1000);
                            } else {
                                Form.alert.removeClass('alert-danger');
                                Form.alert.addClass('alert-success').text(Form.messages.success);
                                setTimeout(function () {
                                    Form.post_modal.modal('show');
                                }, 500);
                            }
                        } catch (err) {
                            Form.alert.addClass('alert-danger').text(Form.messages.error);
                            setTimeout(function () {
                                Form.post_modal.modal('show');
                            }, 500);
                        }
                        Form.main_modal ? Form.main_modal.modal('hide') : "";
                        Form.submit_count++;
                        $button.html(defaultButtonHtml);
                        $button.removeAttr('disabled');

                    }).fail(function (res) {
                        try {
                            var r = JSON.parse(res.responseJSON);
                            Form.alert.addClass('alert-danger').text(Form.messages[r.code]);
                            if (r.code === 2 || r.code === 5) Form.submit_count++;
                            if (r.code === 5) {
                                Form.congrats_alert.html(Form.messages[0]);
                                congrats();
                            } else {
                                Form.main_modal ? Form.main_modal.modal('hide') : "";
                                setTimeout(function () {
                                    Form.post_modal.modal('show');
                                }, 500)
                            }
                        } catch (err) {
                            Form.alert.addClass('alert-danger').text(Form.messages.error);
                            Form.main_modal ? Form.main_modal.modal('hide') : "";
                            setTimeout(function () {
                                Form.post_modal.modal('show');
                            }, 500)
                        }
                        $button.html(defaultButtonHtml);
                        $button.removeAttr('disabled');

                    });
                } else {
                    return false;
                }

            } else {

                Form.alert.addClass('alert-danger').text(Form.messages.limit);
                Form.main_modal ? Form.main_modal.modal('hide') : "";
                setTimeout(function () {
                    Form.post_modal.modal('show');
                }, 500)

            }

        });
    };
    this.initCountrySelect = function () {

        Form.telInput.intlTelInput({
            initialCountry: "auto",
            autoHideDialCode: true,
            separateDialCode: true,
            geoIpLookup: function(callback) {
                $.get('https://ipinfo.io?token=7eb3528e375a59', function() {}, "jsonp").always(function(resp) {
                    var countryCode = (resp && resp.country) ? resp.country : "";
                    callback(countryCode);
                    // $('input[name=\'country\']').val(countryCode);
                    // console.log(countryCode);
                });
            },
        });


        // if (this.country_input_val === '') {
        //     $.post(Form.mainDomain + '/geoip/', function (response) {
        //         this.country_input_val = response.toLowerCase();
        //         Form.telInput.intlTelInput("setCountry", this.country_input_val);
        //         Form.telInput.on("countrychange", function (e, countryData) {
        //             Form.telInput.intlTelInput("setCountry", countryData.iso2);
        //             Form.check_validation($(this));
        //         });
        //     })
        //         .fail(function (err) {
        //             throw new Error(err);
        //         });
        // } else {
        //     Form.telInput.intlTelInput("setCountry", this.country_input_val);
        // }
        //
        // $("#phone").intlTelInput({
        //     initialCountry: "auto",
        //     geoIpLookup: function(callback) {
        //         $.get('https://ipinfo.io?token=7d70a91745546b', function() {}, "jsonp").always(function(resp) {
        //             var countryCode = (resp && resp.country) ? resp.country : "";
        //             $('#kingdom').val(countryCode);
        //             $('#ip').val(resp.ip);
        //             callback(countryCode);
        //         });
        //     },
        //     utilsScript: "build/js/utils.js" // just for formatting/placeholders etc
        // });

        // if (this.country_input_val === '') {
        //     $.post('/send.php?action=geoip', function (response) {
        //             this.country_input_val = response.toLowerCase();
        //             Form.telInput.intlTelInput("setCountry", this.country_input_val);
        //             Form.telInput.on("countrychange", function (e, countryData) {
        //                 Form.telInput.intlTelInput("setCountry", countryData.iso2);
        //                 Form.check_validation($(this));
        //             });
        //         })
        //         .fail(function (r) {
        //             console.log(r);
        //         });
        // } else {
        //     Form.telInput.intlTelInput("setCountry", this.country_input_val);
        // }

    }

}

Form.init();
$(document).ready(function () {
    Form.DOMReady();
});