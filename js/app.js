'use strict';
var result = 0;
function game1() {
    var name = prompt("Is my name Muna?", "yes/y  no/n");

    if ((name.toUpperCase() == 'YES' || name.toUpperCase() == 'Y') && (name.toLowerCase() == 'yes' || name.toLowerCase() == 'y')) {
        result++;
        var resultName = alert("you`re right that`s my name");
    }
    else if ((name.toUpperCase() == 'NO' || name.toUpperCase() == 'N') && (name.toLowerCase() == 'no' || name.toLowerCase() == 'n')) {

        var resultName = alert("no you are wrong i`m sorry let`s the anther quation");
    }
    
    var food = prompt("Is my fav food mansaf??", "yes/y  no/n");

    if ((name.toUpperCase() == 'YES' || name.toUpperCase() == 'Y') && (name.toLowerCase() == 'yes' || name.toLowerCase() == 'y')) {
        result++;
        var resultfood = alert("you`re right,i`m in love with it ");
    }
    else {

        var resultfood = alert("no you are wrong you do`nt look that you know me ");
    }

    var color = prompt("Is my fav color pink??", "yes/y  no/n");

    if ((name.toUpperCase() == 'YES' || name.toUpperCase() == 'Y') && (name.toLowerCase() == 'yes' || name.toLowerCase() == 'y')) {
        var resultcolor = alert("you`re wrong,my fav color is red ");
        result++;

    }
    else {
        var resultcolor = alert("you`re right my fav color is`nt pink it`s red ");

    }

    var age = prompt("Is i`m 24 years old??", "yes/y  no/n");

    if ((age.toUpperCase() == 'YES' || name.toUpperCase() == 'Y') && (name.toLowerCase() == 'yes' || name.toLowerCase() == 'y')) {
        result++;


        var resultage = alert("yes good job");
    }
    else {
        var resultage = alert("no you`r wrong ");
    }

    var gradeation = prompt("Did i graduated in 2019??", "yes/y  no/n");

    if ((age.toUpperCase() == 'YES' || name.toUpperCase() == 'Y') && (name.toLowerCase() == 'yes' || name.toLowerCase() == 'y')) {
        result++;

        var resultgradeation = alert("yes  you`re right");
    }
    else {

        var resultgradeation = alert("no you`r wrong ");
    }
}

function game2() {
    var number = parseInt(prompt("guess what  is the number ?"));
    var atempts = 0;
    var msg;
    while (atempts < 4) {
        if (number < 4) {
            
            alert("too low ");
            console.log("the num is ", number);
            var number = parseInt(prompt("try agine ?"));
            atempts = atempts + 1;
            console.log("attep", atempts);
        }



        else if (number > 4) {


            alert("too high");
            var number = parseInt(prompt("try againe"));
            atempts = atempts + 1;

        }
        else if (number == 4) {
            var answer = alert("good job the number is 4 ");
            result++;

            break;

        }

        if (atempts == 4) {
            msg = alert("game over the number is 4");
        }
    }
}
    function game3() {
        var answer;
        var favcars = ["BMW", "maracdes", "bejo", "kia", "hounda",];
        answer = prompt("enter the name of my car ?");
        for (var counter = 0; counter < 6; counter++) {
            if (favcars[0] == answer || favcars[1] == answer || favcars[2] == answer || favcars[3] == answer || favcars[4] == answer) {
                result++;

                alert("my av cars are BMW, maracdes, bejo, kia, hounda");
                break;
            }
            else
                prompt("try agine");

        }
        if (counter == 6) {
            alert("sorry you have tried many times");
        }
    }

    var fun1 = game1();
    var fun2 = game2();
    var fun13 = game3();


    var state = alert("hello ");
    var Name = prompt("plz enter your name ");
    var welcome = alert("hello" + Name + " wlecome to our website ");
    alert("your final resualt is " + result);