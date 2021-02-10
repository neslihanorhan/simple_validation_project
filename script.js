$("#phone").inputmask();

$(document).ready(function() {
    $('input[type="file"]').change(function(event){
        console.log(event);
        var fileName = event.target.files[0].name;
        document.getElementById("cvFile").innerHTML = fileName;
    });
});

// document.getElementById("cv").onchange = function(event) {
// 	document.getElementById("cvFile").innerHTML = event.path[0].files[0].name;
// };

function clearInputs() {
    // console.log("ok");
    // var inputs = document.querySelectorAll("input");
    // var options = document.querySelectorAll("select");			
    // console.log(inputs);
    // console.log(options);

    // inputs.forEach(function(input) {
    // 	input.value = "";
    // });
    // options.forEach(function(option) {
    // 	option.selectedIndex = 0;
    // });

    $("#form").find("input").each(function(index) {
        // console.log(index);
        $(this).val("");
    });

    $("#select").find("select").each(function(index) {
        // console.log(index);
        $(this).val("");
    });
}		

function save() {
    let usersStorageKey = "usersStorageKey";

    let myUser = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        birthDay: document.getElementById("datepicker").value,
        university: document.getElementById("university").value,
        branch: document.getElementById("branch").options[branch.selectedIndex].value,
        expertLevel: document.getElementById("expertLevel").options[expertLevel.selectedIndex].value,
        cv: document.getElementById("cv").value,
    }
    console.log(myUser);

    if(localStorage.getItem(usersStorageKey) === null) {
        // console.log("boş");
        users = [];
    } else {
        // console.log("devam");
        users = JSON.parse(localStorage.getItem(usersStorageKey));
    }

    users.push(myUser);
    localStorage.setItem(usersStorageKey, JSON.stringify(users));

    var formCheck = document.getElementsByClassName('needs-validation')[0];
    formCheck.classList.remove('was-validated');

    clearInputs();

    $('#loginAlert').modal("show");
}

function register() {
    var formCheck = document.getElementsByClassName('needs-validation')[0];
    formCheck.classList.add('was-validated');

    if(formCheck.checkValidity() === false) {
        return;
    }

    save();
}