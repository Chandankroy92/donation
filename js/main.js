$(document).ready(function($) {
    var value1;
    $('.giveNow').click(function(){
        value1=$('#inputValue').val();
        var amount_collected=1000-parseInt($('.dollar1').text());

        var result=((parseInt(value1)+amount_collected)/1000)*100;
        // console.log(result);
        // alert(result);
        $('.progress-bar').css('width',result +'%');
        var availProject=1000-parseInt(value1);
        $('.dollar1').text(availProject);
    });
    
    
    $('.tellUrFnds').click(function(){
        $('.popover').css("display","block");
    });

});