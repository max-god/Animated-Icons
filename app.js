// Break Chain Animation
function chainAnimation() {
    let chain = document.querySelector('#chain');
    chain.classList.remove('fa-chain-broken');
    chain.classList.add('fa-link');

    setTimeout(function(){
        chain.classList.remove('fa-link');
        chain.classList.add('fa-chain-broken');
    }, 1000);
}

// Run Animation
chainAnimation();

// Run Animation every 2 sec
setInterval(chainAnimation, 2000);

// Battery Charge Animation
 function batteryAnimation() {
    let battery = document.querySelector('#battery');
    battery.classList.remove('fa-battery-full');
    battery.classList.add('fa-battery-empty');          

    setTimeout(function() {
        battery.classList.remove('fa-battery-empty');
        battery.classList.add('fa-battery-quarter'); 
    }, 1000);
    setTimeout(function() {
        battery.classList.remove('fa-battery-quarter');
        battery.classList.add('fa-battery-half'); 
    }, 2000);
    setTimeout(function() {
        battery.classList.remove('fa-battery-half');
        battery.classList.add('fa-battery-three-quarters'); 
    }, 3000);
    setTimeout(function() {
        battery.classList.remove('fa-battery-three-quarters');
        battery.classList.add('fa-battery-full'); 
    }, 4000);
}

// Run Animation
batteryAnimation();

// Run Aimnation every 5 sec
setInterval(batteryAnimation, 5000);

// HourGlass Animation
function hourGlassAnimation() {
    let hourglass = document.querySelector('#hourglass');
    hourglass.classList.remove('fa-hourglass-end');
    hourglass.classList.add('fa-hourglass-start');

    setTimeout(function() {
        hourglass.classList.remove('fa-hourglass-start');
        hourglass.classList.add('fa-hourglass-half');
    }, 1000);
    setTimeout(function() {
        hourglass.classList.remove('fa-hourglass-half');
        hourglass.classList.add('fa-hourglass-end');
    }, 2000);
}

// Run Animation
hourGlassAnimation();

// Run Aimnation every 3 sec
setInterval(hourGlassAnimation, 3000);