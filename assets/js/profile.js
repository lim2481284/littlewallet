
var userRanking = 0;


//Changing ranking content
$(document).ready(function() {
	$('#bodyContent').removeClass('fade-out');
	$('.loader').fadeOut(300);
    var rankingHTML=`
          <div class="slider-single">
            <img class="slider-single-image" src="test.png" alt="1" />
            <a class="slider-single-download" href="javascript:void(0);">Rank 1 <i class="fa fa-download"></i></a>
            <h1 class="slider-single-title">Username </h1>
            <a class="slider-single-likes" href="javascript:void(0);">
              <i class="fa fa-heart"></i>
              <p>1,247</p>
            </a>
          </div>
          <div class="slider-single">
            <img class="slider-single-image" src="test.png" alt="2" />
            <a class="slider-single-download" href="javascript:void(0);">Rank 1 <i class="fa fa-download"></i></a>
            <h1 class="slider-single-title">Username </h1>
            <a class="slider-single-likes" href="javascript:void(0);">
              <i class="fa fa-heart"></i>
              <p>1,247</p>
            </a>
          </div>
          <div class="slider-single">
            <img class="slider-single-image" src="test.png" alt="3" />
            <a class="slider-single-download" href="javascript:void(0);">Rank 1 <i class="fa fa-download"></i></a>
            <h1 class="slider-single-title">Username </h1>
            <a class="slider-single-likes" href="javascript:void(0);">
              <i class="fa fa-heart"></i>
              <p>1,247</p>
            </a>
          </div>
    `;
  //  $('.rankingFrame').contents().find('.slider-content').html(rankingHTML);
});


$('.userMenu').attr('class','userMenu active');

// script for tab steps
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        var href = $(e.target).attr('href');
        var $curr = $(".process-model  a[href='" + href + "']").parent();

        $('.process-model li').removeClass();

        $curr.addClass("active");
        $curr.prevAll().addClass("visited");
    });
// end  script for tab steps


function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			$('#uploadedImage')
				.attr('src', e.target.result)
				.width(200)
				.height(200);
		};
		reader.readAsDataURL(input.files[0]);
	}
}



//Tab funciton
$(document).ready(function() {

	(function ($) {
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

		$('.tab ul.tabs li a').click(function (g) {
			var tab = $(this).closest('.tab'),
				index = $(this).closest('li').index();
			$('.tabArrow').hide();
			$(this).parent().find('.tabArrow').show();
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');

			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

			g.preventDefault();
		} );
	})(jQuery);

	//ranking function
	$('.rankingTab').click(function(){
        localStorage.setItem("ranking", userRanking);
		$("html, body").animate({
			 scrollTop: $('.scroll').offset().top
		}, 1000);
		document.getElementById('targetFrame').contentWindow.myLoop();
	});

});


