function encriptar(){
    var datospasados=document.getElementById("enlazardatos").value.toLowerCase();

    /*Para revisar toda la palabra y que contenga la letra que cambiaremos usamos las // para indicar que esa palabra se debe encontrar
    en la palabra resibida
    
    img son condiciones que se necestian y cada letra es una condicion 

    i es para que afecta tanto mayusculas como minuscular
    g es para que efecte toda la linea u oracion 
    m es para que afecte multiples lineas o parrafor

    mas informacion en el video https://www.youtube.com/watch?v=aCi8Oj3jfvo&list=PLly5egcQSlfm-CIR4LOdkAIipoe5Jid67&index=4 minuto 9:47
    o tambien en video https://www.youtube.com/watch?v=93Ha7qd_qvo 
    
    */



    var encriptar=datospasados.replace(/e/img,"enter").replace(/i/img,"imes").replace(/a/img,"ai").replace(/o/img,"ober").replace(/u/img,"ufat");


    /*Con esta funcion logramos pasar los datos encriptados al cuadro de texto mas grande siendo rectangulo el value es para pasar la palabra que se guarda en la varialbe encriptar  */ 
    document.getElementById("rectangulo").value=encriptar;


    /*Con estas funciones podermos desaparecer las imagenes y cuadros de texto cuando se haga un click en el boton encriptar*/
    document.getElementById("imagen1").style.display="none";
    document.getElementById("cuadro1").style.display="none";
    document.getElementById("cuadro2").style.display="none";
    /*esta funcion hace aparecer el objeto que no se encontraba la principio al contrario none lo desaparece 
    
    para poder ejecutar esde comando el input en html debe llevar el comando style="display:none"  en este caso fue: 
     <input id="copy" style="display:none" type="button"   onclick="copiar()" value="copiar">
    
    */ 
    document.getElementById("copy").style.display="block";
    
}

function desencriptar(){
    /*Esta funcion toma los datos del input donde escribe la persona  si es un frase para desencriptar la 
    persona  usa primeramente el desencriptar puede ejecutarlo sin problema*/ 
    var datos=document.getElementById("enlazardatos").value.toLowerCase();
    var primero=datos.replace(/enter/img,"e").replace(/imes/img,"i").replace(/ai/img,"a").replace(/ober/img,"o").replace(/ufat/img,"u");
    document.getElementById("rectangulo").value=primero;
    /*Con estas funciones podermos desaparecer las imagenes y cuadros de texto cuando se haga un click en el boton encriptar*/
    document.getElementById("imagen1").style.display="none";
    document.getElementById("cuadro1").style.display="none";
    document.getElementById("cuadro2").style.display="none";
    /*esta funcion hace aparecer el objeto que no se encontraba la principio al contrario none lo desaparece 
    
    para poder ejecutar esde comando el input en html debe llevar el comando style="display:none"  en este caso fue: 
     <input id="copy" style="display:none" type="button"   onclick="copiar()" value="copiar">
    
    */ 
    document.getElementById("copy").style.display="block";



}


function copiar(){
    /*con esta funcion copiamos el texto encriptado  */
    let copy=document.getElementById("rectangulo");
    copy.select();
    /*Rango de palabras que se pueden copiar*/ 
    copy.setSelectionRange(0,99999);
    document.execCommand('copy');


    /*con esta funcion limpiamos el cuadro de texto donde escribe el usuario*/
    document.getElementById("enlazardatos").value = "";
    
}




