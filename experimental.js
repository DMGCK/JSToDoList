// use event listeners to save the to do list as the user types
let formId = 'test-text';
let testObject = document.getElementById(formId);

function keyLogger(e) {
	const testLength = e.target.value.length;
	console.log(e.target.value[testLength - 1]);
}

testObject.addEventListener('keyup', keyLogger);


	// write a function that gets the title and other data on page load / refresh
  // resource to start that https://stackoverflow.com/questions/5004978/check-if-page-gets-reloaded-or-refreshed-in-javascript
  // all this needs to be is TO CALL THE DAMN FUNCTION AS THE PAGE LOADS