/*
  The Goal:
  Build a To Do list application that allows you
  to add a new entry, edit an existing entry, and
  remove an existing entry.
 */

var container = document.querySelector('#container');

// Step 1 - Select and store the tbody HTML Element.
// INSIGHT: We'll be storing the item entires in the
// tbody. Storing this HTMLElement will give us better
// access to add new items.

var tbody = document.querySelector('#toDoItems');

// Step 2 - Select and store the item template HTML Element.
// INSIGHT: HTML templates are handy for keeping your
// HTML out of your JavaScript. This makes portability easier.
var itemTemplate = document.querySelector('#itemTemplate');

// Step 3 - Select and store the following HTML Elements:
// INSIGHT: This form will give the user the ability to
// provide information about a new to do item.
// Step 3a - The Item Name field
var itemName = document.querySelector('#itemName');

// Step 3b - The Due Date field
var dueDate = document.querySelector('#dueDate');

// Step 3c - The 'Create New Item' button for adding a new item
// INSIGHT: We'll listen to the click event on this
// button. That should tell us the user is ready to
// add the information to a new item.

var addNewItem = document.querySelector('#addNewItem');

// Step 4 - Add a click event listener to the HTML Element
// you stored in Step 3c (should've been the 'Create New Item')
// button.
addNewItem.addEventListener("click", function() {
  // Step 4a - Check if item name is blank
  	console.log("create item clicked");

	if(itemName.nodeValue == '' || itemName.nodeValue == null) {
    // Step 4b - Alert the user they need to enter a name
	    console.log("item name evaluated");
	    alert("Please enter an item name");   
	   
	    // Step 4c - Return false to exit the event listener
	    return false;	
	}


  // Step 4d - Uncomment the next line to store the template content:
	let content = itemTemplate.content;

  // Step 4e - Uncomment the next line to import the template content
  // into a new node:
	let newItemRow = document.importNode(content, true);

  // Step 4f - Using DOM walking, access the item entry cell
  // and store the current item name value
	var newItemForm = document.querySelector('#newItemForm');

	var entryCellValue = "first name box";
	console.log(entryCellValue);

	entryCellValue = newItemForm.childNodes[2].nodeValue;
	console.log(entryCellValue); 
	//var entryCellValue = entryCell.value;
  // Step 4f - Using DOM walking, access the item due date cell
  // and store the current due date value

	var dueDateCellValue = newItemForm.childNodes[3].nodeValue;
	//var dueDateCellValue = dueDateCell.value;

  // Step 4g - Using DOM walking, access the item delete button
  // and make the onclick property equal to a function definition
  // named removeItem

	var itemDeleteButton = itemTemplate.childNodes[11].onclick = removeItem;
	//var itemDeleteButton = document.body.childNodes[11].setAttribute('onclick', removeItem());

  // Step 4h- Using DOM walking, access the item edit button
  // and make the onclick property equal to a function definition
  // named editItem

  //var itemDeleteButton = document.body.childNodes[6].setAttribute('onclick', editItem());
	var itemEditButton = itemTemplate.childNodes[6].onclick = editItem;

  // Step 4i - Reset the item name field value to nothing
	itemName.reset();

  // Step 4j - Reset the due date field value to nothing
	dueDate.reset();

  // Step 4k - Prepend the new item row to the to do items list
  // INSIGHT: We're prepending as we want new items to go to the
  // top. If you want them to be in reverse, then you will need
  // to append them instead.
	tbody.prepend(newItemRow);
});		

// Step 5 - Create a new function called 'removeItem'. You will need
// to capture the event in the parameter.
function removeItem() {
  // Step 5a - Access the closest parent tr HTML element
  // and remove it
  // INSIGHT: .closest() is a handy method that will move up the DOM
  // tree and attempt to find the closest ancestor that matches the
  // passed selector.

  console.log('remove Item');
	var closeTR = content.closest('tr');
	content.remove(closeTR);
};



// Step 6 - Create a new function called 'editItem'. You will need
// to capture the event in the parameter.
function editItem() {
  // Step 6a - Using DOM walking:
  // First find the closest tr tag.
  // Next, find an item entry that is a child of the tr tag.
  // INSIGHT: DOM walking is the act of moving up and down through
  // ancestors and children of the DOM. We can use methods like
  // .closest() and .querySelector() to do this efficiently.
  // Store the result in a variable
	var editTr = document.template.closest(tr);

  // Step 6b - Using the .setAttribute() method, set the attribute
  // 'contenteditable' to true
  // INSIGHT: Content Editable is an attribute introduced in HTML 5
  // that allows regular non-field based HTML elements to have their
  // text edited inline. This is a convenient feature that is utilized
  // by many online WYSIWYG editors like TinyMCE and CKEditor.
	editTr.setAttribute('contenteditable', true);

  // Step 6c - Trigger focus on the element
	editTr.focus();

  // Step 6d - Create an eventlistener on the blur event
	editTr.addEventListener('blur', function() {
    // Step 6e - Remove the attribute 'contenteditable'
    // INSIGHT: .addAttribute() and .removeAttribute() add
    // and remove attributes applied to an HTML Element.
	    editTr.removeAttribute('contenteditable')
		});
};



/*
  Step 7 - TAKE IT FURTHER
 */
// Step 7a - Using CSS you learned in your first semester
// style the To Do list to make it nicer than the default
// Bootstrap stylings.

// Step 7b- Hide the 'Create New Item' form.

// Step 7c - Add a button that toggle the 'Create New Item's'
// form visibility.
var toggleButton = document.createElement('button');
toggleButton.innerHTML = "Toggle Form";

var container = document.getElementsByClassName("container");
container.appendChild(toggleButton);

toggleButton.addEventListener("click", function() {

});

// Step 7d - Validate the date and alert the user if it is empty.
function validateDate() {
	validPattern = /^\d{2}\/\d{2}\/\d{4}$/;
	if(date == '' || date.value.match(validPattern)) {
		alert("The date is empty. Please enter one.");
	};
};
// Step 7e - Create a way for the user to edit the date:
// INSIGHT: This will take some thought but will demonstrate
// your understanding of JavaScript.

// BONUS: Use prototyping, objects, storage solutions, frameworks,
// and/or date plugins to demonstrate your knowledge and outside
// learning.