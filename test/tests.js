var expect = chai.expect;

describe("Test Conversor", function() {

  //var converted = document.getElementById("converted");

    it("Primera: 32F", function() {
      var t = new Temperatura(32,"F");
      expect(t.far()).to.equal("0.0 Celsius");
    });

    it("Segunda: -6C", function() {
      var t = new Temperatura(-6,"C");
      expect(t.celsius()).to.equal("21.2 Farenheit");
    });

    it("Tercera: Probando la funcion calculate", function() {
      original.value = "0C";
      calculate();
      expect(converted.innerHTML).to.equal("32.0 Farenheit");
    });
    
    it("Cuarta: Probando la funcion calculate (F to C)", function() {
      original.value = "32F";
      calculate();
      expect(converted.innerHTML).to.equal("0.0 Celsius");
    });
    
    it("Quinta: Probando la funcion calculate (F to C con flotante negativo)", function() {
      original.value = "32e-2F";
      calculate();
      expect(converted.innerHTML).to.equal("-16.9 Celsius");
    });
    
    it("Sexta: Probando la funcion calculate (C to F con flotante negativo)", function() {
      original.value = "32e-2C";
      calculate();
      expect(converted.innerHTML).to.equal("34.9 Farenheit");
    });
    
    it("Septima: Probando la funcion calculate (C to F con flotante positivo)", function() {
      original.value = "32e2C";
      calculate();
      expect(converted.innerHTML).to.equal("1184.0 Farenheit");
    });
    
    it("Octava: Probando la funcion calculate (error)", function() {
      original.value = "3ju";
      calculate();
      expect(converted.innerHTML).to.equal("ERROR! Prueba con algo como esto '-4.2C' ");
    });
});