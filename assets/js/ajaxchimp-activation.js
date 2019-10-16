(function($) {
    "use strict";
    $( document ).ready(function() {
        var $actionUrl = $('.newsletter-action-url').val();
        $('.mc-embedded-subscribe-form').ajaxChimp({
            callback: mailchimpCallback,
            url: $actionUrl
        }); 
        function mailchimpCallback(resp) {
             if (resp.result === 'success') {
                $('.subscription-success').html('<i class="fa fa-check"></i>' + resp.msg).fadeIn(1000);
                $('.subscription-error').fadeOut(500);
                
            } else if(resp.result === 'error') {
                $('.subscription-error').html('<i class="fa fa-times"></i>' + resp.msg).fadeIn(1000);
            }  
        }
    });
})(jQuery);