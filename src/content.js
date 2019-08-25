var ol;
var of ;
var onlinetime;
(function() {

    ol = setInterval(online, 1000);

})();

function online() {
    const lastSeen = document.querySelector('span[title=online]')
    if (lastSeen && lastSeen.title === 'online') {
        onlinetime = new Date();
        const onlineDateString = onlinetime.getDate() + '-' + (onlinetime.getMonth() + 1) + '-' + onlinetime.getFullYear() + ' ' +
            onlinetime.getHours() + ':' + onlinetime.getMinutes() + ':' + onlinetime.getSeconds();
        console.log('Online: '+ onlineDateString)
        clearInterval(ol); of = setInterval(offline, 1000);
    }
}

function offline() {
    const lastSeen = document.querySelector('span[title=online]')
    if (!lastSeen) {
        offlineTime = new Date();
        printTimings(onlinetime, offlineTime)
        clearInterval( of );
        ol = setInterval(online, 1000);
    }
}

function printTimings(onlinedt, offlinedt) {

    const onlineDateString = onlinedt.getDate() + '-' + (onlinedt.getMonth() + 1) + '-' + onlinedt.getFullYear() + ' ' +
        onlinedt.getHours() + ':' + onlinedt.getMinutes() + ':' + onlinedt.getSeconds();
    const offlineDateString = offlinedt.getDate() + '-' + (offlinedt.getMonth() + 1) + '-' + offlinedt.getFullYear() + ' ' +
        offlinedt.getHours() + ':' + offlinedt.getMinutes() + ':' + offlinedt.getSeconds();

    seconds = Math.floor((offlinedt - (onlinedt)) / 1000);
    minutes = Math.floor(seconds / 60);
    hours = Math.floor(minutes / 60);
    days = Math.floor(hours / 24);

    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);


    console.log('Online: ' + onlineDateString + ', Offline: ' + offlineDateString + ', Duration: ' + hours + 'hours, ' + minutes + 'minutes, ' + seconds + 'seconds');

}