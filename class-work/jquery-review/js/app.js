$(document).ready(function () {
​
	// initial styles
	$('#box-one')
		.css('background', 'red')
		.text('box one')
​
	$('#box-two').css('background', 'blue').text('box two')
​
	// event handlers
	$('#box-one').click(function () {
		$('#box-one').css('height', '500px').css('width', '500px')
		// $(this).css('height', '500px').css('width', '500px')
	})
​
	$('#box-two').click(function () {
		$('#box-two').css('height', '500px').css('width', '500px')
		// $(this).css('height', '500px').css('width', '500px')
	})
​
})