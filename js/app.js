const userBtnUp = document.getElementsByClassName("scroll up")[0];
const userBtnDown = document.getElementsByClassName("scroll down")[0];
const userBtnPath = document.getElementsByClassName("check jpg")[0];

userBtnUp.addEventListener('click', scrollUp);
userBtnDown.addEventListener('click', scrollDown);
//userBtnPath.addEventListener('click', redirectToJpgPath);

document.querySelector('img').width += 0;
function scrollUp() {
    document.querySelector('img').width *= 1.1;
}

function scrollDown() {
    document.querySelector('img').width *= 0.9;
}

function redirectToJpgPath() {
    let path = document.getElementsByTagName('img')[0].src
    window.location.href = path;
}

console.log(a);
console.log("fjldjf");
var a = Symbol(5);
a = 123;