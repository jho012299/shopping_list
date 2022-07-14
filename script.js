var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	li.addEventListener("click", function(event) {
		event.target.classList.toggle("done");
		//this.classList.toggle("done");
	})

	var button = document.createElement("button");
	button.innerHTML = "Delete";
	li.append(button);

	button.addEventListener("click", function() {
		li.parentNode.removeChild(li);
	})

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}	
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}	
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// for (var i = 0; i < li.length; i++) {
// 	li[i].addEventListener("click", function() {
// 		this.classList.toggle("done");
// 	})
// }



// ul.onclick = function(event) {
// 	var target = event.target;
// 	target.classList.toggle("done");
// }