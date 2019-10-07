import Column from './column.js'

addEventListener('load', () => {
    document.getElementById('page_container').innerHTML = new Column().render()
})