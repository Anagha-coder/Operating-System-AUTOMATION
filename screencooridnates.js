var robot = require("robotjs");
var id = setInterval(fun1,1000); 
// (function body , time in ms)

function fun1(){
    var mouse = robot.getMousePos();
    console.log(mouse);
    if(mouse.x == 0 && mouse.y == 0){
        clearInterval(id);
    }
}

function autogmail(){
    robot.moveMouseSmooth();
    robot.mouseClick();
    robot.typeString("chrome");
    robot.keyTap("enter");
    robot.typeString("gmail");
    robot.keyTap("enter");
    robot.moveMouseSmooth();
}

function autowapp(){
    robot.moveMouseSmooth();
}
