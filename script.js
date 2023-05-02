alert("keyBoard MacBook Pro 15' 2016-2019. Please, check my work later! thnx in advance")
alert('Link for keyboard pict: "https://aliexpress.ru/item/1005002840951272.html?sku_id=12000022421508713&feed_id=20&_randl_currency=RUB&_randl_shipto=RU&sellermenu_hide=true&src=googleweb&albch=dspl&aff_short_key=brxT3bLh&cn=%7Bcampaignid%7D&isdl=y&aff_platform=jvru&utm_medium=cpc&utm_source=google&utm_campaign=%7Bcampaignid%7D&feed_id=20&_randl_currency=RUB&_randl_shipto=RU&sellermenu_hide=true&src=googleweb&albch=dspl&aff_short_key=brxT3bLh&isdl=y&aff_platform=jvru&utm_medium=cpc&utm_source=google&utm_campaign=JVRU_ALI_GOOGLE_WEB_UA_CROSS_CIS(BY)_PERFOMAX&gclid=Cj0KCQjw6cKiBhD5ARIsAKXUdyYS4Sj209xe0mGLQlNGlvaaFaTyiFfVacPoMDp4_nHgdB4GCVvoTeMaAnsSEALw_wcB"')

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

    button.addEventListener('click', ()=>{
      this.button = button;
      if(Array.isArray(enterSymbols[i]) && !document.querySelector('.caps_active') && !document.querySelector('.shift_active')){
      textarea.value += enterSymbols[i][1]
      }
      if(Array.isArray(enterSymbols[i]) && (document.querySelector('.caps_active') || document.querySelector('.shift_active'))){
        textarea.value += enterSymbols[i][0]
        }
      else{
        if(enterSymbols[i] === "space"){
        textarea.value += ' '
        }
        if(enterSymbols[i] === "tab"){
          textarea.value += '    '
          }
        if(enterSymbols[i] === "caps lock"){
          button.classList.toggle('caps_active')
          }  
        if(enterSymbols[i] === "delete"){
          textarea.value = textarea.value.slice(0, textarea.value.length-1)
          console.log(this.button)
          }  
        if(enterSymbols[i] === "shift"){
          button.classList.toggle('shift_active')
          }  
        if(enterSymbols[i] === "return"){
        textarea.value = `${textarea.value}\n`
        }
        if(enterSymbols[i] === "left"){
        }
      }
    })

    textarea.addEventListener('keydown', (event)=>{
      this.button = button;
      // if(Array.isArray(keySymbols[i])){
      if((event.key.toUpperCase() === keySymbols[i][0]
      ||event.key.toUpperCase() === keySymbols[i][1]
      ||event.key.toUpperCase() === keySymbols[i]
      )){
        this.button.classList.toggle('press_button')
      }
    // }
    })
}

// textarea.addEventListener('keydown', (event)=>{

//   console.log(event.key)
// })