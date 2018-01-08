


$(document).ready(function(){
	$('.childBtn').on('click',function(){
		
		swal('Login success','','success').then(() => {
			location.href="home.html";
		});;
		
	});


	//Fade in body content
	$(function() {
		$('#bodyContent').removeClass('fade-out');

		// Turn off loader
		$('.loader').hide();
	});


});



	//Start button animation
	$(".startBtn").click(function() {
		$(".dot").animate({height: "79vh"},1000);
		$('html,body').animate({
			scrollTop: $(".navigate").offset().top},
		1000);
	});


	//Toggle animation
	$('.formToggleBtn').click(function() {
	  $('.formToggle').animate({
		height: "toggle",
		opacity: "toggle"
	  }, "slow");
	});


	//Background cover animation
	$('.cover').mousemove(function(e){
		var amountMovedX = (e.pageX * -1 / 6);
		var amountMovedY = (e.pageY * -1 / 6);
		$(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
	});


//Check password and confirm password
function check()
{
	var pass1 = document.getElementById('pass');
	var pass2 = document.getElementById('confirmpass');
	if(pass1.value != pass2.value)
	{
		alert("Password Not Match");
		return false;
	}
}
function checkPass()
{
	var pass1 = document.getElementById('pass');
	var pass2 = document.getElementById('confirmpass');
	var message = document.getElementById('confirmMessage');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
	if(pass2.value){
		if(pass1.value == pass2.value){
			pass2.style.backgroundColor = goodColor;
			message.style.color = goodColor;

		}else{
			pass2.style.backgroundColor = badColor;
			message.style.color = badColor;

		}
	}
}
