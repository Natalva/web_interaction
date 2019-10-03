// var cssRotate = "0deg";
// var number =1;
// var array = ["blue", "green", "red"]
// var lies = false;

// function doThis(){

// 	number+=5;
// }

// doThis()
// console.log(number)



// raotate my diamond

$ (document).ready(function){
	for(var i=0; 1<12;i++){
if(i==0){
	$(".time").append("li class='digits'><span>12</span")
      }
	}
}
var rotate = true;
$('#diamond').click(function(){

	if (rotate===true){
		$('#diamond').css('transform', 'rotate(0deg')
		rotate=false;
	}

	else{
		$('#diamond').css('transform', 'rotate(45deg')
		rotate=true;
	}

	console.log(rotate)
})




	setInterval(function(){

	var randomNumber = Math.random( )* 100 + "px";
	$('#square').css ('margin-left, randomNumber')
	},1000)
