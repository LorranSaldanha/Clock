var state = false;

function toggle(){
    var body = document.getElementById('body');
    var clock = document.getElementById('clock');
    var mode = document.getElementById('bt');
    var center = document.getElementById('center');
    var second = document.getElementById('second');


    
    if(state){
        // STYLE OF THE BODY
        body.style.background="#c1c1c4";

        // CATCHING ELEMENT BY CLASS NAME
        clock.className="clock1";

        // VAR MODE "BT" START - BUTTON IN HTML
        mode.innerText="dark mode";
        mode.style.background="#111";
        mode.style.color="#eee";
        // VAR MODE "BT" END
        second.style.background="#1f221e";
        center.style.background="#363436";

        // "STATE" VAR STATE UP THERE
        state = false ; 
    }

    else {
        body.style.background="#1c1f1c";
        clock.className="clock2";
        mode.innerText="light mode";
        mode.style.background="#eee";
        mode.style.color="#111";
        // "CENTER" DOT IN THE MIDDLE OF CIRCLE
        second.style.background="#e2e1f6";
        center.style.background="#cbc";
        state = true ; 
    }

}
// SET OF THE CLOCK 
setInterval(() => 
{

    d = new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();

    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;




}, 1000);

console.log("Developed by Lorran Oliveira");