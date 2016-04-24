$(document).ready(function () {

	var total = 0;

	$('#clickme').click(function()	{
		total = total + 1;
		$('#click-num').html(total)

	if (total > 80) {

			$('body').css('background-color' , 'red');
		
		}	else if (total < 80)	{

			$('body').css('background-color' , 'blue');
		
		}	else {
			
			$('body').css('background-color' , 'blue')
		}
	

	})

})
