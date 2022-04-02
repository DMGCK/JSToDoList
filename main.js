// let title = {};
let toDoContent = {}; // don't know if should be an object or matrix
											// also don't know if it should be global lol
let titleForm2 = [];
let tempData = [];
let userList = [];

// title handler functions
//removed saving by title for data restructure TODO
function titleChange(event) {  
  let titleForm2 = event.target.title.value;
  
	event.preventDefault();
  console.log(titleForm2);
  
  if (titleForm2) {
    document.getElementById("title").innerText = titleForm2;

    document.getElementById("to-do-title").classList.add('hidden');
    document.getElementById("rename-title").classList.remove('hidden');
  } // toggles the hidden class on the form/rename
}

function renameButton() {
	document.getElementById("to-do-title").classList.remove('hidden');
  document.getElementById("rename-title").classList.add('hidden');

} // This should happen when the user clicks on the name of the list?


// actual To Do content

function appendTaskToList(event) {
	//let storageKey = when this is save/loadable this will be used 
	event.preventDefault();
  console.log("used appendToList");
	//userList array will be used in this func to store each instance of text added
  let userText = event.target.userText.value; // grab the user's text
  if (userText) {
  	userList.push(userText);
  	appendTaskToHtml();
  } // checks if there is content lol
  
  console.log(userText + " added to userList");
  
  	
  
  // clear the form for new user data
	document.getElementById('add-to-do').reset();
  
}

function appendTaskToHtml(indx) { //optional parameters for running inside appendAll ONLY CALL THIS FUNCTION WITH indx FROM APPENDALL
  
  // this is not the index of the last item, it's the actual last item
  const lastItem = userList[userList.length - 1]; 
  let numOfItems = `${userList.length.toString()}` + ': ';
  const tagStart = "<div><span>" + numOfItems + "</span>";
  const tagEnd = "</span></div>";

  if (!indx) {
    document.getElementById('user-content').insertAdjacentHTML('beforeend', tagStart + lastItem + tagEnd );
  }
  else {
    //indx is index of list being looped through
    //similar to statement above
  }

  // fancy formatting for CSS needed here TODO
  // iterative html ID tagging?? TODO
  //https://stackoverflow.com/questions/33299495/how-to-loop-through-id-elements-in-html
  //implement when my head doesn't hurt lol
  // think click on the element, turn it into text area that looks not like butt. Saves it afterwards as well, maybe use a focus element event listener or loss of focus event listener to change the css style.

	// console.log("number of items in list " + numOfItems);
  // console.log(lastItem + " is lastItem");
}


function appendAllTasksToHtml(listName) { 

}







// save / load localstorage functions 
// Runs twice on call?? TODO


function saveItem(key, value) { 
	window.localStorage.setItem(key, JSON.stringify(value));
  console.log("saved to " + key + "?");

  // set key by function / purpose, like title has it's own, 
  //content has it's own key as well.
}

function loadItem(key) {
		let localData = JSON.parse(window.localStorage.getItem(key));

    if(localData) {
      tempData = localData;
      console.log(tempData + " to variable tempData");
    }
    
    else {
    	console.log("nothing to find??");
    }
}

//function removeItem(key) {
// going to need one of these
//}

// possibly huge brain, use titles as the key, and save the list to the title. Possible list of lists to switch between. Don't know what the limitations of that approach are but I like it

// better practice, don't save the entire list maybe use the title as a key, then a matrix
// that shows each peice of information for the to do list??


// key - title of the list // data -- array with either content of each part of the list or the number of items

// key - title // data - array title.x
