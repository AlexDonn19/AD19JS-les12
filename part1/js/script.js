$(function () {

    var $leftUIEl = $('.carousel-arrow-left');
    var $rightUIEl = $('.carousel-arrow-right');
    var $elementList = $('.carousel-list');

    var $pixelOffset = 125;
    var $currentLeftValue = 0;

    var $elementsCount = $elementList.find('li').length;
    var $minimumOffset = - (($elementsCount - 5) * $pixelOffset);
    var $maximumOffset = 0;

    $leftUIEl.on('click', function () {
        if ($currentLeftValue != $maximumOffset) {
            $currentLeftValue += 125;
            $elementList.animate({
                left: $currentLeftValue + "px"
            }, 500);
        }
    });

    $rightUIEl.on('click', function () {
        if ($currentLeftValue != $minimumOffset) {
            $currentLeftValue -= 125;
            $elementList.animate({
                left: $currentLeftValue + "px"
            }, 500);
        }
    })


});