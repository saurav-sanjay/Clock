function callForCurrentTime(){
        //Currently in 24 Hr format
        const timeContainer = document.getElementById("timeContainer");
        var date=new Date();
        var currentTime = (date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds())
        timeContainer.innerText="";
        timeContainer.innerText=currentTime;
}
setInterval(callForCurrentTime, 1000);