(function ($) {
    "use strict";
    /*==================================================================
        [ Daterangepicker ]*/
    try {
        $(".js-datepicker").daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            autoUpdateInput: false,
            locale: {
                format: "DD/MM/YYYY",
            },
        });

        var myCalendar = $(".js-datepicker");
        var isClick = 0;

        $(window).on("click", function () {
            isClick = 0;
        });

        $(myCalendar).on("apply.daterangepicker", function (ev, picker) {
            isClick = 0;
            $(this).val(picker.startDate.format("DD/MM/YYYY"));
        });

        $(".js-btn-calendar").on("click", function (e) {
            e.stopPropagation();

            if (isClick === 1) isClick = 0;
            else if (isClick === 0) isClick = 1;

            if (isClick === 1) {
                myCalendar.focus();
            }
        });

        $(myCalendar).on("click", function (e) {
            e.stopPropagation();
            isClick = 1;
        });

        $(".daterangepicker").on("click", function (e) {
            e.stopPropagation();
        });
    } catch (er) {
        console.log(er);
    }
    /*[ Select 2 Config ]
        ===========================================================*/

    try {
        var selectSimple = $(".js-select-simple");

        selectSimple.each(function () {
            var that = $(this);
            var selectBox = that.find("select");
            var selectDropdown = that.find(".select-dropdown");
            selectBox.select2({
                dropdownParent: selectDropdown,
            });
        });
    } catch (err) {
        console.log(err);
    }
})(jQuery);

const showPass = document.getElementById("showPass");
const hidePass = document.getElementById("hidePass");
const password1 = document.getElementById("passwordShow1");
const password2 = document.getElementById("passwordShow2");

function show() {
    if (password1.type === "password") {
        password1.type = "text";
        password2.type = "text";

        hidePass.style.display = "block";
        showPass.style.display = "none";
    } else {
        password1.type = "password";
        password2.type = "password";    

        hidePass.style.display = "none";
        showPass.style.display = "block";
    }
}

