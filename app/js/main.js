
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

// $(document).ready(function () {
//     // 1
//     var ctx = document.getElementById("barChart").getContext('2d');
//         var barChart = new Chart(ctx, {
//           type: 'bar',
//           data: {
//             labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sst", "Sun"],
//             datasets: [{
//               label: 'data-1',
//               data: [12, 19, 3, 17, 28, 24, 7],
//               backgroundColor: "#13BFAA"
//             }, {
//               label: 'data-2',
//               data: [30, 29, 5, 5, 20, 3, 10],
//               backgroundColor: "#13BFAA"
//             }]
//           },
//           options:{
//             responsive: true,
//             maintainAspectRatio: false,
//             scales: {
//                 xAxes: [{
//                     barThickness: 'flex',
//                     maxBarThickness: 10 
//                 }]
//             }
//           }
//         });
//     // 2
//     var speedCanvas = document.getElementById("speedChart").getContext('2d'),
//         gradient = speedCanvas.createLinearGradient(0, 0, 0, 450);

//     gradient.addColorStop(0, 'rgba(15, 193, 171, 0.11)');
//     gradient.addColorStop(0.45, 'rgba(15, 193, 171, 0.06)');
//     gradient.addColorStop(0.91, 'rgba(15, 193, 171, 0)');

//     Chart.defaults.global.defaultFontFamily = "Rubik";
//     Chart.defaults.global.defaultFontSize = 14;

//     var speedData = {
//         labels: ["Sep 21", "Sep 28", "Oct 5", "Oct 12", "Oct 19", "Oct 26"],
//         datasets: [{
//             label: "Oct 7, 15:28",
//             data: [0, 10, 15, 12, 20, 18],
//             backgroundColor: gradient,
//             borderColor: "#0FC1AB",
//             borderWidth: 2
//         }],

//     };

//     var chartOptions = {
//         legend: {
//             display: false,
//         },
//         responsive: true,
//         maintainAspectRatio: false,
//         scales: {
//             xAxes: [{
//                 gridLines: {
//                     color: '#E9EEF2',
//                     lineWidth: 1.2
//                 }
//             }],
//             yAxes: [{
//                 gridLines: {
//                     color: '#E9EEF2',
//                     lineWidth: 1.2
//                 }
//             }]
//         },
//         point: {
//             backgroundColor: 'white',
//             borderColor: '#0FC1AB',
//             borderWidth: 2,
//         },
//         tooltips: {
//             bodyFontFamily: 'Rubik',
//             bodyFontSize: 14,
//             bodyFontColor: '#4C5461',
//             titleMarginBottom: 8,
//             titleFontFamily: 'Rubik',
//             titleFontSize: 16,
//             titleFontStyle: 'normal',
//             backgroundColor: '#FFFFFF',
//             titleFontColor: '#000',
//             caretSize: 5,
//             cornerRadius: 2,
//             xPadding: 10,
//             yPadding: 20
//         }
//     };

//     var lineChart = new Chart(speedCanvas, {
//         type: 'line',
//         data: speedData,
//         options: chartOptions
//     });

// });