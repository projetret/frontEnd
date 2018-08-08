$(document).ready( function(){

    /********************************
    *           Customizer          *
    ********************************/
    var body = $('body'),
    default_bg_color = $('.app-sidebar').attr('data-background-color'),
    default_bg_image = $('.app-sidebar').attr('data-image');

    $('.cz-bg-color span[data-bg-color="'+default_bg_color+'"]').addClass('selected');
    $('.cz-bg-image img[src$="'+default_bg_image+'"]').addClass('selected');

    // Customizer toggle & close button click events  [Remove customizer code from production]
    $('.customizer-toggle').on('click',function(){
        $('.customizer').toggleClass('open');
    });
    $('.customizer-close').on('click',function(){
        $('.customizer').removeClass('open');
    });
    if($('.customizer-content').length > 0){
        $('.customizer-content').perfectScrollbar({
            theme:"dark"
        });
    }

    // Change Sidebar Background Color
    $('.cz-bg-color span').on('click',function(){
        var $this = $(this),
        bgColor = $this.attr('data-bg-color');

        $this.closest('.cz-bg-color').find('span.selected').removeClass('selected');
        $this.addClass('selected');

        $('.app-sidebar').attr('data-background-color', bgColor);
		
		
        if(bgColor == 'white'){
            $('.logo-img img').attr('src','assets/img/logo-dark.png');
        }
        else{
            if($('.logo-img img').attr('src') == 'assets/img/logo-dark.png'){
                $('.logo-img img').attr('src','assets/img/logo.png');
            }
        }
    });
	 $('.customizer-toggle span').on('click',function(){
        var $this = $(this),
        bgColor = $this.attr('data-bg-color');

        $this.closest('.customizer-toggle').find('span.selected').removeClass('selected');
        $this.addClass('selected');

        $('.customizer-toggle').attr('data-background-color', bgColor);
	
    });

    // Change Background Image
    $('.cz-bg-image img').on('click',function(){
        var $this = $(this),
        src = $this.attr('src');

        $('.sidebar-background').css('background-image', 'url(' + src + ')');
        $this.closest('.cz-bg-image').find('.selected').removeClass('selected');
        $this.addClass('selected');
    });

    $('.cz-bg-image-display').on('click',function(){
        var $this = $(this);
        if($this.prop('checked') === true){
            $('.sidebar-background').css('display','block');
        }
        else{
            $('.sidebar-background').css('display','none');
        }
    });

    $('.cz-compact-menu').on('click',function(){
        $('.nav-toggle').trigger('click');
        if($(this).prop('checked') === true){
            $('.app-sidebar').trigger('mouseleave');
        }
    });

    $('.cz-sidebar-width').on('change',function(){
        var $this = $(this),
        width_val = this.value,
        wrapper = $('.wrapper');

        if(width_val === 'small'){
            $(wrapper).removeClass('sidebar-lg').addClass('sidebar-sm');
        }
        else if(width_val === 'large'){
            $(wrapper).removeClass('sidebar-sm').addClass('sidebar-lg');
        }
        else{
            $(wrapper).removeClass('sidebar-sm sidebar-lg');
        }

    });
   /*  var themes = {
        "default": "//netdna.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",
        "cerulean": "//bootswatch.com/4/cerulean/bootstrap.min.css",
        "cosmo": "//bootswatch.com/4/cosmo/bootstrap.min.css",
        "cyborg": "//bootswatch.com/4/cyborg/bootstrap.min.css",
        "flatly": "//bootswatch.com/4//flatly/bootstrap.min.css",
        "journal": "//bootswatch.com/4//journal/bootstrap.min.css",
        "readable": "//bootswatch.com/4//readable/bootstrap.min.css",
        "simplex": "//bootswatch.com/4/simplex/bootstrap.min.css",
        "slate": "//bootswatch.com/4/slate/bootstrap.min.css",
        "spacelab": "//bootswatch.com/4/spacelab/bootstrap.min.css",
        "united": "//bootswatch.com/4/united/bootstrap.min.css"
           //etc... add your stylesheet from https://bootswatch.com/
           //example:
           // "ADDNAME": "//bootswatch.com/ADDNAME/bootstrap.min.css"
     }
     
     //switches
     $(function() {
        var themesheet = $('<link href="' + themes['default'] + '" rel="stylesheet" />');
        themesheet.appendTo('head');
        $('.theme-link').click(function() {
           var themeurl = themes[$(this).attr('data-theme')];
           themesheet.attr('href', themeurl);
        });
     }); */

});