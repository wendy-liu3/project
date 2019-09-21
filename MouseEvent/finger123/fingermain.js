var r;
var score=0;
function rock(){
    document.getElementById("mychoice").innerHTML="<img src=\"images/22.jpg\">";
    judge("rock");
}
function scissors(){
    document.getElementById("mychoice").innerHTML="<img src=\"images/11.jpg\">";
    judge("scissors");
}
function paper(){
    document.getElementById("mychoice").innerHTML="<img src=\"images/33.jpg\">";
    judge("paper");
}

function judge(mychoice) {
    r = 3*Math.random();
    var computerresult= computer();
    if(mychoice=="rock"){
        if(computerresult=="rock"){
            document.getElementById("result").innerHTML="平";
        }
        else if(computerresult=="scissors"){
            document.getElementById("result").innerHTML="赢了";
            score+=1;
        }
        else if(computerresult=="paper"){
            document.getElementById("result").innerHTML="输了";
            score-=1;
        }
    }
    else if(mychoice=="scissors"){
        if(computerresult=="rock"){
            document.getElementById("result").innerHTML="输了";
            score-=1;
        }
        else if(computerresult=="scissors"){
            document.getElementById("result").innerHTML="平";
        }
        else if(computerresult=="paper"){
            document.getElementById("result").innerHTML="赢了";
            score+=1;
        }
    }
    else if(mychoice=="paper"){
        if(computerresult=="rock"){
            document.getElementById("result").innerHTML="赢了";
            score+=1;
        }
        else if(computerresult=="scissors"){
            document.getElementById("result").innerHTML="输了";
            score-=1;
        }
        else if(computerresult=="paper"){
            document.getElementById("result").innerHTML="平";
        }
    }
    document.getElementById("result2").innerHTML="积分"+score;
}
function computer(){
    if(r<1){
        document.getElementById("computerchoice").innerHTML="<img src='images/22.jpg'>";
        return "rock";
    }
    else if(r<2){
        document.getElementById("computerchoice").innerHTML="<img src='images/11.jpg'>";
        return "scissors";
    }
    else{
        document.getElementById("computerchoice").innerHTML="<img src='images/33.jpg'>";
        return "paper";
    }
}
