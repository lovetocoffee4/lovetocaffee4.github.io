$(document).ready(function () {
    
    function showPopup(){
        $('.pop-up').addClass('show');
        $('.pop-wrap').addClass('show');
    }

    $("#close").click(function(){
        $('.pop-up').removeClass('show');
        $('.pop-wrap').removeClass('show');

    });
    setTimeout(showPopup, 5000);
    
});

