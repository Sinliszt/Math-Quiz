player1_name = localStorage.getItem("player_name1");
player2_name = localStorage.getItem("player_name2");

document.getElementById("question_turn").innerHTML = "Question Turn - "+player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn - "+player2_name;

document.getElementById("player1").innerHTML = player1_name+":    ";
document.getElementById("player2").innerHTML = player2_name+":    ";

playerscores1 = 0;
playerscores2 = 0;

document.getElementById("player1_score").innerHTML = playerscores1;
document.getElementById("player2_score").innerHTML = playerscores2;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1)*parseInt(number2);

    question_number = "<h3 id='player_question' style='font-family: 'Roboto Mono', monospace;'>"+number1+" X "+number2+"</h3><br></br>"
    input_box = "<input type='text' class='form-control' id='answer' Placeholder='Type Your Answer Here' style='border-radius: 75px; border-width: 1px; background-color: rgb(4, 4, 84); border-color: darkblue;'>"
    check_button = "<br><br><button onclick='check();' class='btn btn-info' style='width: 20%; background-color: rgb(4, 4, 84)'>Check</button>"
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}