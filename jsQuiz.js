// Create a tree function that should build a pine tree out of a character in the browser console. It accepts a single object as an argument. The object should have two key/value pairs.
// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console.
// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.


function inputValue() {
  var treeChar= document.getElementById("textInput").value;
  var treeHeight= document.getElementById("numInput").value;

  var treeInput = {
  height: treeHeight,
  character: treeChar
};
tree(treeInput);
}


function tree(treeInput) {
var outPut = document.getElementById("treeContainer")


  for (var i = 1; i <= treeInput.height; i++) {
  var spaces = treeInput.height - i; 
  var characterNum = (i * 2)-1;

  outPut.innerHTML += "<pre>"  + " ".repeat(spaces)+ treeInput.character.repeat(characterNum)  + "</pre>";
  
};

}
function clear() {
  document.getElementById("treeContainer").innerHTML="";
}

document.getElementById("btn2").addEventListener("click",clear)

document.getElementById("btn").addEventListener("click",inputValue)