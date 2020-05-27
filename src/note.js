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
  }

createNote(text){
    return this.allNotes.push(text)

}
abbreviateNote() {
    return this.allNotes[0].substring(0,20) + "..."
}
}