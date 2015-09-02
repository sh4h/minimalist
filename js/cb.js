jQuery(document).ready(function(){
    /*image array starts*/
    var imageArrayWeddings = [{title: "kela00"}, {title: "kela01"}, {title: "kela02"}, {title: "kela03"}, {title: "kela04"}, {title: "kela05"}, {title: "kela06"}, {title: "kela07"}, {title: "kela08"}, {title: "kela09"}, {title: "kela10"}, {title: "kela11"}, {title: "kela12"}, {title: "kela13"}];
    var imageArrayEvents = [{title: "baal00"}, {title: "baal01"}, {title: "baal02"}, {title: "baal03"}, {title: "baal04"}, {title: "baal05"}, {title: "baal06"}, {title: "baal07"}, {title: "baal08"}, {title: "baal09"}, {title: "baal10"}, {title: "baal11"}, {title: "baal12"}, {title: "baal13"}];
    var imageArrayBabies = [{title: "sent00"}, {title: "sent01"}, {title: "sent02"}, {title: "sent03"}, {title: "sent04"}, {title: "sent05"}, {title: "sent06"}, {title: "sent07"}, {title: "sent08"}, {title: "sent09"}, {title: "sent10"}, {title: "sent11"}, {title: "sent12"}, {title: "sent13"}];
    var imageArrayProducts = [{title: "marani00"}, {title: "marani01"}, {title: "marani02"}, {title: "marani03"}, {title: "marani04"}, {title: "marani05"}, {title: "marani06"}, {title: "marani07"}, {title: "marani08"}, {title: "marani09"}, {title: "marani10"}, {title: "marani11"}, {title: "marani12"}, {title: "marani13"}];
    var imageArrayInteriors = [{title: "bhaai00"}, {title: "bhaai01"}, {title: "bhaai02"}, {title: "bhaai03"}, {title: "bhaai04"}, {title: "bhaai05"}, {title: "bhaai06"}, {title: "bhaai07"}, {title: "bhaai08"}, {title: "bhaai09"}, {title: "bhaai10"}, {title: "bhaai11"}, {title: "bhaai12"}, {title: "bhaai13"}];
    /*image array ends*/
    var gallery;
    jQuery(".gallery").fadeInGallery({imgNum:6, interval: 3000, fadeTime:3000});
    var nonHomeLayout = function(){
        jQuery("body").addClass("non-home-layout");
    };
    var homeLayout = function(){
        if(gallery != undefined){
            gallery.destroy();
        }
        jQuery("body").removeClass("non-home-layout");
        jQuery(".blog-container").hide();
        jQuery(".work-gallery").hide();
        jQuery(".gallery").show();
    };
    var loadWorkGalleryTemplate = function(category, imageArray){
        var imageListHolder = jQuery(".thumbs");
        imageListHolder.empty();
        for(var i = 1; i < imageArray.length; i++){
            imageListHolder.append('<li>' +
                '<a class="thumb" href="images/categories/'+ category +'/img_'+i+'.jpg" title="'+imageArray[i].title+'" style="background-image: url(images/categories/'+ category +'/img_'+i+'.jpg)">' +
                '<img src="images/categories/'+ category +'/img_'+i+'.jpg" alt="'+imageArray[i].title+'"/>' +
                '</a>' +
                '</li>');
        }
    };
    var initiateWorSlide = function(){
        // Initialize Advanced Galleriffic Gallery
        gallery = $('#thumbs').galleriffic({
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

            onPageTransitionOut:function(callback) {
                this.fadeTo('fast', 0.0, callback);
            },
            onPageTransitionIn:function() {
                var lastPage = this.getNumPages() - 1;
                this.fadeTo('fast', 1.0);
            }
        });
        jQuery('.slideshow').css({opacity: 1});
    };
    var renderWork = function() {
        nonHomeLayout();
        jQuery(".blog-container").hide();
        jQuery(".gallery").hide();
        jQuery(".mk_weddings").bind("click", function(){
            gallery.destroy();
            loadWorkGalleryTemplate("weddings", imageArrayWeddings);
            initiateWorSlide();
        });
        jQuery(".mk_events").bind("click", function(){
            gallery.destroy();
            loadWorkGalleryTemplate("events", imageArrayEvents);
            initiateWorSlide();
        });
        jQuery(".mk_babies").bind("click", function(){
            gallery.destroy();
            loadWorkGalleryTemplate("babies", imageArrayBabies);
            initiateWorSlide();
        });
        jQuery(".mk_products").bind("click", function(){
            gallery.destroy();
            loadWorkGalleryTemplate("products", imageArrayProducts);
            initiateWorSlide();
        });
        jQuery(".mk_interiors").bind("click", function(){
            gallery.destroy();
            loadWorkGalleryTemplate("interiors", imageArrayInteriors);
            initiateWorSlide();
        });
        // We only want these styles applied when javascript is enabled
        $('div.work-gallery').css('display', 'flex');
        loadWorkGalleryTemplate("weddings", imageArrayWeddings);
        initiateWorSlide();


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

    var popUp = "<div class='overlay'><div class='popUp'></div></div>";
    var invokeContact = function(){
        jQuery("body").append(popUp);
        jQuery(".overlay").bind("click", function(){
            jQuery(".overlay").remove();
        });
    };
    var loadBlog = function () {
        nonHomeLayout();
        jQuery(".gallery").hide();
        jQuery(".work-gallery").hide();
        jQuery(".blog-container").show();
    };
    jQuery(".link_work").bind("click", renderWork);
    jQuery(".link_home").bind("click", homeLayout);
    jQuery(".link_contact").bind("click", invokeContact);
    jQuery(".link_blog").bind("click", loadBlog);



});
