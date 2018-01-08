
var config = {
	apiKey: "AIzaSyDvDvc-wymavhb3c8zYQ55lI10i2BRitmw",
	authDomain: "learning-64599.firebaseapp.com",
	databaseURL: "https://learning-64599.firebaseio.com/",
	projectId: "learning-64599",
	storageBucket: "earning-64599.appspot.com",
	messagingSenderId: "336174570643"
};
firebase.initializeApp(config);


//declaration
var database = firebase.database();



//Register user 
function registerUser(username,pass, email,role ) {
  database.ref('users/' +username).set({
    username: username,
    email: email,
	role: role,
	pass : pass,
	verified : 0 
  });
}


//Update verified
function updateVerified() {
  var username = localStorage.getItem("username");
  database.ref("users/"+username+"/verified").set("1");
}



//Get parent task
function getParentTask() {
    var username = localStorage.getItem("username");
	database.ref('/users/'+username+"/parent").once('value').then(function(ss){
		var parentName = ss.val();
		database.ref('/task/'+parentName).once('value').then(function(e){
			var taskList = e.val();
			$.each(taskList, function (index, task) {
			
			var taskHTML=`
					<div class='list'>
						<div class='content'>`+task.description+`</div>
						<div class='point'>RM `+task.reward+`</div>
					</div>
				`;
				$('.taskList').append(taskHTML);

		});
			$('.fade').removeClass('fade-out');
			$('.loader').hide();
		});
		
	});	
	
}



//Update parent info
function updateParent(parentUsername) {
  var username = localStorage.getItem("username");
  swal('Parent info updated','','success').then((result) => {
	window.location = 'child.html';
	  
  });
  updateVerified();
  database.ref("users/"+username+"/parent").set(parentUsername);
}

function checkParent(parentUsername, parentPass){
		database.ref('/users/'+parentUsername).once('value').then(function(ss){
		//Login Success
		
		if(!ss.val())
			swal('Wrong username or password' ,'' ,'error');
		else 
		{
			if (ss.val().pass==parentPass){
				updateParent(parentUsername);
			}
			//Credential wrong
			else{
				swal('Wrong username or password' ,'' ,'error');
			}
		}
		$('.fade').removeClass('fade-out');
		$('.loader').hide();
	})
}

//Update bank account  
function updateBankAcc(bankAcc,username ) {
  database.ref('bankAcc/' +username).set({
    username: username,
    bankAcc: bankAcc,
	amount: 0
  });
}



//Create task function  
function createTaskFunction(description,reward ) {
	var username = localStorage.getItem("username"); 
  database.ref('task/' +username+'/'+description).set({
    username: username,
    description: description,
	reward: reward,
	status : 0
  });
}


//Check task function  
function checkTask(description,reward ) {
	var username = localStorage.getItem("username"); 
	database.ref('/task/'+username+'/'+description).once('value').then(function(ss){
		if(ss.val())
		{
			swal('Task already exist' ,'' ,'error');
		}
		else 
		{
			createTaskFunction(description,reward);
			swal('Task created' ,'' ,'success').then((result) => {
				window.location.reload();
			});
		}
	});
}


//Get task list for parent 
function deleteTask(description) {
	var username = localStorage.getItem("username"); 
	database.ref('/task/'+username+'/'+description).remove();
	swal('Task deleted','','success').then((result) => {
		window.location.reload();
	});
	
	
}

//Get task list for parent 
function getTaskListForParent() {
	var username = localStorage.getItem("username");
	database.ref('/task/'+username).once('value').then(function(ss){
		var taskList = ss.val();
		
		$.each(taskList, function (index, task) {
			
			var taskHTML=`
					<div class='list'>
						<div class='content'>`+task.description+`</div>
						<div class='point'>RM `+task.reward+`</div>
						<div class='action'><a href='#' class='deleteTaskBtn' value='`+task.description+`'> x </a></div>
					</div>
				`;
				$('.taskList').append(taskHTML);

		});
		$('.fade').removeClass('fade-out');
		$('.loader').hide();
	})
}


//Check if username already exists
function checkUser(username,pass,email,role){
	database.ref('/users/'+username).once('value').then(function(ss){
		if(ss.val())
		{
			swal('Username already exist' ,'' ,'error');
		}
		else 
		{
			registerUser(username,pass,email,role);
			swal('Register success' ,'' ,'success').then((result) => {
				window.location.reload();
			});
		}
	});
}


//Topup Function
function topUp(amount,currentValue){
	var newValue = parseInt(amount) + parseInt(currentValue);
	var username = localStorage.getItem("username");
	
	database.ref("bankAcc/"+username+"/amount").set(newValue);
	swal('Top up success' ,'' ,'success').then((result) => {
		window.location.reload();
	});
	
}


//Calculate Topup Function
function topUpCalculate(amount){
	var username = localStorage.getItem("username");
	var currentValue = 0;
	var newValue=0;
	database.ref('/bankAcc/'+username+"/amount").once('value').then(function(ss){
		currentValue = ss.val();
		topUp(amount,currentValue);
	});
	
}

//Display current amount 
function displayCurrentAmount(){
	var username = localStorage.getItem("username");
	database.ref('/bankAcc/'+username).once('value').then(function(ss){
		var currentAmount = ss.val().amount;
		var bankAcc = ss.val().bankAcc;
		$('.currentAmount').html('Current amount (RM)<br><br>' +currentAmount);
		$('.bankAccNo').val(bankAcc);
		$('.loader').hide();
		$('.fade').removeClass('fade-out');
	})
}

//Login
function authenticate(username,pass){
	
	database.ref('/users/'+username).once('value').then(function(ss){
		//Login Success
		
		if(!ss.val())
			swal('Wrong username or password' ,'' ,'error');
		else 
		{
			if (ss.val().pass==pass	){
				var role = ss.val().role;
				var verified= ss.val().verified;
				swal({
				  title: 'Login success !',
				  type: 'success',
				  showCancelButton: false
				}).then((result) => {
				  if (result.value) {
						localStorage.setItem("username", username);
						localStorage.setItem("verified", verified);
						localStorage.setItem("role", role);
						if(role == 'shop')
						{
							if(verified==0)
								window.location = 'account_shop.html';
							else
								window.location = 'shop.html';
						}
						else if(role == 'parent')
						{
							if(verified==0)
								window.location = 'account_parent.html';
							else
								window.location = 'parent.html';
						}
						else if(role == 'child')
						{
							if(verified==0)
								window.location = 'account_child.html';
							else
								window.location = 'child.html';
						}
						else 
							window.location = '404.html';
				  }
				})
			}
			//Credential wrong
			else{
				swal('Wrong username or password' ,'' ,'error');
			}
		}
		$('.loader').hide();
	})
}

