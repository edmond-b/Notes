
document.addEventListener('DOMContentLoaded', function(){
  var note = new Note()

  document.getElementById("createnote").onsubmit = function() {
    text = document.getElementById("textBox").value
    note.createNote(text)
    note.abbreviateNote()

    var newnote = note.allAbbreviateNotes[note.allAbbreviateNotes.length - 1]


    var x = document.createElement('LI');
    var textnode = document.createTextNode(`${newnote}`);

    // x.setAttribute("href", `#${newnote}`);
    x.setAttribute("onclick", "myFunction()");
    x.appendChild(textnode);
    document.getElementById("myList").appendChild(x);

    console.log("All notes:")
    console.log(note.allNotes)
    console.log("All abbreviated notes:")
    console.log(note.allAbbreviateNotes)

  }
}, false);

function myFunction() {
  document.getElementById("textBox").style.visibility = "hidden";
  document.getElementById("myList").style.visibility = "hidden";
  document.getElementById("submit").style.visibility = "hidden";

}
