const ctx = document.getElementById('bpchart');
const ctx1 = document.getElementById('weightChart');
const ctx2 = document.getElementById('SugarChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['7 Aug', '8 Aug', '9 Aug', '10 Aug', '11 Aug', '12 Aug'],
        datasets: [{
            label: 'Blood Pressure',
            data: [120, 160, 180, 80, 170, 200],
            borderWidth: 1,
            borderColor: 'black',
            tension: 0.1,
            color: '#fff'
        }]
    },

});

new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['7 June', '8 July', '9 Aug', '10 Sep', '11 Oct', '12 Nov'],
        datasets: [{
            label: 'Weight',
            data: [5.1, 5.2, 5.3, 5.4, 5.6, 5.7],
            borderWidth: 1,
            borderColor: 'black',
            tension: 0.1,
            color: '#fff'
        }]
    },

});

new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['7 June', '8 June', '9 June', '10 June', '11 June', '12 June'],
        datasets: [{
            label: 'Glucose Level',
            data: [80, 70, 90, 100, 50, 120],
            borderWidth: 1,
            borderColor: 'black',
            tension: 0.1,
            color: '#fff'
        }]
    },

});


function closeNotification() {
    const notification = document.getElementById("notification");
    notification.style.opacity = "0";
    setTimeout(function () {
        notification.style.display = "none";
    }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
    const notification = document.getElementById("notification");

    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const showNotification = urlParams.get('showNotification');

    if (showNotification === 'true') {
        notification.style.display = "block";
        setTimeout(function () {
            closeNotification();
        }, 5000); // Change the time to control how long the notification stays before fading out
    }
});