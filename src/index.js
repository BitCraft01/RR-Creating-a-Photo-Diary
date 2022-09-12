import { koalas } from './koalas.js'
import { renderActiveKoala } from './renderActiveKoala'
import { renderKoalaList } from './renderKoalaList'
import { activeKoala } from './activeKoala'

// Called once when the page loads, and again every time a koala is selected
let render = () => {
    let oldPage=  document.querySelector('.koala-container')
    let newPage;
    if(activeKoala){
        newPage = renderActiveKoala(activeKoala)
    } else {
        newPage = renderKoalaList(koalas)
    }
    newPage.classList.add('koala-container')
    oldPage.replaceWith(newPage)
}

// Render the page after all functions are defined
render()