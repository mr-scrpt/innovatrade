var CONFIG = {
	"forms": {
		"activate_form" : {
			"hidden" : {
				"register-currency": ""
			},
			"modal": false
		},
		"exit_form" : {
			"hidden" : {
				"register-currency": ""
			},
			"modal": false
		},
		"wait_form" : {
			"hidden" : {
				"register-currency": ""
			},
			"modal": false
		},
		"register_form" : {
			"hidden" : {
				//"register-currency": ""
			},
			"modal": false
		},
		"call_back_form" : {
			"hidden" : {
				"register-currency": ""
			},
			"modal": false
		}
	},
	"registration" : false,
	"iframe" : false,
	"source-id" : "0",
	"style" : "@keyframes lds-facebook_1{0%{top:36px;height:128px}50%{top:60px;height:80px}100%{top:60px;height:80px}}@-webkit-keyframes lds-facebook_1{0%{top:36px;height:128px}50%{top:60px;height:80px}100%{top:60px;height:80px}}@keyframes lds-facebook_2{0%{top:42px;height:116px}50%{top:60px;height:80px}100%{top:60px;height:80px}}@-webkit-keyframes lds-facebook_2{0%{top:42px;height:116px}50%{top:60px;height:80px}100%{top:60px;height:80px}}@keyframes lds-facebook_3{0%{top:48px;height:104px}50%{top:60px;height:80px}100%{top:60px;height:80px}}@-webkit-keyframes lds-facebook_3{0%{top:48px;height:104px}50%{top:60px;height:80px}100%{top:60px;height:80px}}.lds-facebook{position:relative}.lds-facebook div{position:absolute;width:30px}.lds-facebook div:nth-child(1){left:35px;background:#fdfdfd;-webkit-animation:lds-facebook_1 1s cubic-bezier(0,0.5,0.5,1) infinite;animation:lds-facebook_1 1s cubic-bezier(0,0.5,0.5,1) infinite;-webkit-animation-delay:-.2s;animation-delay:-.2s}.lds-facebook div:nth-child(2){left:85px;background:#85a2b6;-webkit-animation:lds-facebook_2 1s cubic-bezier(0,0.5,0.5,1) infinite;animation:lds-facebook_2 1s cubic-bezier(0,0.5,0.5,1) infinite;-webkit-animation-delay:-.1s;animation-delay:-.1s}.lds-facebook div:nth-child(3){left:135px;background:#bbcedd;-webkit-animation:lds-facebook_3 1s cubic-bezier(0,0.5,0.5,1) infinite;animation:lds-facebook_3 1s cubic-bezier(0,0.5,0.5,1) infinite}.lds-facebook{width:200px!important;height:200px!important;-webkit-transform:translate(-100px,-100px) scale(1) translate(100px,100px);transform:translate(-100px,-100px) scale(1) translate(100px,100px);margin:20% auto 0}.wait-window{z-index:999999;position:relative;position:fixed;top:0;left:0;width:100%;height:100%;display:none;}",
	"iframe-template": "<iframe src='' id='iframe' style='display:none'></iframe>",
	"modal-template" : "<div id='postModal' class='modal fade' tabindex='-1' role='dialog'> <div class='modal-dialog' role='document'> <div class='modal-content'> <div class='modal-body'> <a type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></a><div class='alert' role='alert'></div></div></div></div></div>",
	"inputs-template" : {
		"firstname" : "<div class='form_group--name'><input data-validation-type='firstname' name='firstname' placeholder='Имя' required><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		"lastname" : "<div class='form_group--name'><input data-validation-type='lastname' placeholder='Фамилия' name='lastname' value='' required><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		"email" : "<div class='form_group--email'><input type='email' data-validation-type='email' name='email' placeholder='Электронная почта' required><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		"phone" : "<div class='form_input--group'><input  data-validation-type='phone' name='phone' placeholder='' required><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		"code" : "<div class='form_input--group code' style='display:none'><p>В течении минуты вам позвонят. Введите пять первых цифр со входящего номера</p><input type='hidden' data-validation-type='code' name='code' placeholder='Введите первые пять цифр' required><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		"conditions" : "<div class='checkbox-wrapper'><label><input  class='inverted' required name='conditions' type='checkbox' data-validation-type='conditions' checked> Я согласен с <a href='#' data-terms='use'>Клиентским соглашением</a></label><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		//"age" : "<div class='checkbox-wrapper'><label><input class='inverted' required name='age' type='checkbox' data-validation-type='age' checked> Мне больше 18 лет</label><div class='validation'><i class='fjs fjs-exclamation'></i></div> <div class='error'></div></div>",
		//"register-currency" : "<div class='form_group--radio'><input class='form_group--radio-input' value='rub' id='radio-1' name='register-currency' checked='' type='radio'> <label for='radio-1'>Рубль</label> <input class='form_group--radio-input' value='usd' id='radio-2' name='register-currency' type='radio'> <label for='radio-2'>Доллар</label> <input class='form_group--radio-input' value='eur' id='radio-3' name='register-currency' type='radio'> <label for='radio-3'>Евро</label> </div>"
	},
	"main-template" : "<div class='form_group--hidden'><input type='hidden' name='partner'><input type='hidden' name='country'><input type='hidden' name='language'></div><input type='hidden' name='source'></div><input type='hidden' name='clickid'></div><div class='form_group--button'><button class='btn btn-primary primary-btn send-form' style='margin-top: 10px' type='submit'>Хочу получить <br> 60 000₽ сегодня!</button> <button type='button' class='btn btn-default close-form' data-dismiss='modal'> Back</button> </div>",
	"externalTrackers": [
		{
			"position": "head",
			"code": "console.log('head')"
		},
		{
			"position": "body",
			"code": "console.log('body')"
		}
	],
	"externalTrackerEvents": [
		{
			"event": "load",
			"code": "console.log('load event')"
		},
		{
			"event": "registration",
			"code": "console.log('registration event')"
		}
	],
	"backOffer": false,
	"backOfferEnabled": false,
	"secondOffer": false,
	"secondOfferEnabled": false,
	"defaultAffiliateID": 1234,
	"defaultOfferID": 4567,
	"emailValidation": 1,
	"phoneValidation": 1,
	"redirectTarget": "",
	"validationCountries": [],
	"enableAgentGenderSelector": false,
	"registerRedirectDelay": false,
	"preferredCountryList": ["kz", "ua", "by", "ge"]

};

$.FormJS_Form = (function() {
	if ($.FormJS) {
		return function(list) {
			if (!list || (list && !list.length)) {
				list = [
					'{url:first}/{language}/form.js',
					'{url:second}/{language}/form.js',
					'{path}/files/{language}/form.js'
				];
			}
			return $.FormJS('GetScript', list);
		}
	} else {
		var formsList = [ 
			'js/form.js'
		];
		return $.getScript(formsList[0]).fail(function() {
			$.getScript(formsList[1]).fail(function() {
				$.getScript(formsList[2]);
			});
		});
	}
})();