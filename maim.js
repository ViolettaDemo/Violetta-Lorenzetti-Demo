function login(){
    Jogador1=document.getElementById("jogador1").value;
    Jogador2=document.getElementById("jogador2").value;
    localStorage.setItem("jogador1",Jogador1);
    localStorage.setItem("jogador2",Jogador2);
    window.location="game.html";
}