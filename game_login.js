function addUser(){
    var player_name1 = document.getElementById("player1user").value;
    var player_name2 = document.getElementById("player2user").value;
    localStorage.setItem("player_name1", player_name1);
    localStorage.setItem("player_name2", player_name2);
    window.location.replace("quiz_game.html")
}