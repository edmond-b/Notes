# Notes

## User Stories

```
As a programmer
So I can find the one I want
I can see a list of my notes, where each note is abbreviated to the first 20 characters
```

```
As a programmer
So I can record something I need to remember
I can create a new note
```

```
As a programmer
So I can see all the information in the note
I can see the full text of an individual note on its own page
```

## Object relations
| Object | Message |
| ------ | ------------ |
| Note   | this.allnotes|
|        | list[note1,note2,note3]|
| arg(str) | createNote(arg)|        
| Note   | abbreviateNote()|
| Note   | displayNote()|

## DOM
![domain_model](images/domain_model.png)