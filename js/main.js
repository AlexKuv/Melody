$(document).ready(function () {
    let currentFloor = 2;
    let counterUp = $(".counter__up");
    let counterDown = $(".counter__down");
    let floorPath = $('.home-image path');
    floorPath.on("mouseover", function () {
        currentFloor = $(this).attr('data-floor');
        floorPath.removeClass('current-floor');
        $('.counter__text').text(currentFloor);
    })

    counterUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter__text').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    })

    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter__text').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    })
});