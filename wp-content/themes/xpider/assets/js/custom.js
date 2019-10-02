(function($) {
    "use strict";
    
    $(document).ready(function () {

        // Check email address validator
        function isValidEmailAddress(emailAddress) {
            var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
            return pattern.test(emailAddress);
        }

        // check contact form value
        function contactFormValueCheck($this) {
            var val = $this.val();

            if( $this.hasClass('wpcf7-validates-as-required') ) {
                if( val.length <= 0 ) {
                    $this.addClass('input-error');
                } else {
                    $this.removeClass('input-error');
                }

                if( $this.attr('type') == 'email' ) {
                    if( isValidEmailAddress(val) == true ) {
                        $this.removeClass('input-error');
                    } else {
                        $this.addClass('input-error');
                    }
                }
            }
        }

        $('.wpcf7-form-control-wrap input, .wpcf7-form-control-wrap textarea').on('blur', function () {
            var $this = $(this);
            contactFormValueCheck($this)
        });

        $('.wpcf7-form-control-wrap input, .wpcf7-form-control-wrap textarea').on('keyup', function () {
            var $this = $(this);
            contactFormValueCheck($this)
        });


        var windowWidth = $(window).width();

        if( windowWidth > 480 ) {
            $(".sticky-sidebar").stick_in_parent({
                parent: '.elementor-row',
                offset_top: 100
            });
        }
    });

})(jQuery)
