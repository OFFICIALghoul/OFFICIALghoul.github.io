
    function encrypt(plainString, n) {
      let encryptString = '';
      const tempString = plainString.toUpperCase();
  
      for (let i=0; i < tempString.length; i++) {
        let charNum = tempString.charCodeAt(i);
        
        if (charNum <= 90 && charNum >= 65) {
          charNum += n;
          if (charNum > 90) {
            charNum -= 26;
          }
        }
        encryptString += String.fromCharCode(charNum);
      }
      return encryptString;
    }
  
    function decrypt(encryptString, n) {
      let decryptString = '';
      const tempString = encryptString.toLowerCase();
  
      for (let i=0; i < tempString.length; i++) {
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

    function printDecryption(){
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
    