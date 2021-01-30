jQuery(document).on('click', '.plane-fly', function(e){
    e.preventDefault();
    var atag = jQuery(this).find('a');
    var fly_img = jQuery(this).find('img');

    var screen_width = jQuery(window).width();

    jQuery(fly_img).animate({ left: screen_width }, 750, function(){
        document.location.href = jQuery(atag).attr('href');
    })
})