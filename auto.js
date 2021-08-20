var robot = require("robotjs");
var screen = robot.getScreenSize();

setTimeout(automatechrome,2000);

function automatechrome(){
    robot.moveMouseSmooth(128,841);
    robot.mouseClick();
    robot.typeString(" chrome");
    robot.keyTap("enter");
    // robot.keyToggle("command","down");
    // robot.keyTap("up");
    // robot.keyToggle("command","up");
    robot.moveMouseSmooth(156,50);    
    robot.typeString("gmail");
    robot.keyTap("enter");
    robot.moveMouseSmooth(248,318);
    robot.mouseClick();
    setTimeout(automatewhatsapp,5000);

}

function automatewhatsapp(){
    robot.keyToggle("control","down");
    robot.keyTap("t");
    robot.keyToggle("control","up");
    robot.typeString("web.whatsapp.com");
    robot.keyTap("enter");
    setTimeout(typewhatsapp,7000);
}
function typewhatsapp(){
    robot.keyTap("tab");
    robot.typeString("Rangyaa");
    robot.keyTap("enter");
    robot.typeString(" Hiii;)");
    robot.keyTap("enter");
    setTimeout(Gmeetautomate,3000);

}    
function Gmeetautomate(){
    robot.keyToggle("control","down");
    robot.keyTap("t");
    robot.keyToggle("control","up");
    robot.typeString("meet.google.com");
    robot.keyTap("enter"); 
    setTimeout(ppt_automate,3000);

}
function ppt_automate(){
    robot.moveMouseSmooth(128,850);
    robot.mouseClick();
    robot.typeString("PowerPoint");
    robot.keyTap("enter");
    setTimeout(ppt_functions,3000);
    
}
function ppt_functions(){
    robot.moveMouseSmooth(36,38);
    robot.mouseClick();
    robot.moveMouseSmooth(38,119);
    robot.mouseClick();
    robot.moveMouseSmooth(223,413);
}