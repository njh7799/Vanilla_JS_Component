import uuid4 from './uuid.js'

export default class Card {
    id = uuid4();
    postRender() {
        setTimeout(() => {
            document.getElementById(this.id).addEventListener('click', () => { console.log('clicked!') })
            document.getElementById(this.id).removeAttribute("id")
        })
    }
    render() {
        this.postRender();
        return (
            `
            <div id=${this.id}>HaHA</div>
            `
        )
    }
}