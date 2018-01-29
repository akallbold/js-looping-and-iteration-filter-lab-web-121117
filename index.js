// Code your solution in this file
function findMatching(array, name){
  let new_array = [];
  for (const i of array){
    if (i.toLowerCase() === name.toLowerCase()) {
      new_array.push(i);
    }
  }
  return new_array;
}

function fuzzyMatch(array, name){
  let new_array = [];
  for (const i of array){
    if ((i[0].toLowerCase() === name[0].toLowerCase()) && (i[1].toLowerCase() === name[1].toLowerCase())) {
      new_array.push(i);
    }
  }
  return new_array;
}

function matchName(array,name){
  let new_array = [];
  for (const i of array){
    if (i.name === name) {
      new_array.push(i);
    }
  }
  return new_array;
}
