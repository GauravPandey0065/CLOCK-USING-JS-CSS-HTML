
setInterval(function () {
    date = new Date();
    hour_time = date.getHours();

    minute_time = date.getMinutes();

    second_time = date.getSeconds();

    hrotation = 30 * hour_time + minute_time / 2;

    mrotation = 6 * minute_time;

    srotation = 6 * second_time;


    hour.style.transform = `rotate(${hrotation}deg)`;

    minutes.style.transform = `rotate(${mrotation}deg)`;

    seconds.style.transform = `rotate(${srotation}deg)`;




}, 1000);

setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}