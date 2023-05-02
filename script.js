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
"fn", "control", "option", "command", "space", "command", "option", "left", "up", "down", "right"]

const enterSymbols = [ 
  ["~", "`"], ["!", "1"], ["@", "2"], ["#", "3"], ["$", "4"], ["%", "5"], ["^", "6"], ["&", "7"],
  ["*", "8"], ["(", "9"], [")", "0"], ["_", "-"], ["+", "="], "Backspace", "Tab", ["Q", "q"], 
  ["W", "w"], ["E", "e"], ["R", "r"], ["T", "t"], ["Y", "y"], ["U", "u"], ["I", "i"], ["O", "o"], 
  ["P", "p"], ["{", "["], ["}", "]"], ["|", "\\"], "CapsLock", ["A", "a"], ["S", "s"], ["D", "d"],
  ["F", "f"], ["G", "g"], ["H", "h"], ["J", "j"], ["K", "k"], ["L", "l"], [":", ";"], ['"', "'"],
  "Enter", "Shift", ["Z", "z"], ["X", "x"], ["C", "c"], ["V", "v"], ["B", "b"], ["N", "n"],
  ["M", "m"], ["<", ","], [">", "."], ["?", "/"], "Shift",
  "fn", "Control", "Alt", "Meta", " ", "Meta", "Alt", "ArrowLeft", "ArrowUp", "ArrowDown", "ArrowRight"]

for(let i=0; i<keySymbols.length; i++){
  const button = document.createElement('button')
  button.classList.add('button')
  keyBoard.append(button)
    if(typeof(keySymbols[i]) === "string")
    button.innerHTML = keySymbols[i];
    if(Array.isArray(keySymbols[i]))
    button.innerHTML = (`${keySymbols[i][0]}<br>${keySymbols[i][1]}`)

    button.addEventListener('click', (event)=>{
      this.button = button;
      if(Array.isArray(enterSymbols[i]) && !document.querySelector('.caps_active') && !document.querySelector('.shift_active')){
      textarea.value += enterSymbols[i][1]
      this.button.classList.add('press_button')
      setTimeout(() => {
        button.classList.remove('press_button')
      }, 200);
      }
      if(Array.isArray(enterSymbols[i]) && document.querySelector('.shift_active')){
        textarea.value += enterSymbols[i][0]
        this.button.classList.add('press_button')
        setTimeout(() => {
          button.classList.remove('press_button')
        }, 200);
        }
        if(Array.isArray(enterSymbols[i]) && (document.querySelector('.caps_active')) && !document.querySelector('.shift_active')){
          if(enterSymbols[i][1] === "1"|| enterSymbols[i][1] === "2"|| enterSymbols[i][1] === "3"||
             enterSymbols[i][1] === "4"|| enterSymbols[i][1] === "5"|| enterSymbols[i][1] === "6"||
             enterSymbols[i][1] === "6"|| enterSymbols[i][1] === "7"|| enterSymbols[i][1] === "8"||
             enterSymbols[i][1] === "9"|| enterSymbols[i][1] === "0"|| enterSymbols[i][1] === "`"||
             enterSymbols[i][1] === "-"|| enterSymbols[i][1] === "="|| enterSymbols[i][1] === "["||
             enterSymbols[i][1] === "]"|| enterSymbols[i][1] === "\\" || enterSymbols[i][1] === ";"||
             enterSymbols[i][1] === "'"|| enterSymbols[i][1] === ","|| enterSymbols[i][1] === "."|| enterSymbols[i][1] === "/"
             ){
            textarea.value += enterSymbols[i][1]
            this.button.classList.add('press_button')
            setTimeout(() => {
              button.classList.remove('press_button')
            }, 200);
          }
          else{
          textarea.value += enterSymbols[i][0]
          this.button.classList.add('press_button')
          setTimeout(() => {
            button.classList.remove('press_button')
          }, 200);
          }
         }
       else{
        if(enterSymbols[i] === " "){
        textarea.value += ' '
        this.button.classList.add('press_button')
        setTimeout(() => {
          button.classList.remove('press_button')
        }, 200);
        }
        if(enterSymbols[i] === "Tab"){
          textarea.value += '    '
          this.button.classList.add('press_button')
          setTimeout(() => {
            button.classList.remove('press_button')
          }, 200);
          }
        if(enterSymbols[i] === "CapsLock"){
          button.classList.toggle('caps_active')
          }  
        if(enterSymbols[i] === "Backspace"){
          textarea.value = textarea.value.slice(0, textarea.value.length-1)
          this.button.classList.add('press_button')
          setTimeout(() => {
            button.classList.remove('press_button')
          }, 200);
          }  
        if(enterSymbols[i] === "Shift"){
          button.classList.toggle('shift_active')
          }  
        if(enterSymbols[i] === "Enter"){
        textarea.value = `${textarea.value}\n`
        this.button.classList.add('press_button')
        setTimeout(() => {
          button.classList.remove('press_button')
        }, 200);
        }
        if(enterSymbols[i] === "ArrowLeft"||enterSymbols[i] === "ArrowUp"|| enterSymbols[i] === "ArrowDown"
        ||enterSymbols[i] === "ArrowRight"|| enterSymbols[i] === "Meta"||enterSymbols[i] === "Alt"
        ||enterSymbols[i] === "Control" ){
          this.button.classList.add('press_button')
          setTimeout(() => {
            button.classList.remove('press_button')
          }, 200);
        }
      }
    })

    textarea.addEventListener('keydown', (event)=>{
      this.button = button;
      if( event.key === enterSymbols[i][0] && Array.isArray(enterSymbols[i])
      ||event.key === enterSymbols[i][1]  && Array.isArray(enterSymbols[i])
      ||(event.key === enterSymbols[i] && !Array.isArray(enterSymbols[i]))
       ){
        this.button.classList.add('press_button')
        setTimeout(() => {
          button.classList.remove('press_button')
        }, 200);
      }
    })
}

textarea.addEventListener('keydown', (event)=>{
  console.log(event.key)
})