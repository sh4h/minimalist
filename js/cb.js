jQuery(document).ready(function(){
    jQuery(".gallery").fadeInGallery({imgNum:6, interval: 3000, fadeTime:3000});
    var nonHomeLayout = function(){
        jQuery("body").addClass("non-home-layout");
    };
    var homeLayout = function(){
        jQuery("body").removeClass("non-home-layout");
        jQuery(".blog-container").hide();
        jQuery(".work-gallery").hide();
        jQuery(".gallery").show();
    };
    var renderWedding = function() {
        // We only want these styles applied when javascript is enabled
        $('div.content').css('display', 'flex');
        $('div.work-gallery').css('display', 'flex');
        // Initially set opacity on thumbs and add
        // additional styling for hover effect on thumbs
        var onMouseOutOpacity = 0.47;
        $('#thumbs ul.thumbs li, div.navigation a.pageLink').opacityrollover({
            mouseOutOpacity:   onMouseOutOpacity,
            mouseOverOpacity:  1.0,
            fadeSpeed:         'fast',
            exemptionSelector: '.selected'
        });

        // Initialize Advanced Galleriffic Gallery
        var gallery = $('#thumbs').galleriffic({
            delay:                     7500,
            numThumbs:                 22,
            preloadAhead:              10,
            enableTopPager:            false,
            enableBottomPager:         false,
            imageContainerSel:         '#slideshow',
            controlsContainerSel:      '#controls',
            captionContainerSel:       '#caption',
            loadingContainerSel:       '#loading',
            renderSSControls:          true,
            renderNavControls:         true,
            playLinkText:              'Resume Slideshow',
            pauseLinkText:             '',
            prevLinkText:              '',
            nextLinkText:              '',
            nextPageLinkText:          'Next &rsaquo;',
            prevPageLinkText:          '&lsaquo; Prev',
            autoStart:                 true,
            syncTransitions:           true,
            defaultTransitionDuration: 1100,
            onSlideChange:             function(prevIndex, nextIndex) {
                // 'this' refers to the gallery, which is an extension of $('#thumbs')
                this.find('ul.thumbs').children()
                    .eq(prevIndex).fadeTo('fast', onMouseOutOpacity).end()
                    .eq(nextIndex).fadeTo('fast', 1.0);

                // Update the photo index display
                this.$captionContainer.find('div.photo-index')
                    .html('Photo '+ (nextIndex+1) +' of '+ this.data.length);
            },
            onPageTransitionOut:       function(callback) {
                this.fadeTo('fast', 0.0, callback);
            },
            onPageTransitionIn:        function() {
                var prevPageLink = this.find('a.prev').css('visibility', 'hidden');
                var nextPageLink = this.find('a.next').css('visibility', 'hidden');

                // Show appropriate next / prev page links
                if (this.displayedPage > 0)
                    prevPageLink.css('visibility', 'visible');

                var lastPage = this.getNumPages() - 1;
                if (this.displayedPage < lastPage)
                    nextPageLink.css('visibility', 'visible');

                this.fadeTo('fast', 1.0);
            }
        });

        /**************** Event handlers for custom next / prev page links **********************/

        gallery.find('a.prev').click(function(e) {
            gallery.previousPage();
            e.preventDefault();
        });

        gallery.find('a.next').click(function(e) {
            gallery.nextPage();
            e.preventDefault();
        });


    };
    var renderWork = function(){
        nonHomeLayout();
        jQuery(".blog-container").hide();
        jQuery(".gallery").hide();
        jQuery(".mk_weddings").bind("click", renderWedding);
    };
    var popUp = "<div class='overlay'><div class='popUp'></div></div>";
    var invokeContact = function(){
        jQuery("body").append(popUp);
        jQuery(".overlay").bind("click", function(){
            jQuery(".overlay").remove();
        });
    };
    var loadBlog = function () {
        jQuery(".gallery").hide();
        jQuery(".blog-container").show();
    };
    jQuery(".link_work").bind("click", renderWork);
    jQuery(".link_home").bind("click", homeLayout);
    jQuery(".link_contact").bind("click", invokeContact);
    jQuery(".link_blog").bind("click", loadBlog);



});