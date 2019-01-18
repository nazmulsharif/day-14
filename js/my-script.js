function checkFirstName(){
    var firstNameLength = $('#firstName').val().length;
    if(firstNameLength>=6 && firstNameLength<=15){
        $('#firstNameError').text(' ');

    }
    else{
        $('#firstNameError').text('first name should be 6 to 15 characters');
    }

}
$('#firstName').click(function () {
    checkFirstName();
});
$('#firstName').blur(function () {
    checkFirstName();
});
$('#firstName').keyup(function () {
    checkFirstName();
});
function checkLastName(){
    var lastNameLength=$('#lastName').val().length;
    if (lastNameLength>=6 && lastNameLength<=20){
        $('#lastNameError').text(" ");
    }
    else
        $('#lastNameError').text('last name should be 6 to 15 characters');
}
$("#lastName").click(function () {
    checkLastName();
})
$('#lastName').blur(function () {
    checkLastName();
})
$('#lastName').keyup(function () {
    checkLastName();
})
function fullName(){
   var firstNameValue= $('#firstName').val();
   var lastNameValue = $('#lastName').val();
   var fullNamevalue =firstNameValue+" "+lastNameValue;
   $('#fullName').val(fullNamevalue);
}
$('#fullName').click(function(){
    fullName();
});

function checkEmailAddress() {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-z]{2,4}$/i);
    if(pattern.test($('#emailAddress').val())){
        $('#emailAddressError').text(" ");
    }
    else
        $('#emailAddressError').text("email address invalid");
}
$('#emailAddress').click(function () {
    checkEmailAddress();
});
$('#emailAddress').blur(function () {
    checkEmailAddress();
});

$('#emailAddress').keyup(function () {
    checkEmailAddress();
})
function checkPassword(){
     var passwordLength =$('#password').val().length;
     if(passwordLength>=6 && passwordLength<=10){
         $('#passwordError').text(" ");
     }
     else
         $('#passwordError').text("password must be between 6 to 10 characters");
}
$('#password').click(function (){
    checkPassword();
});
$('#password').blur(function (){
    checkPassword();
});
$('#password').keyup(function (){
    checkPassword();
});
function checkConfirmPassword() {
    var passwordValue = $('#password').val();
    var confirmPasswordValue=$('#confirmPassword').val();
    if(passwordValue==confirmPasswordValue){
        $('#confirmPasswordError').text(" ");
    }
    else
        $("#confirmPasswordError").text("password is not match");
 }
$("#confirmPassword").click(function () {
    checkConfirmPassword();
})
$("#confirmPassword").blur(function () {
    checkConfirmPassword();
})
$("#confirmPassword").keyup(function () {
    checkConfirmPassword();
})


