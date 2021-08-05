$(document).ready(function(){
    $('.container-text').css('display', 'none'); 
    $('.container-1 .container-text').css('display', 'inline-flex');
    $( '.container-1 .haken').css('display', 'none');

   
    function html(clas){
        var html = $('.rectanglebox.content-open').html();
        $('.rectanglebox.content-open').html('').removeClass('content-open');
        $( '.haken').css('display', 'inline-table');
        $( ''+clas +' .rectanglebox').html(html);
        $( ''+clas +' .rectanglebox').addClass('content-open');        
        $( ''+clas +' .haken').css('display', 'none');
    }
    
    $('.container-1 .ri-subtitle-heading').click( function() {
        $('.container-text').css('display', 'none'); 
        $('.container-1 .container-text').css('display', 'inline-flex');
        html('.container-1');
    })

    $('.container-2 .ri-subtitle-heading').click( function() {
        $('.container-text').css('display', 'none'); 
        $('.container-2 .container-text').css('display', 'inline-flex');
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