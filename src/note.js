class Note {

  constructor() {
    this.allNotes = [];
    this.allAbbreviateNotes = [];
  }

createNote(text){
    return this.allNotes.push(text)

}
abbreviateNote() {
  this.allAbbreviateNotes = [];

  this.allNotes.forEach(note => {
    this.allAbbreviateNotes.push(note.substring(0,20) + "...")
  })
 }
}
