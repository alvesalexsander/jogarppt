var pedra = document.getElementById("pedra");
      var papel = document.getElementById("papel");
      var tesoura = document.getElementById("tesoura");
      /* Caso pedra */
      function escolhepedra(){
          var userChoice = "pedra";
          var computerChoice = Math.random();
          if (computerChoice < 0.34) {
	   computerChoice = "pedra";
          } else if(computerChoice <= 0.67) {
	   computerChoice = "papel";
          } else {
	   computerChoice = "tesoura";
          } alert("Minha vez! Eu escolho: " + computerChoice);
      
          var compare = function(choice1, choice2){
    if (choice1 === choice2){
        alert("乁( ͠°_ °)ㄏ Empate!");
    }   
    else if (choice1 === "pedra"){
        if (choice2 ==="tesoura"){
            alert("Você ganhou ᕕ(`益´)ᕗ! Pedra esmaga tesoura!");
        }
        else if (choice2 === "papel"){
            alert("Você perdeu (∩☯ヘ☯)⊃━☆ﾟ.*... Papel embrulha pedra!");
        }
    }
};
          compare(userChoice, computerChoice);
      };
      /*FIM pedra*/
      /*Caso papel*/
      function escolhepapel(){
          var userChoice = "papel";
          var computerChoice = Math.random();
          if (computerChoice < 0.34) {
	   computerChoice = "pedra";
          } else if(computerChoice <= 0.67) {
	   computerChoice = "papel";
          } else {
	   computerChoice = "tesoura";
          } alert("Eu escolho: " + computerChoice);
      
          var compare = function(choice1, choice2){
    if (choice1 === choice2){
        alert("乁( ͠°_ °)ㄏ Empate!");
    }   
    else if (choice1 === "papel"){
        if (choice2 ==="pedra"){
            alert("Você ganhou ᕕ(`益´)ᕗ! Papel embrulha pedra!");
        }
        else if (choice2 === "tesoura"){
            alert("Você perdeu (∩☯ヘ☯)⊃━☆ﾟ.*... Tesoura corta papel!");
        }
    }
};
          compare(userChoice, computerChoice);
      };
    /*FIM papel*/
    /*Caso tesoura*/
      function escolhetesoura(){
          var userChoice = "tesoura";
          var computerChoice = Math.random();
          if (computerChoice < 0.34) {
	   computerChoice = "pedra";
          } else if(computerChoice <= 0.67) {
	   computerChoice = "papel";
          } else {
	   computerChoice = "tesoura";
          } alert("Eu escolho: " + computerChoice);
      
          var compare = function(choice1, choice2){
    if (choice1 === choice2){
        alert("乁( ͠°_ °)ㄏ Empate!");
    }   
    else if (choice1 === "tesoura"){
        if (choice2 ==="papel"){
            alert("Você ganhou ᕕ(`益´)ᕗ! Tesoura corta papel!");
        }
        else if (choice2 === "pedra"){
            alert("Você perdeu (∩☯ヘ☯)⊃━☆ﾟ.*... Pedra esmaga tesoura!");
        }
    }
};
          compare(userChoice, computerChoice);
      };
    /*FIM tesoura*/