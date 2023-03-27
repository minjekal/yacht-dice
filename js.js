//버튼 클릭 초기화 //
let buttonclick =0;

function push(){
// 주사위 굴리는 함수 //
function dice1(){
    let dicenumber1 = Math.ceil(Math.random()*6);
    document.getElementById("img1").src="dice"+dicenumber1+".png"; 
    number1 = dicenumber1;
}
function dice2(){
    let dicenumber2 = Math.ceil(Math.random()*6);
    document.getElementById("img2").src="dice"+dicenumber2+".png"; 
    number2 = dicenumber2;
}
function dice3(){
    let dicenumber3 = Math.ceil(Math.random()*6);
    document.getElementById("img3").src="dice"+dicenumber3+".png"; 
    number3 = dicenumber3;
}
function dice4(){
    let dicenumber4 = Math.ceil(Math.random()*6);
    document.getElementById("img4").src="dice"+dicenumber4+".png"; 
    number4 = dicenumber4;
}
function dice5(){
    let dicenumber5 = Math.ceil(Math.random()*6);
    document.getElementById("img5").src="dice"+dicenumber5+".png"; 
    number5 = dicenumber5;
}
    buttonclick +=1;
    dice1();
    dice2();
    dice3();
    dice4();
    dice5();

    // 버튼클릭 1번으로 제한 //
    if (buttonclick == 3) {
        const target = document.getElementById("push dice");
        target.disabled = true;
    }
    
    let arr = [];
    arr[0] = number1;
    arr[1] = number2;
    arr[2] = number3;
    arr[3] = number4;
    arr[4] = number5;

    let counter1 = 0;
    for(let i=0; i<6; i++) {
        if (arr[i] == 1) {
            counter1 += 1;
        }
    document.getElementById("Aces").innerHTML=counter1;
    }

    let counter2 = 0;
    for(let j=0; j<6; j++) {
        if (arr[j] == 2) {
            counter2 += 2;
        }
    document.getElementById("Twos").innerHTML=counter2;
    }

    let counter3 = 0;
    for(let k=0; k<6; k++) {
        if (arr[k] == 3) {
            counter3 += 3;
        }
    document.getElementById("Threes").innerHTML=counter3;
    }

    let counter4 = 0;
    for(let t=0; t<6; t++) {
        if (arr[t] == 4) {
            counter4 += 4;
        }
    document.getElementById("Fours").innerHTML=counter4;
    }

    let counter5 = 0;
    for(let e=0; e<6; e++) {
        if (arr[e] == 5) {
            counter5 += 5;
        }
    document.getElementById("Fives").innerHTML=counter5;
    }

    let counter6 = 0;
    for(let w=0; w<6; w++) {
        if (arr[w] == 6) {
            counter6 += 6;
        }
    document.getElementById("Sixes").innerHTML=counter6;
}
}

function click1() {
    document.getElementById("img1").style.display="none";
    document.getElementById("img6").src="dice"+number1+".png";
    document.getElementById("Aces").innerHTML=1;

}

function click2() {
    document.getElementById("img2").style.display="none";
    document.getElementById("img7").src="dice"+number2+".png";
}

function click3() {
    document.getElementById("img3").style.display="none";
    document.getElementById("img8").src="dice"+number3+".png";
}

function click4() {
    document.getElementById("img4").style.display="none";
    document.getElementById("img9").src="dice"+number4+".png";
}

function click5() {
    document.getElementById("img5").style.display="none";
    document.getElementById("img10").src="dice"+number5+".png";
}

