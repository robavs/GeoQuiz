let myName=document.getElementById('name'),
    ime='Aleksa Robavs',
    isFullWord=false,
    indexName=-1;/*code does not work if semicolon is missed*/


let menuBtn = document.querySelector('.menu-btn'),
    menu = document.getElementById('container'),
    children=document.querySelectorAll('.child');
    menuOpen = false,
    bg_index=1;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menu.style.display='block'
    menuBtn.classList.add('open')
    menuOpen = true
  } else {
    menu.style.display=''
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

function writeName(){
    if(!isFullWord){
        myName.innerText = ime.substring(0, indexName++)
        
        if(myName.innerText == ime){
            isFullWord = true
        }
    }
    else {
        myName.innerText = ime.substring(0, indexName--)
        if(myName.innerText == "")
            isFullWord = false
    }
}
setInterval(writeName, 200);


(function change_bg(){
    setInterval(() => {
        if(bg_index==1) { 
            document.body.style.background='url("rest files/images/background2.jpg")'
            children.forEach(el=>el.style.background='darkred')
            bg_index=2
        }
        else if(bg_index==2) {
            document.body.style.background='url("rest files/images/background3.jpg")'
            children.forEach(el=>el.style.background='rgb(1,83,131)')
            bg_index=3
        }
        else {
            document.body.style.background='url("rest files/images/background1.jpg")'
            children.forEach(el=>el.style.background='rgb(1,83,131)')
            bg_index=1
        }
        document.body.style.backgroundRepeat='no-repeat'
        document.body.style.backgroundSize='cover'
        document.body.style.backgroundPosition='center'
    }, 5000);;
})()

function startGame(index){
    if(index==1){
        window.open('rest files/flags.html','_self')
    }
    else if(index==2){
        window.open('rest files/countries.html','_self')
    }
    else{
        window.open('rest files/learn.html','_self')
    }
}
