'use strict';



function initialize () {
	var notes = window.localStorage.notes;
	if (!notes) {
		notes = 'Let me remember...';
	}
	window.document.querySelector('textarea').value = notes;
}



function saveNotes () {
	var notes = window.document.querySelector('textarea').value;
	window.localStorage.setItem('notes',notes);
}



window.onload = initialize;