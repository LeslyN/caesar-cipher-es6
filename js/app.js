// // menu principal
// let menu = prompt('MENU PRINCIPAL CIFRADO CESAR \n\n' + '1. Para cifrar frases  \n\n ' + '2. Para decifrar frases  \n\n' + '3. Salir');
// let phrase;
// switch (menu) {
// case '1':
//   phrase = prompt('Ingrese un texto a cifrar');
//   document.write('<p>El texto cifrado es: </p> ' + cipher(phrase));
//   break;
// case '2':
//   phrase = prompt('Ingrese un texto a descifrar');
//   document.write('<p>El texto descifrado es: </p> ' + decipher(phrase)); 
//   break;
// case '3':
//   document.write('Regrese cuando quiera');
//   break;
// default:
//   alert('Ingrese un número válido de la lista');
// }
window.addEventListener('load', cipherDecipher => { 
  let btnCipher = document.getElementById('btn-cipher');
  let btnDecipher = document.getElementById('btn-decipher');
  
  btnCipher.addEventListener('click', cipher => {
    let boxCipher = document.getElementById('cipher').value;
    let contentCipher = document.getElementById('text-cipher');
    let strLet = '';
    // Recorremos la frase ingresada, Si esta en el rango de MAYÚSCULAS.
    for(i = 0; i < boxCipher.length; i++){                    
      //Obtenemos el codigo ASCII de cada letra
      let asc = boxCipher.charCodeAt(i) 
      //Rango para solo las mayúsculas
      if(asc >= 64 && asc <= 91){                      
        // Aplicamos la formula para obtener la nueva posición ASCII.
        let newAsc = (asc - 65 + 33) % 26 + 65;        
        //Desciframos  ese nuevo código a letra.
        let newLet = String.fromCharCode(newAsc);
        //Almacenamos letra por letra dentro del nuevo String.  
        strLet += newLet;                         
      }
      //en caso contrario si es MINÚSCULA.                                           
      else if(asc >= 96 && asc <= 123) {
        let newAscm = (asc - 97 + 33) % 26 +97;         
        //Desciframos  ese nuevo codigo a letra.
        let newLetm = String.fromCharCode(newAscm);
        //Almacenamos letra por letra dentro del nuevo String.
        strLet += newLetm;                      
      }  
    } 
    // return strLet;
    // console.log(strLet);
    contentCipher.innerText = strLet;
    console.log(strLet);
  });

  btnDecipher.addEventListener('click', decipher => {
    let strLet = '';
    let boxDecipher = document.getElementById('decipher').value;
    let contentDecipher = document.getElementById('text-decipher');
    //Recorremos la frase ingresada, Si esta en el rango de MAYÚSCULA.                         
    for(i = 0; i < boxDecipher.length; i++){                    
      //Obtenemos el código ASCII de cada letra  
      let asc = boxDecipher.charCodeAt(i)               
      
      //Rango para solo las mayúsculas
      if(asc >= 64 && asc <= 91){                        
        //Aplicamos la formula para obtener la nueva posición ASCII.
        let newAsc = (asc + 65 -33) % 26 + 65;       
        //Desciframos  ese nuevo código a letra. 
        let newLet= String.fromCharCode(newAsc);  
        //Almacenamos letra por letra dentro del nuevo String.
        strLet += newLet;                               
      }                              
      //en caso contrario si es MINÚSCULA.              
      else if(asc >= 96 && asc <= 123){      
        let newAscm = (asc + 97 + 33) % 26 + 97;         
        //Desciframos  ese nuevo codigo a letra.
        let newLetm = String.fromCharCode(newAscm);
        //Almacenamos letra por letra dentro del nuevo String.
        strLet += newLetm;                      
      }
    }
    //Retornamos el nuevo string con las letras enncriptadas.
    contentDecipher.innerText = strLet;
    console.log(contentDecipher);
  });

})