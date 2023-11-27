
function randomizeCasing() {
    
}

function encrypt(plainString, n) {
    let encryptString = '';
    const tempString = plainString;

    for (let i = 0; i < tempString.length; i++) {
        let charNum = tempString.charCodeAt(i);

        if (charNum <= 90 && charNum >= 65) {
            charNum += n;
            if (charNum > 90) {
                charNum -= 26;
            }
        }
        encryptString += String.fromCharCode(charNum);
    }
    encryptString += ' '
    encryptString += ranValues()
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

    for (let i = 0; i < length; i++) {
        let charNum = Math.floor(Math.random() * 26) + 65;
        ranValue += String.fromCharCode(charNum);
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

document.querySelector('.leftSide').addEventListener('mouseover', openMenu);
document.querySelector('.leftSide').addEventListener('mouseout', closeMenu);

function closeMenu() {
    const list = document.getElementById('list');
    const menu = document.getElementsByClassName('menu')[0];
    const leftSide = document.getElementsByClassName('leftSide')[0];
    list.style.display = 'none';
    menu.classList.remove('active');
    leftSide.classList.remove('active');
}


function openMenu() {
    const list = document.getElementById('list');
    const menu = document.getElementsByClassName('menu')[0];
    const leftSide = document.getElementsByClassName('leftSide')[0];
    list.style.display = 'block';
    menu.classList.add('active');
    leftSide.classList.add('active');
}

window.addEventListener('scroll', function () {
    const parallax = document.querySelector('.introduction');
    const scrollPosition = window.pageYOffset;

    parallax.style.backgroundPosition = 'center ' + (-scrollPosition * 0.5) + 'px';
});