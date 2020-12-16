/* $(document).ready(function () {
  const form = $("#formfull");
  form.on("submit", (e) => {
    e.preventDefault();
  });
}); */

$("#formfull").validate({
  rules: {
    first_name: {
      required: true,
      minlength: 2,
    },
    last_name: {
      required: true,
      minlength: 2,
    },
    user_email: {
      required: true,
      email: true,
    },
    phone_num: {
      required: true,
      number: true,
      minlength: 10,
      maxlength: 10,
    },
  },
  messages: {
    first_name: {
      required: "Имя не может быть пустым",
      minlength: "Имя не может быть короче двух символов",
    },
    last_name: {
      required: "Фамилия не может быть пустой",
      minlength: "Фамилия не может быть короче двух символов",
    },
    user_email: {
      required: "Адрес почты не может быть пустым",
      email: "Адрес почты некорректен",
    },
    phone_num: {
      required: "Введите номер",
      number: "Номер должен содержать только цифры",
      minlength: "Номер не должен быть короче 9 цифр",
      maxlength: "Номер не должен быть длинее 9 цифр",
    },
  },
  submitHandler: function (form) {
    console.log("-> send!", $(form).attr("action"));
    const fname = $(form).find("#first_name").val();
    const lname = $(form).find("#last_name").val();
    const email = $(form).find("#user_email").val();
    const phonePrefix = $(form).find("#country_prefix").val();
    const phoneNumber = $(form).find("#phone_num").val();
    const fullphone = phonePrefix + phoneNumber;
    const source = "protradinginrussia.xyz";

    const data = {
      fname,
      lname,
      email,
      fullphone,
      source,
      //ip: document.ip,
      link_id: 884,
    };
    $.post("api.php", { ...data }, function (response) {
      console.log("-> resp", response);
      if (response.success === true) {
        localStorage.setItem("loginlink", response.autologin);

        setTimeout(() => {
          window.location.replace("/thankyou.html");
        }, 1000);
      } else {
        console.log("-> res", response);
        $(".form-title").html(
          `<b class="deco deco_err">${response.message}</b>`
        );
      }
    });
    /* const fname = $(form).find("#first_name").val();
    const lname = $(form).find("#last_name").val();
    const email = $(form).find("#user_email").val();
    const phonePrefix = $(form).find("#country_prefix").val();
    const phoneNumber = $(form).find("#phone_num").val();
    const fullphone = phonePrefix + phoneNumber;
    const source = "protradinginrussia.xyz";

    const data = {
      fname,
      lname,
      email,
      fullphone,
      source,
      ip: document.ip,
      link_id: 884,
    };

    $.post(
      "http://157.230.113.75:4444/data",
      { ...data, crossDomain: true },
      function (response) {
        if (response.success === true) {
          localStorage.setItem("loginlink", response.autologin);
          setTimeout(() => {
            window.location.replace("/thankyou.html");
          }, 1000);
        } else {
          console.log("-> res", response);
          $(".form-title").html(
            `<b class="deco deco_err">${response.message}</b>`
          );
        }
      }
    ); */
  },
});
$(document).ready(function () {
  document.ip = "";
  $.getJSON("https://api.ipify.org/?format=json", function (e) {
    document.ip = e.ip;
  });
});
