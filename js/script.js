$(document).ready(function() {
    $(".submit").on("click", function(e) {
        var isValid;
        $("input").each(function() {
            var element = $(this);
            if (element.val() == "") {
                $(".modal").modal("hide");
                e.stopPropagation();
                isValid = false;
                console.log(element);
            }
        });
        validateform();
    });
});

function validateform() {
    var name = document.myform.name.value;
    var sname = document.myform.sname.value;
    var email = document.myform.email.value;
    var mobile = document.myform.mobile.value;
    var city = document.myform.city.value;
    var password = document.myform.password.value;

    if (name = null || name == "") {
        alert("Name is can not blank");
        return false;
    } else if (sname = null || sname == "") {
        alert("Sername is can not blank");
        return false;
    } else if (email = null || email == "") {
        alert("Email ID is can not blank");
        return false;
    } else if (mobile = null || mobile == "") {
        alert("Mobile is can not blank");
        return false;
    } else if (password == "" || password.lenght < 6) {
        alert("Password is can not blank");
        return false;
    } else if (city = null || city == "") {
        alert("City is can not blank");
        return false;
    }
}