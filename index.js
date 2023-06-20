let p1 = "X";
let p2 = "0";
let count = 0;
let blocks = document.querySelectorAll(".block");
document.querySelector(".turn").innerHTML = "Now Player 1 turn";
Array.from(blocks).forEach((block) => {
    block.addEventListener('click', (event) => {
        if (count % 2 === 0) {
            event.target.innerHTML = p1;
            document.querySelector(".turn").innerHTML = "Now Player 2 turn";
        }
        else {
            event.target.innerHTML = p2;
            document.querySelector(".turn").innerHTML = "Now Player 1 turn";
        }
        count++;

        //blocks 1,2,3 (row1)
        if(document.querySelector("#block1").innerHTML===p1 && document.querySelector("#block2").innerHTML===p1 && document.querySelector("#block3").innerHTML===p1)
            document.querySelector(".result").innerHTML="Player 1 won 🚩";
        else if(document.querySelector("#block1").innerHTML===p2 && document.querySelector("#block2").innerHTML===p2 && document.querySelector("#block3").innerHTML===p2)
        document.querySelector(".result").innerHTML="Player 2 won 🚩";

        //blocks 4,5,6 (row2)
        else if(document.querySelector("#block4").innerHTML===p1 && document.querySelector("#block5").innerHTML===p1 && document.querySelector("#block6").innerHTML===p1)
            document.querySelector(".result").innerHTML="Player 1 won 🚩";
        else if(document.querySelector("#block4").innerHTML===p2 && document.querySelector("#block5").innerHTML===p2 && document.querySelector("#block6").innerHTML===p2)
        document.querySelector(".result").innerHTML="Player 2 won 🚩";

        //blocks 7,8,9 (row3)
        else if(document.querySelector("#block7").innerHTML===p1 && document.querySelector("#block8").innerHTML===p1 && document.querySelector("#block9").innerHTML===p1)
            document.querySelector(".result").innerHTML="Player 1 won 🚩";
        else if(document.querySelector("#block7").innerHTML===p2 && document.querySelector("#block8").innerHTML===p2 && document.querySelector("#block9").innerHTML===p2)
        document.querySelector(".result").innerHTML="Player 2 won 🚩";

        //blocks 1,4,7 (column1)
        else if(document.querySelector("#block1").innerHTML===p1 && document.querySelector("#block4").innerHTML===p1 && document.querySelector("#block7").innerHTML===p1)
            document.querySelector(".result").innerHTML="Player 1 won 🚩";
        else if(document.querySelector("#block1").innerHTML===p2 && document.querySelector("#block4").innerHTML===p2 && document.querySelector("#block7").innerHTML===p2)
        document.querySelector(".result").innerHTML="Player 2 won 🚩";

        //blocks 2,5,8 (column2)
        else if(document.querySelector("#block2").innerHTML===p1 && document.querySelector("#block5").innerHTML===p1 && document.querySelector("#block8").innerHTML===p1)
            document.querySelector(".result").innerHTML="Player 1 won 🚩";
        else if(document.querySelector("#block2").innerHTML===p2 && document.querySelector("#block5").innerHTML===p2 && document.querySelector("#block8").innerHTML===p2)
        document.querySelector(".result").innerHTML="Player 2 won 🚩";

        //blocks 3,6,9 (column3)
        else if(document.querySelector("#block3").innerHTML===p1 && document.querySelector("#block6").innerHTML===p1 && document.querySelector("#block9").innerHTML===p1)
            document.querySelector(".result").innerHTML="Player 1 won 🚩";
        else if(document.querySelector("#block3").innerHTML===p2 && document.querySelector("#block6").innerHTML===p2 && document.querySelector("#block9").innerHTML===p2)
        document.querySelector(".result").innerHTML="Player 2 won 🚩";

        //blocks 1,5,9 (diagonal1)
        else if(document.querySelector("#block1").innerHTML===p1 && document.querySelector("#block5").innerHTML===p1 && document.querySelector("#block9").innerHTML===p1)
            document.querySelector(".result").innerHTML="Player 1 won 🚩";
        else if(document.querySelector("#block1").innerHTML===p2 && document.querySelector("#block5").innerHTML===p2 && document.querySelector("#block9").innerHTML===p2)
        document.querySelector(".result").innerHTML="Player 2 won 🚩";

        //blocks 3,5,7 (diagonal2)
        else if(document.querySelector("#block3").innerHTML===p1 && document.querySelector("#block5").innerHTML===p1 && document.querySelector("#block7").innerHTML===p1)
            document.querySelector(".result").innerHTML="Player 1 won 🚩";
        else if(document.querySelector("#block3").innerHTML===p2 && document.querySelector("#block5").innerHTML===p2 && document.querySelector("#block7").innerHTML===p2)
        document.querySelector(".result").innerHTML="Player 2 won 🚩";
        
        //Draw
        else if(document.querySelector("#block1").innerHTML!=="" && document.querySelector("#block2").innerHTML!=="" && document.querySelector("#block3").innerHTML!==""
        && document.querySelector("#block4").innerHTML!=="" && document.querySelector("#block5").innerHTML!=="" && document.querySelector("#block6").innerHTML!==""
        && document.querySelector("#block7").innerHTML!=="" && document.querySelector("#block8").innerHTML!=="" && document.querySelector("#block9").innerHTML!=="")
        document.querySelector(".result").innerHTML="Draw!";



    });
});

document.querySelector("#og").addEventListener('click',orange_gray);
document.querySelector("#vy").addEventListener('click',violet_yellow);
document.querySelector("#bb").addEventListener('click',blue_black);

function orange_gray(){
    document.querySelector("body").style.backgroundColor="darkgray";
    document.querySelector("body").style.color="black";
    let blocks=document.querySelectorAll(".block");
    blocks.forEach((block)=>{
        block.style.backgroundColor="orange";
    });

}
function violet_yellow(){
    document.querySelector("body").style.backgroundColor="yellow";
    document.querySelector("body").style.color="black";
    let blocks=document.querySelectorAll(".block");
    blocks.forEach((block)=>{
        block.style.backgroundColor="violet";
    });

}
function blue_black(){
    document.querySelector("body").style.backgroundColor="black";
    document.querySelector("body").style.color="white";
    let blocks=document.querySelectorAll(".block");
    blocks.forEach((block)=>{
        block.style.backgroundColor="aqua";
    });

}