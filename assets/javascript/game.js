window.onload = function(){
	userPick.init();
	userPick.totalScoreBox();
	$('#crystalOne').on('click', userPick.crystalOne);
	$('#crystalTwo').on('click', userPick.crystalTwo);
	$('#crystalThree').on('click', userPick.crystalThree);
	$('#crystalFour').on('click', userPick.crystalFour);
	};

	wins = 0;
	losses = 0;

	var userPick = {
	box1:0,
	box2:0,
	box3:0,
	box4:0,
	
	init: function(){
	crystalMin=1;
	crystalMax=12;
	box1 = Math.floor(Math.random() * (crystalMax - crystalMin+1)) + crystalMin;
	box2 = Math.floor(Math.random() * (crystalMax - crystalMin+1)) + crystalMin;
	box3 = Math.floor(Math.random() * (crystalMax - crystalMin+1)) + crystalMin;
	box4 = Math.floor(Math.random() * (crystalMax - crystalMin+1)) + crystalMin;
	totalScore = 0;
	initRandomNum = Math.floor(Math.random() * (120 - 19+1)) + 19;		
	$('#randomNumberBox').html(initRandomNum);
	$('#totalScoreBox').html(totalScore);
	$('#scoreBoxWins').html(wins);
	$('#scoreBoxLosses').html(losses);

	},

totalScoreBox: function(){
	$('#totalScoreBox').html(totalScore);
	if (totalScore==initRandomNum) {
		wins++;
		userPick.init();
	} else if (totalScore>initRandomNum){
		losses++;
		userPick.init();
	}

},

crystalOne: function(){
	totalScore = totalScore + box1;
	userPick.totalScoreBox();
},

crystalTwo: function(){
	totalScore = totalScore + box2;
	userPick.totalScoreBox();
},

crystalThree: function(){
	totalScore = totalScore + box3;
	userPick.totalScoreBox();
},

crystalFour: function(){
	totalScore = totalScore + box4;
	userPick.totalScoreBox();
}
};