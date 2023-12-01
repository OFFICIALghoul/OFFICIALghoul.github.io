
function randomizeCasing(letter) {
    const trueOrFalse = Math.random();
    if(trueOrFalse > 0.5){
        console.log('true')
        return letter.toUpperCase();
    } else{
        console.log('false')
        return letter.toLowerCase();
    }
}

function encrypt(plainString, n) {
    let encryptString = '';
    let tempValue = ''
    const tempString = plainString.toUpperCase();
    for (let i = 0; i < tempString.length; i++) {
        let charNum = tempString.charCodeAt(i);
        if (charNum <= 90 && charNum >= 65) {
            charNum += n;
            if (charNum > 90) {
                charNum -= 26;
            }
        }
        tempValue = String.fromCharCode(charNum)
        console.log('TempValue = '+ tempValue)
        encryptString += randomizeCasing(tempValue);
    }
    encryptString += ranValues();
    return encryptString;
}

function decrypt(encryptString, n) {
    let decryptString = '';
    encryptString = encryptString.slice(0, -5)
    const tempString = encryptString.toLowerCase();

    for (let i = 0; i < tempString.length; i++) {
        let charNum = tempString.charCodeAt(i);

        if (charNum <= 122 && charNum >= 97) {
            charNum -= n;
            if (charNum < 97) {
                charNum += 26;
            }
        }
        decryptString += String.fromCharCode(charNum);

    }
    return decryptString;
}

function ranValues() {
    let ranValue = '';
    let length = 5;
    let tempValue = '';

    for (let i = 0; i < length; i++) {
        let charNum = Math.floor(Math.random() * 26) + 65;
        tempValue = String.fromCharCode(charNum)
        ranValue += randomizeCasing(tempValue);
    }
    return ranValue;
}

function printEncryption() {
    event.preventDefault();
    const encryptionValue = document.getElementById('encrypt').value;
    const number = document.getElementById('shift').value;
    const resultElement = document.getElementById('result');

    if (encryptionValue && number) {
        const shiftNumber = parseInt(number, 10);
        resultElement.innerHTML = encrypt(encryptionValue, shiftNumber);
    } else {
        resultElement.innerHTML = 'Please fill in both fields.';
    }
}

function printDecryption() {
    event.preventDefault();
    const encryptionValue = document.getElementById('decrypt').value;
    const number = document.getElementById('reverseNumber').value;
    const resultElement = document.getElementById('decryptResult');

    if (encryptionValue && number) {
        const shiftNumber = parseInt(number, 10);
        resultElement.innerHTML = decrypt(encryptionValue, shiftNumber);
    } else {
        resultElement.innerHTML = 'Please fill in both fields.';
    }
}

const leftSide = document.querySelector('.leftSide');

leftSide.addEventListener('mouseover', openMenu);

function openMenu() {
    const list = document.getElementById('list');
    const menu = document.getElementsByClassName('menu')[0];
    const leftSide = document.getElementsByClassName('leftSide')[0];
    list.style.display = 'block';
    menu.classList.add('active');
    leftSide.classList.add('active');
}

leftSide.addEventListener('mouseout', closeMenu);

function closeMenu() {
    const list = document.getElementById('list');
    const menu = document.getElementsByClassName('menu')[0];
    const leftSide = document.getElementsByClassName('leftSide')[0];
    list.style.display = 'none';
    menu.classList.remove('active');
    leftSide.classList.remove('active');
}

window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.introduction');
    const scrollPosition = window.scrollY;
    parallax.style.backgroundPosition = 'center ' + (-scrollPosition * 0.5) + 'px';
});

var menu = document.querySelector('.menu');

leftSide.addEventListener('mouseenter', function() {
    document.body.classList.add('noScroll');
});

leftSide.addEventListener('mouseleave', function() {
    document.body.classList.remove('noScroll');
});
