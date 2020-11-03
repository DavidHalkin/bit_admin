
$(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip(); 

    $(".collapse_toggle_link_js").click(function(){
        if($(this).find("i").hasClass("fa-chevron-up")){
                $(this).find("i").removeClass("fa-chevron-up").addClass("fa-chevron-down");;
            }
            else{
                $(this).find("i").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            }
        // $(this).find("i").toggleClass('fa-chevron-up fa-chevron-down');
        // $("button").attr("aria-expanded","true");
    });
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
$(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
    $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
});