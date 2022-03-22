/*

*/

let available_commands = {
  ifParts:{
    if:'if(',
    conditionals:{
      eq:'==',
      gt:'>',
      lt:'<',
      gteq:'>=',
      lteq:'<=',
    },
    gates:{
      and:'&&',
      or:'||',
      not:'!'
    },
    run:'){',
    endif:'}'
  },
  varParts:{
    set:'var',
    to:'='
  },
  forParts:{
    loop:'for(',
    from:'var i =',
    to:';i <',
    by:';i+=',
    run:'){',
    endloop:'}'
  }
}

function createCode(input){
  try {
  if(!input){
    input = 'console.log(\'No input\')';
  }
  var commands = input.trim();
  commands = commands.split('\n');
  var words = [];
  for(var i = 0;i < commands.length;i++){
    words.push(commands[i].split(' '));
  }
  var fullCode = [];
  for(var command = 0;command < words.length;command++){
    for(var word = 0;word < words[command].length;word++){
      var q = words[command][word];
      for(var parts_dict in available_commands){
        if(q in parts_dict){
          fullCode.push(parts_dict[q]);
          continue;
        }
        for(var part in parts_dict){
          if(part.constructor == Object && q in part){
            fullCode.push(part[q]);
            continue;
          } else {
            fullCode.push(q);
            continue;
          }
        }
      }
    }
    fullCode.push('\n');
  }
  return fullCode.join(' ');
  } catch(e){
      // true
  console.log("Message: " + e.message)               // "null has no properties"
  console.log("Name: " + e.name)                  // "TypeError"
  console.log("Filename: " + e.fileName)              // "Scratchpad/1"
  console.log("Line number: " + e.lineNumber)            // 2
  console.log("Column number: " + e.columnNumber)          // 2
  console.log("Stack: " + e.stack)
  }
}

var output = document.createElement('p');
document.body.appendChild(output);
output.innerHTML = createCode('if 7 eq 8 :\nset name to 3\nendif');
