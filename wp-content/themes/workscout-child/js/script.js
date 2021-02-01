jQuery(document).on('click', '.plane-fly', function(e){
    e.preventDefault();
    var atag = jQuery(this).find('a');
    var fly_img = jQuery(this).find('img');

    var screen_width = jQuery(window).width();

    jQuery(fly_img).animate({ left: screen_width }, 250, function(){
        document.location.href = jQuery(atag).attr('href');
    })
})

jQuery(window).load(function(){
    console.log('ready');
    jQuery('.plane-fly').find('img').css('left', '0');
})

console.log('test');
window.onpageshow = function (event) {
    console.log('ready1');
    jQuery('.plane-fly').find('img').css('left', '0');
};