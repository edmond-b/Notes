describe('allNotes', function() {
  it('array starts off empty', function(){
    var note = new Note();
    expect(note.allNotes.length).toEqual(0)
  });
});

describe('#createNote', function() {
  it('Adds a note to the allNotes array', function(){
    var note = new Note;
    note.createNote("Test");
    expect(note.allNotes[0]).toEqual("Test");
  });
});

describe('#abbreviateNote', function() {
  it('return the first 20 characters of one input note', function(){
    var note = new Note;
    note.createNote("My name is Andrew and I love Makers Academy, most of the time")
    note.abbreviateNote();

    expect(note.allAbbreviateNotes[0]).toEqual("My name is Andrew an...");
  });

  it('returns the first 20 characters of multiple input notes', function(){
    var note = new Note;
    note.createNote("My name is Andrew and I love Makers Academy, most of the time")
    note.createNote("My name is Tanil1 and I love Makers Academy, most of the time")
    note.abbreviateNote();

    expect(note.allAbbreviateNotes[0]).toEqual("My name is Andrew an...")
    expect(note.allAbbreviateNotes[1]).toEqual("My name is Tanil1 an...")
  });

});





// function testAllNotesArray() {
//   var note = new Note();
//   assert.toEq(note.allNotes.length,(0));
// };
//
// testAllNotesArray();

// function testCreateNoteAddsNote() {
//   var note = new Note;
//   note.createNote("Test");
//   assert.toEq(note.allNotes[0], "Test");
// };
//
// testCreateNoteAddsNote();

// function testAbbreviatedNotes() {
//   var note = new Note;
//   note.createNote("My name is Andrew and I love Makers Academy, most of the time")
//   note.abbreviateNote();
//   assert.toEq(note.allAbbreviateNotes[0], "My name is Andrew an...")
// };
//
// testAbbreviatedNotes();

// function testAbbreviatedNotes2() {
//   var note = new Note;
//   note.createNote("My name is Andrew and I love Makers Academy, most of the time")
//   note.createNote("My name is Tanil1 and I love Makers Academy, most of the time")
//   note.abbreviateNote();
//   assert.toEq(note.allAbbreviateNotes[0], "My name is Andrew an...")
//   console.log('the next one')
//   assert.toEq(note.allAbbreviateNotes[1], "My name is Tanil1 an...")
// };
//
// testAbbreviatedNotes2();
