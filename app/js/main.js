
$(document).ready(function(){
	$(".btn_menu_js").click(function(){
		$(this).toggleClass("active");
		$("body").toggleClass("body_overflow");
		$(".sidebar").toggleClass("active");
		$(".sidebar_overlay_js").toggleClass("active");
		return false;
	});
	$(".sidebar_overlay_js").click(function(){
		$(this).toggleClass("active");
		$("body").toggleClass("body_overflow");
		$(".sidebar").toggleClass("active");
		$(".btn_menu_js").toggleClass("active");
		return false;
	});
	// owl at dashboard
	function postsCarousel() {
        var checkWidth = $(window).width();
        var owlPost = $(".transaction_block_js");
        if (checkWidth > 992) {
            if(typeof owlPost.data('owl.carousel') != 'undefined'){
                owlPost.data('owl.carousel').destroy();
            }
            owlPost.removeClass('owl-carousel owl-theme ');
        } else if (checkWidth < 992) {
            owlPost.addClass('owl-carousel owl-theme ');
            owlPost.owlCarousel({
                items : 2,
                smartSpeed: 1000,
                slideSpeed: 700,
                autoplay: true,
                dots: true,
                autoWidth:true,
                loop: true,
                nav: false
            });
        }
    }
    postsCarousel();
    $(window).resize(postsCarousel);
});
