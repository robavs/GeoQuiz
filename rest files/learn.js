let back_btn = document.getElementById('back')

back_btn.onclick=function(){
    window.history.back()
}

const CONTINENTS = document.querySelectorAll('.continent')
CONTINENTS.forEach(continent=>{
    continent.addEventListener('click',e=>{
        window.open(`CONTINENTS/${e.target.id}.html`,'_self')
    }) 
})
