// Rewrite the instructions in your own words
// create a variable for all the acronyms
// make each acronyms generate when given a particular phrase
// all acronyms when generated must be in all caps

// Write the objectives and the tests
// create a list for all the acronyms with a given phrase
// 

// Write the pseudocode
/*
set acronym to prompt text message 


// paste your JS generated by blockly below here
/*
var acronym, result, item;

function textToTitleCase(str) {
  return str.replace(/\S+/g,
      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});
}


acronym = window.prompt('Please enter your phrase');
acronym = textToTitleCase(acronym);
acronym = acronym.split(' ');
result = '';
for (var item_index in acronym) {
  item = acronym[item_index];
  result += String(item.charAt(0));
}
window.alert(result);*/