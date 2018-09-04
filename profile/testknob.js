$(document).ready(function(){
    $('.dial').each(function () { 

        var elm = $(this);
        var color = elm.attr("data-fgColor");  
        var perc = elm.attr("value");  

        elm.knob({ 
            'value': 0, 
            'min':0,
            'max':100,
            "skin":"tron",
            "readOnly":true,
            "thickness":0.1,                 
            'dynamicDraw': true,                
            "displayInput":false,
            "fontWeight": 50,
            "inputColor": "#00ff0a"
        });

        $({value: 0}).animate({ value: perc }, {
            duration: 1000,
            easing: 'swing',
            progress: function (){  
                elm.val(Math.ceil(this.value)).trigger('change');
            }
        });

        //circular progress bar color
        $(this).append(function() {
            elm.parent().parent().find('.circular-bar-content').css('color',color);
            elm.parent().parent().find('.circular-bar-content label').text(perc+'%');
        });

    });

 });