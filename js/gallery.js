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
            interval:400,
            fadeTime:2000,
            imgNum:4
        }, options || {});
        var self = this;
        ele = jQuery(ele);
        jQuery(ele.find(".img"))
            .eq(options.current)
            .delay(options.interval)
            .fadeOut(options.fadeTime)
            .end()
            .eq(options.next)
            .delay(options.interval)
            .hide()
            .fadeIn(options.fadeTime, function ()
            {
                insertGallery(ele, options);
            });
        var bannerCaptionContainer = jQuery(".bannerCaption");
        jQuery(bannerCaptionContainer.find(".bannerCationContent"))
            .eq(options.current)
            .delay(options.interval)
            .fadeOut(options.fadeTime)
            .end()
            .eq(options.next)
            .delay(options.interval)
            .hide()
            .fadeIn(options.fadeTime);

        jQuery(bannerCaptionContainer.find(".bannerCaption" + options.next))
            .fadeIn(options.fadeTime);
        jQuery(bannerCaptionContainer.find(".bannerCaption" + options.current))
            .fadeOut(options.fadeTime);

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
