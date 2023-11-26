
function encrypt(plainString, n) {
    let encryptString = '';
    const tempString = plainString.toUpperCase();

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
    let length = 5; // specify the length of the string

    for (let i = 0; i < length; i++) {
        // Generate a random ASCII code for a character in the range A-Z (65-90)
        let charNum = Math.floor(Math.random() * 26) + 65;
        ranValue += String.fromCharCode(charNum);
    }
    console.log(ranValue)
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


ranValues()