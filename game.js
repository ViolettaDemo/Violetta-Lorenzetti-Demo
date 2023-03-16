jogador1=localStorage.getItem("jogador1");
jogador2=localStorage.getItem("jogador2");
pontosjogador1=0;
pontosjogador2=0;
document.getElementById("player1Name").innerHTML=jogador1+" : ";
document.getElementById("player2Name").innerHTML=jogador2+" : ";
document.getElementById("player1Score").innerHTML=pontosjogador1;
document.getElementById("player2Score").innerHTML=pontosjogador2;
document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta - " + jogador1;
document.getElementById("playerAnswer").innerHTML = "Turno de Resposta - " + jogador2;
resultado=0;
function send( ){
    obternumero1=document.getElementById("numero1").value;
    obternumero2=document.getElementById("numero2").value;
    resultado=parseInt(obternumero1)*parseInt(obternumero2);
    questionWord = "<h4 id='wordDisplay'> P. "+obternumero1+" X "+obternumero2+"</h4>";
            input_box = "<br>Resposta : <input type='text' id='inputCheckBox'>";
             checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
              row = questionWord + input_box + checkButton ;
               document.getElementById("output").innerHTML = row; 
               document.getElementById("numero1").value = "";
               document.getElementById("numero2").value = "";
}

turnodequestão="jogador1";
turnoderespota="jogador2";
function check(){
    getAnswer=document.getElementById("inputCheckBox").value;

if(getAnswer==resultado){
    if(turnoderespota=="jogador1"){
pontosjogador1=pontosjogador1+1;
document.getElementById("player1Score").innerHTML=pontosjogador1;

    }
    else { pontosjogador2 = pontosjogador2 +1;
         document.getElementById("player2Score").innerHTML = pontosjogador2;
         } } 
         if(turnodequestão == "jogador1") { turnodequestão = "jogador2"
          document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: " + jogador2 ;
         }
          else { turnodequestão = "jogador1"
           document.getElementById("playerQuestion").innerHTML = "Turno de Pergunta: " + jogador1 ;
         }
          if(turnoderespota== "jogador1") { turnoderespota = "jogador2"
           document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: " + jogador2 ;
         }
          else { turnoderespota = "jogador1"
           document.getElementById("playerAnswer").innerHTML = "Turno de Resposta: " + jogador1 ; }
            document.getElementById("output").innerHTML = ""
}
