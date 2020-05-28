// Note JS Model

// (function(exports) {
//   function Circle() {
//     this.radius = 10;
//   };
//
//   exports.Circle = Circle;
// })(this);


class Note {

  constructor() {
    this.allNotes = []; 
    this.allAbbreviateNotes = [];
  }

createNote(text){
    return this.allNotes.push(text)

}
abbreviateNote() {
  this.allNotes.forEach(note => { 
    this.allAbbreviateNotes.push(note.substring(0,20) + "...")
  })
  
  }
}