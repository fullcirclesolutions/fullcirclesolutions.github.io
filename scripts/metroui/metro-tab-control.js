(function( $ ) {
    $.widget("metro.tabcontrol", {

        version: "1.0.0",

        options: {
            effect: 'none'
        },

        _create: function(){
            var that = this,
                element = this.element,
                tabs = $(element.children(".tabs")).children("li"),
                frames = $(element.children(".frames")).children(".frame");

            if (element.data('effect') != undefined) {
                this.options.effect = element.data('effect');
            }

            this.init(tabs, frames);

            tabs.each(function(){

                var tab = $(this).children("a");

                tab.on('click', function(e){
                    e.preventDefault();

                    tabs.removeClass("active");
                    tab.parent("li").addClass("active");

                    frames.hide();
                    var current_frame = $(tab.attr("href"));
                    switch (that.options.effect) {
                        case 'slide': current_frame.slideDown(); break;
                        case 'fade': current_frame.fadeIn(); break;
                        default: current_frame.show();
                    }

                    that._trigger('change', event, current_frame)
                });
            });
        },

        init: function(tabs, frames){
            var that = this;
            tabs.each(function(){
                if ($(this).hasClass("active")) {
                    var current_frame = $($($(this).children("a")).attr("href"));
                    frames.hide();
                    current_frame.show();
                    that._trigger('change', event, current_frame);
                    return;
                }
            });
        },

        _destroy: function(){

        },

        _setOption: function(key, value){
            this._super('_setOption', key, value);
        }
    })
})( jQuery );

$(function(){
    $('[data-role=tab-control]').tabcontrol();
})