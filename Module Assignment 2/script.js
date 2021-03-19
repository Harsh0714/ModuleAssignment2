function goalList() {
    var item = document.getElementById('new-task').value
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    var completed_button = document.createElement('input');
    completed_button.type = "button";
    completed_button.value = "Complete";
    completed_button.onclick = function() { // Added the onclick function
      clickComplete(this);
    };
    newItem.appendChild(completed_button);
    document.getElementById("myList").appendChild(newItem);
  }
  
  // Added this function
  function clickComplete(item) {
    document.getElementById("completed-tasks").appendChild(item.parentNode);
    item.remove(); // Removes the "completed" button
  }

