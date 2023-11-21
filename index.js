const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let length = 15;

const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

const tooltip = document.querySelectorAll(".tooltiptext");

const generateButton = document.getElementById("btn");

const getRandomCharacter = () => {
    return characters[Math.floor(Math.random() * characters.length)];
}

const generatePassword = () => {
    let password = "";

    for (let i = 0; i < length; i++) {
        password += getRandomCharacter();
    }

    return password;
}

const copyToClipboard = (element) => {
    const el = document.createElement("textarea");
    el.value = element.textContent.substring(0, length);
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
}


generateButton.addEventListener("click", () => {
    password1.textContent = generatePassword();
    password2.textContent = generatePassword();

    tooltip.forEach((element) => {
        element.innerHTML = "Click to copy";
    });

    password1.appendChild(tooltip[0]);
    password2.appendChild(tooltip[1]);
});

password1.addEventListener("click", () => {
    copyToClipboard(password1);
    tooltip[0].innerHTML = "Copied!";
});

password2.addEventListener("click", () => {
    copyToClipboard(password2);
    tooltip[1].innerHTML = "Copied!";
});