function calcular() {
    var valorConta = document.getElementById("conta").value;
    var valorContaNumerico = parseFloat(valorConta);
          
    var numeroPessoas = document.getElementById("pessoas").value;
    var numeroPessoasNumerico = parseFloat(numeroPessoas);
    
    if (valorContaNumerico <= 0) {
        var elementoMensagemErro = document.getElementById("passaRegua");
        var mensagemErro = "Quanto deu a conta?"
        elementoMensagemErro.innerHTML = mensagemErro
    } else if (numeroPessoasNumerico <= 1) {
        var elementoMensagemErro = document.getElementById("passaRegua");
        var mensagemErro = "Vai dividir com quantas pessoas?"
        elementoMensagemErro.innerHTML = mensagemErro
    } else {
      var contaDividida = valorContaNumerico / numeroPessoasNumerico;
  
      var elementoPassaRegua = document.getElementById("passaRegua");
      var passaRegua =
        "Sua conta ficou em R$ " + contaDividida.toFixed(2) + " para cada um.";
      elementoPassaRegua.innerHTML = passaRegua;
    }

    
  }

  