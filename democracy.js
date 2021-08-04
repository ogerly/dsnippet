$(document).ready(function(){
    $('.container-text').css('display', 'none'); 
    $('.container-1 .container-text').css('display', 'inline-flex');
    $('.containerrow div.haken:after').css({
        'content': '‹',
        'transform': 'rotate(272deg)'        
    })
    $('div.haken').text('‹')
   
    function html(clas){
        console.log(''+ clas +'.content-open')
        var html = $('.rectanglebox.content-open').html();
        console.log(html)
        $('.rectanglebox.content-open').html('').removeClass('content-open');
        //$(clas +' .rectanglebox').prepend(html).addClass('content-open');
        //$('.rectanglebox').css('display', 'inline-flex');
        $( ''+clas +' .rectanglebox').html(html);
        $( ''+clas +' .rectanglebox').addClass('content-open');
        console.log(''+clas +'.ri-subtitle-heading div.haken');
        $( ''+clas +'.ri-subtitle-heading div.haken').css('content','');
    }
    
    $('.container-1 .ri-subtitle-heading').click( function() {
        $('.container-text').css('display', 'none'); 
        $('.container-1 .container-text').css('display', 'inline-flex');
        html('.container-1');
    })
    $('.container-2 .ri-subtitle-heading').click( function() {
        $('.container-text').css('display', 'none'); 
        $('.container-2 .container-text').css('display', 'inline-flex');
        $('.container-2').prepend($('#rectangleinfo').html());
        html('.container-2');
    })
    $('.container-3 .ri-subtitle-heading').click( function() {
        $('.container-text').css('display', 'none'); 
        $('.container-3 .container-text').css('display', 'inline-flex');
        html('.container-3');
    })
    $('.container-4 .ri-subtitle-heading').click( function() {
        $('.container-text').css('display', 'none'); 
        $('.container-4 .container-text').css('display', 'inline-flex');
        html('.container-4');
    })
    $('.container-5 .ri-subtitle-heading').click( function() {
        $('.container-text').css('display', 'none'); 
        $('.container-5 .container-text').css('display', 'inline-flex');
        html('.container-5');
    })
});