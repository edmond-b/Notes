// Note Spec JS
// Reference test
// Writing out first tests

// function testCircleRadiusDefaultsTo10() {
//   var circle = new Circle();
//   assert.isTrue(circle.radius === 10);
// };

// function testtest() {
//   assert.toBe(10, 11);
// };
//
//
// testCircleRadiusDefaultsTo10();
// testtest();

function testAllNotesArray() {
  var note = new Note();
  assert.toEq(note.allNotes.length,(0));
}; 

testAllNotesArray();

function testCreateNoteAddsNote() {
  var note = new Note;
  note.createNote("Test");
  assert.toEq(note.allNotes[0], "Test");
};

testCreateNoteAddsNote();


function testAbbreviatedNotes() {
  var note = new Note;
  note.createNote("My name is Andrew and I love Makers Academy, most of the time")
  assert.toEq(note.abbreviateNote(), "My name is Andrew an...")
};

testAbbreviatedNotes();