/**
 * Created by Me on 7/14/2015.
 */

(function ($)
{
    var insertGallery = function (ele, options)
    {
        options = $.extend({
            next:1,
            current:0,
            interval:5000,
            fadeTime:5,
            imgNum:4
        }, options || {});
        var self = this;
        ele = jQuery(ele);
        jQuery(ele.find(".img"))
            .eq(options.current)
            .delay(options.interval)
            .hide('fade', {direction: 'left'}, 3000) //hide('slide', {direction: 'left'}, options.fadeTime);  .fadeOut(options.fadeTime)
            .end()
            .eq(options.next)
            .delay(options.interval)
            .hide()
            .show('fade', {direction: 'right'}, 3000, function ()
            {
                insertGallery(ele, options);
            });

        if (options.next < options.imgNum - 1) {
            options.next++;
        } else {
            options.next = 0;
        }
        if (options.current < options.imgNum - 1) {
            options.current++;
        } else {
            options.current = 0;
        }
    };


    $.fn.fadeInGallery = function (options)
    {
        insertGallery(this, options);
        return this;
    };
})(jQuery);
