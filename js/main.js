$(document).ready(function () {
    let currentFloor = 2;
    let counterUp = $(".counter__up");
    let counterDown = $(".counter__down");
    let floorPath = $('.home-image path');
    let modal = $('.modal');
    let modalClose = $('.modal__close-button');
    let viewFlatsButton = $('.view-flats');

    floorPath.on("mouseover", function () {
        currentFloor = $(this).attr('data-floor');
        floorPath.removeClass('current-floor');
        $('.counter').text(currentFloor);
    })

    floorPath.on('click',toggleModal );
    modalClose.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);

    counterUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    })

    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    })

    function toggleModal() {
        modal.toggleClass('is-open');
    }
});