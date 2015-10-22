"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

function Medida(valor, tipo){
    this.valor = valor;
    this.tipo = tipo;
}

function Temperatura(valor, tipo){
    Medida.call(this, valor, tipo); 
}

Temperatura.prototype = new Medida();

Temperatura.prototype.celsius = function(){
    this.valor = (this.valor * 9/5)+32;
    return (this.valor.toFixed(1)+" Farenheit");
}

Temperatura.prototype.far = function(){
    this.valor = (this.valor - 32)*5/9;
    return (this.valor.toFixed(1)+" Celsius");
}

function calculate() {
  var temp = original.value;
  var regexp = /(^[-+]?\d+(?:\.\d*)?)(?:[eE]?([-+]?\d+))?\s*([cCfF])/;
  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    num = parseFloat(num);

    if(m[2]!==undefined){

        var e = m[2];
        e = parseInt(e);

        if(e<0){
            e = -e;
            var final = num / (10*e);
        }

        else{
            var final = num * (10*e);
        }
        
        var t = new Temperatura(final,m[3])
        var type = m[3];

        if (type == 'c' || type == 'C') {
            converted.innerHTML = t.celsius();
        }
        else {
            converted.innerHTML = t.far();
        }
    }
      
    else{
        var type = m[3];
        var t = new Temperatura(num,m[3])
        
        if (type == 'c' || type == 'C') {
            converted.innerHTML = t.celsius();
        }
        else{
            converted.innerHTML = t.far();
        }
    }
    
  }
  else {
    converted.innerHTML = "ERROR! Prueba con algo como esto '-4.2C' ";
  }
}