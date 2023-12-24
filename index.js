let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("savePassword");

function generatePassword(len) {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "012345678";
    const symbol = "`~!@#$%^&*()-_=+[]{}|;:',./<>?";

    const data = lowerAlphabet + upperAlphabet + numeric + symbol;
    let generator = "";
    for (let index = 0; index < len; index++) {
        generator += data[Math.floor(Math.random() * data.length)];
    }
    return generator;
}

function getPassword() {
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword;
}

function savePassword() {
    if (password.value != "") {
        setTimeout(() => {
            alert("Password berhasil disimpan!");
        }, 500); //delay alert selama setengah detik
        saveButton.setAttribute(
            "href",
            "data:text/plain;charset=utf-8," +
                encodeURIComponent(`Password saya: ${password.value}`)
        );
        saveButton.setAttribute("download", "myPassword.txt");
    } else {
        alert("Password masih kosong!");
    }
}
