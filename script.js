alert("keyBoard Mac Pro 15' Please, check my work later! thnx in advance")
const textarea = document.createElement('textarea')
textarea.classList.add('textarea')
document.body.append(textarea)

const keyBoard = document.createElement('div')
keyBoard.classList.add('keyboard')
document.body.append(keyBoard)

const keySymbols = [ 
 ["~", "`"], ["!", "1"], ["@", "2"], ["#", "3"], ["$", "4"], ["%", "5"], ["^", "6"], ["&", "7"],
 ["*", "8"], ["(", "9"], [")", "0"], ["_", "-"], ["+", "="], "delete",
"tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", ["{", "["], ["}", "]"], ["|", "\\"],
"caps lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", [":", ";"], ['"', "'"], "return",
"shift", "Z", "X", "C", "V", "B", "N", "M", ["<", ","], [">", "."], ["?", "/"], "shift",
"fn", "control", "option", "command", "space", "command", "option", "left", "up", "down", "rigth"]

const enterSymbols = [ 
  ["~", "`"], ["!", "1"], ["@", "2"], ["#", "3"], ["$", "4"], ["%", "5"], ["^", "6"], ["&", "7"],
  ["*", "8"], ["(", "9"], [")", "0"], ["_", "-"], ["+", "="], "delete", "tab", ["Q", "q"], 
  ["W", "w"], ["E", "e"], ["R", "r"], ["T", "t"], ["Y", "y"], ["U", "u"], ["I", "i"], ["O", "o"], 
  ["P", "p"], ["{", "["], ["}", "]"], ["|", "\\"],"caps lock", ["A", "a"], ["S", "s"], ["D", "d"],
  ["F", "f"], ["G", "g"], ["H", "h"], ["J", "j"], ["K", "k"], ["L", "l"], [":", ";"], ['"', "'"],
  "return", "shift", ["Z", "z"], ["X", "x"], ["C", "c"], ["V", "v"], ["B", "b"], ["N", "n"],
  ["M", "m"], ["<", ","], [">", "."], ["?", "/"], "shift",
  "fn", "control", "option", "command", "space", "command", "option", "left", "up", "down", "rigth"]

for(let i=0; i<keySymbols.length; i++){
  const button = document.createElement('button')
  button.classList.add('button')
  keyBoard.append(button)
    if(typeof(keySymbols[i]) === "string")
    button.innerHTML = keySymbols[i];
    if(Array.isArray(keySymbols[i]))
    button.innerHTML = (`${keySymbols[i][0]}<br>${keySymbols[i][1]}`)
  button.onclick =()=>{
    if(Array.isArray(enterSymbols[i]) && !document.querySelector('.caps_active') && !document.querySelector('.shift_active')){
    textarea.textContent += enterSymbols[i][1]
    }
    if(Array.isArray(enterSymbols[i]) && (document.querySelector('.caps_active') || document.querySelector('.shift_active'))){
      textarea.textContent += enterSymbols[i][0]
      }
    else{
      if(enterSymbols[i] === "space"){
      textarea.innerHTML += ' '
      }
      if(enterSymbols[i] === "tab"){
        textarea.innerHTML += '    '
        }
      if(enterSymbols[i] === "caps lock"){
        button.classList.toggle('caps_active')
        }  
      if(enterSymbols[i] === "delete"){
        textarea.innerHTML = textarea.innerHTML.slice(0, textarea.innerHTML.length-1)
        }  
      if(enterSymbols[i] === "shift"){
        button.classList.toggle('shift_active')
        }  
      if(enterSymbols[i] === "return")
      textarea.innerHTML = `${textarea.innerHTML}\n`
    }
  }
}