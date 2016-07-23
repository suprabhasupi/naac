var hide_show_div = function(round_id) {
    // code to hide show divs
    if (round_id == '#r1') {
        console.log('r1 hain');
        $('#r1_section').show();
        $('#r1_section').siblings().hide();


        $('.hotel_dew_drops_frst_page').css('background-image','url(image/hotel_dew/image1.jpg)');

                 $('#r1_name').css('font-family','raleway_black');
        $('#r2_name').css('font-family','raleway_regular');
        $('#r3_name').css('font-family','raleway_regular');
        $('#r4_name').css('font-family','raleway_regular');


        $('#r1_img').attr('src', 'image/about/icon_1_hover.png');
        $('#r2_img').attr('src', 'image/about/icon_2.png');
        $('#r3_img').attr('src', 'image/about/icon_3.png');
        $('#r4_img').attr('src', 'image/about/icon_4.png');

    } else if (round_id == '#r2') {
        console.log('r2 hain');
        $('#r2_section').show();
        $('#r2_section').siblings().hide();

        $('.hotel_dew_drops_frst_page').css('background-image','url(image/hotel_trinityle/image1.jpg)');
        $('#r1_name').css('font-family','raleway_regular');
        $('#r2_name').css('font-family','raleway_black');
        $('#r3_name').css('font-family','raleway_regular');
        $('#r4_name').css('font-family','raleway_regular');






        $('#r1_img').attr('src', 'image/about/icon_1.png');
        $('#r2_img').attr('src', 'image/about/icon_2_hover.png');
        $('#r3_img').attr('src', 'image/about/icon_3.png');
        $('#r4_img').attr('src', 'image/about/icon_4.png');
    } else if (round_id == '#r3') {
        console.log('r3 hain');
        $('#r3_section').show();
        $('#r3_section').siblings().hide();

        $('.hotel_dew_drops_frst_page').css('background-image','url(image/hotel_dew/image1.jpg)');

 $('#r1_name').css('font-family','raleway_regular');
        $('#r2_name').css('font-family','raleway_regular');
        $('#r3_name').css('font-family','raleway_black');
        $('#r4_name').css('font-family','raleway_regular');


        $('#r1_img').attr('src', 'image/about/icon_1.png');
        $('#r2_img').attr('src', 'image/about/icon_2.png');
        $('#r3_img').attr('src', 'image/about/icon_3_hover.png');
        $('#r4_img').attr('src', 'image/about/icon_4.png');
    } else if (round_id == '#r4') {
        console.log('r4 hain');
        $('#r4_section').show();
        $('#r4_section').siblings().hide();

        $('.hotel_dew_drops_frst_page').css('background-image','url(image/hotel_le/image2.png)');


         $('#r1_name').css('font-family','raleway_regular');
        $('#r2_name').css('font-family','raleway_regular');
        $('#r3_name').css('font-family','raleway_regular');
        $('#r4_name').css('font-family','raleway_black');


        $('#r1_img').attr('src', 'image/about/icon_1.png');
        $('#r2_img').attr('src', 'image/about/icon_2.png');
        $('#r3_img').attr('src', 'image/about/icon_3.png');
        $('#r4_img').attr('src', 'image/about/icon_4_hover.png');
    }
}

$('.round').click(function() {
    console.log('click kam kar raha hain bhai!');
    console.log($(this).position().left);
    var leftpos = $(this).position().left;
    $('.controller').animate({ left: leftpos }, 1000, function() {});
    hide_show_div('#' + this.id);
});

$('.round_name').click(function() {
    var round_id = '#' + $(this).data().round;
    leftpos = $(round_id).position().left;
    $('.controller').animate({ left: leftpos }, 1000, function() {});
    hide_show_div(round_id);

    console.log($(this).data().round);
    console.log($(round_id).position().left);
});
