var k= 1;
var n= document.querySelectorAll(".button").length;
for(var i=0;i<n;i++){
    document.querySelectorAll(".button")[i].addEventListener("click", function(){
        var key= this.value;
        if(k%2===0){
            this.disabled= "true";
            this.style.backgroundImage= "url('images/cross.jpg')";
            if(checkIfXWin(key)){
                document.getElementById("tit").innerHTML="Player 2 Wins!";
                document.getElementById("re").innerHTML="Refresh to Play again! 🔁";
                const buttons = document.querySelectorAll(".button");
                buttons.forEach((button) =>{
                        button.setAttribute('disabled', 'true');
                    });
            }
            else{    
                document.getElementById("tit").innerHTML="Player 1's Turn";
            }
            k++;
        }
        else{
            this.disabled= "true";
            this.style.backgroundImage= "url('images/circle.jpg')";
            if(checkIfOWin(key)){
                document.getElementById("tit").innerHTML="Player 1 Wins!";
                document.getElementById("re").innerHTML="Refresh to Play again! 🔁";
                const buttons = document.querySelectorAll(".button");
                buttons.forEach((button) =>{
                    button.setAttribute('disabled', 'true');
                });
            }
            else{    
                document.getElementById("tit").innerHTML="Player 2's Turn";
            }
            k++;
        }
        if(k===10){
            document.getElementById("tit").innerHTML="It's A DRAW!";
            document.getElementById("re").innerHTML="Refresh to Play again! 🔁";
        }
    });
}

var matrix = [[0,0,0],[0,0,0],[0,0,0]];
function checkIfXWin(key){
    var row= key[0]-'0';
    var col= key[1]-'0';
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if(i===row && j===col){
                matrix[i][j]= 1;
            }
        }
    }
    var count= 0;
    for(var i=1;i<3;i++){
        if(matrix[0][i]===1 && matrix[0][i-1]===1){
            count++;
        }
    }
    if(count===2){
        return true;
    }
    count= 0;
    for(var i=1;i<3;i++){
        if(matrix[1][i]===1 && matrix[1][i-1]===1){
            count++;
        }
    }
    if(count===2){
        return true;
    }
    count= 0;
    for(var i=1;i<3;i++){
        if(matrix[2][i]===1 && matrix[2][i-1]===1){
            count++;
        }
    }
    if(count===2){
        return true;
    }
    count= 0;
    for(var i=1;i<3;i++){
        if(matrix[i][0]===1 && matrix[i-1][0]===1){
            count++;
        }
    }
    if(count===2){
        return true;
    }
    count= 0;
    for(var i=1;i<3;i++){
        if(matrix[i][1]===1 && matrix[i-1][1]===1){
            count++;
        }
    }
    if(count===2){
        return true;
    }
    count= 0;
    for(var i=1;i<3;i++){
        if(matrix[i][2]===1 && matrix[i-1][2]===1){
            count++;
        }
    }
    if(count===2){
        return true;
    }
    count= 0;
    if(matrix[0][0]===1 && matrix[1][1]===1 && matrix[2][2]===1){
        return true;
    }
    if(matrix[0][2]===1 && matrix[1][1]===1 && matrix[2][0]===1){
        return true;
    }
    return false;
}

function checkIfOWin(key){
    var row= key[0]-'0';
    var col= key[1]-'0';
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if(i===row && j===col){
                matrix[i][j]= 2;
            }
        }
    }
    var count= 0;
    for(var i=1;i<3;i++){
        if(matrix[0][i]===2 && matrix[0][i-1]===2){
            count++;
        }
    }
    if(count===2){
        return true;
    }
    count= 0;
    for(var i=1;i<3;i++){
        if(matrix[1][i]===2 && matrix[1][i-1]===2){
            count++;
        }
    }
    if(count===2){
        return true;
    }
    count= 0;
    for(var i=1;i<3;i++){
        if(matrix[2][i]===2 && matrix[2][i-1]===2){
            count++;
        }
    }
    if(count===2){
        return true;
    }
    count= 0;
    for(var i=1;i<3;i++){
        if(matrix[i][0]===2 && matrix[i-1][0]===2){
            count++;
        }
    }
    if(count===2){
        return true;
    }
    count= 0;
    for(var i=1;i<3;i++){
        if(matrix[i][1]===2 && matrix[i-1][1]===2){
            count++;
        }
    }
    if(count===2){
        return true;
    }
    count= 0;
    for(var i=1;i<3;i++){
        if(matrix[i][2]===2 && matrix[i-1][2]===2){
            count++;
        }
    }
    if(count===2){
        return true;
    }
    count= 0;
    if(matrix[0][0]===2 && matrix[1][1]===2 && matrix[2][2]===2){
        return true;
    }
    if(matrix[0][2]===2 && matrix[1][1]===2 && matrix[2][0]===2){
        return true;
    }
    return false;
}