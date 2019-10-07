import Card from './card.js'

export default class Column {
    postRender() {
        setTimeout(() => {

        })
    }
    render() {
        this.postRender();
        return (
            `
            <div class="column">
                ${new Card().render()}
                ${new Card().render()}
                ${new Card().render()}
            </div>
            `
        )
    }
}