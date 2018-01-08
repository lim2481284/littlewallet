$(document).ready(function(){
	$('#bodyContent').removeClass('fade-out');
	$('.loader').fadeOut(300);
/*
  //Check user point and update
    $.get(fitnergistAPI.url+'api/users/profile/' +fitnergistAPI.userID , function(data, status){
        var point = data.body[0].point;
        Cookies.set('point', point, { expires: 999 });

        //Change score
        $('.bannerScore').html($.cookie.get("point"));

    });




  var json = [];



  // Update fitcamp
  var fitcampIDList =[];
  function getFitcamp(start,target){
    if(start != target){
      $.get(fitnergistAPI.url+'api/fitcamp/' +fitcampIDList[start] , function(data, status){

          var fitcamp = data.body;
          var fitcampDate = fitcamp.end_date;
          var newDate = fitcampDate.split(" ");
          newDate = newDate[0].split("/");

          var months = [ "January", "February", "March", "April", "May", "June",
               "July", "August", "September", "October", "November", "December" ];
          var day = newDate[0];
          var month =months[newDate[1]-1];
          var year = newDate[2];
          json.push({
            title: 'I joined fitcamp',
            description: fitcampDate + ", I have join "+fitcamp.title+" fitcamp and earn "+fitcamp.point +" point!",
            startDate: (new Date(''+month+' '+day+', '+year+'' )),
            endDate: null
          });
          getFitcamp(start+1, target);
      });

    }
    else
    {
      $("#timeline").timeCube({
        data: json,
        granularity: "year",
        startDate: new Date('August 31, 2017'),
        endDate: new Date('January 30, 2018'),
        nextButton: $("#next-link"),
        previousButton: $("#prev-link"),
        showDate: false
      });

    }
  }
  
  
  var fitcampLength = 0;
  $.when(
    $.get(fitnergistAPI.url+'api/fitcamp/register/userID/' + fitnergistAPI.userID , function(data, status){
        var fitcamp = data.body;
        fitcampLength = fitcamp.length;
        for(var i=0; i<fitcamp.length;i++)
        {
            fitcampIDList.push(fitcamp[i].fitcampID);
        }
    })
  ).then(function() {
    getFitcamp(0,fitcampLength);
  });

*/

  var json = [];
  	json.push({
	title: 'I completed a task!',
	description: "1/1/2018 I have completed a task named 'Wash car' and earn RM 2 !",
	startDate: (new Date('January 1,2018' )),
	endDate: null
	});	
	json.push({
	title: 'I completed a task!',
	description: "8/1/2018 I have completed a task named 'Clean toilet' and earn RM 5 !",
	startDate: (new Date('January 8,2018' )),
	endDate: null
	});

	json.push({
	title: 'I achieved my goal!',
	description: "15/1/2018 I have achieved my first goal which is buy a computer with amount of RM3000!",
	startDate: (new Date('January 15,2018' )),
	endDate: null
	});		
  $("#timeline").timeCube({
	data: json,
	granularity: "year",
	startDate: new Date('August 31, 2017'),
	endDate: new Date('January 30, 2018'),
	nextButton: $("#next-link"),
	previousButton: $("#prev-link"),
	showDate: false
  });

	// TImeline

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();




	//Menu icon function
	if ( $(window).width() > 739) {
		$('.menuIcon').click(function(){
			$('.subMenuBox').toggle();
			$(this).toggleClass('open');
		});
		$('.icon').mouseover(function(){
			$(this).parent().parent().find('.menuLabel').show();
		});
		$('.icon').mouseout(function(){
			$(this).parent().parent().find('.menuLabel').hide();
		});

		$('.menuIcon').mouseout(function(){
			$('.menuLabel').hide();
		});

	}
	else
	{
		$('.menuIcon').click(function(){
			$('.subMenuBox').toggle();
			$(this).toggleClass('open');
		});
	}


	//Navigation
	$('.logoutIcon').click(function(){
		location.href='login.html';
	});


	$('.achievementIcon').click(function(){
		location.href='task.html';
	});

	$('.profileIcon').click(function(){
		location.href='profile.html';
	});
	$('.homeIcon').click(function(){
		location.href='home.html';
	});



});
