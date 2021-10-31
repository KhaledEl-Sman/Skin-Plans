$(document).ready(function () {

    //countdown
    function countdownTimeStart(duration) {
        let countDownDate = new Date().getTime() + (duration * 3600000);

        // Update the count down every 1 second
        let x = setInterval(function () {

            // Get todays date and time
            let now = new Date().getTime();

            // Find the distance between now an the count down date
            let distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            // Output the result
            $('#countDown').html(hours + ":" + minutes + ":" + seconds);

            // If the count down is over
            if (distance < 0) {
                clearInterval(x);
                $('#countDown').html("EXPIRED");
            }
        }, 1000);
    }

    window.onload = function () {
        countdownTimeStart(2.3);
    };

})