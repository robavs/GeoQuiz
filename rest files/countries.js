let back_btn=document.getElementById('back')
let continents = document.querySelectorAll('.continent')

back_btn.onclick=function(){
    window.history.back()
}
continents.forEach(el => {
    el.addEventListener('click',e => {
        window.open(`COUNTRIES/${e.target.id}.html`,'_self')
    })
})