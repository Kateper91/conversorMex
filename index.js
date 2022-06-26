function convertir(){
    let valor = parseInt(document.getElementById("valor").value);
    let de = document.getElementById("de").value;
    let a = document.getElementById ("a").value;
    let resultado = 0;
    let dolar = 0.0080;
    let mexicanos = 0.16;
    let euro = 0.0076;
    let argentinosM = 6.26;
    let dolarM = 0.050;
    let euroM= 0.048;
    

    //Peso argentino a dolar
    if (de==1&&a==2){
        resultado = valor*dolar
        alert ("Son U$S " + resultado.toFixed(2))
    }//Peso argentino a euros
    else if (de==1&&a==3){
        resultado = valor * euro;
        alert ("Son € " + resultado.toFixed(2));
    //Peso argentino a peso mexicano
    }else if(de==1&&a==4){
        resultado = valor*mexicanos;
        alert("Son "+ resultado.toFixed(2) + " pesos mexicanos")
    //De peso mexicano a peso argentino
    } else if (de==2&&a==1){
        resultado = valor*argentinosM;
        alert("Son " + resultado.toFixed(2)+ " pesos argentinos")
    //De peso mexicano a dolares
    } else if (de==2&&a==2){
        resultado = valor*dolarM;
        alert("Son U$S" + resultado.toFixed(2))
        //de peso mexicano a euros
    } else if(de==2&&a==3){
        resultado = valor*euroM;
        alert ("Son € " + resultado.toFixed(2))
    } else {
        alert ("En verdad quieres saber eso?")
    }



}