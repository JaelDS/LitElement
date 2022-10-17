import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class Recipes extends LitElement {

    render() {
        return html `
        <div class="recipes container grey-text text-darken-1">
            <recipe-content></recipe-content>
            <recipe-content></recipe-content>
            <recipe-content></recipe-content>
            <recipe-content></recipe-content>
        </div>
        `;
    }
    createRenderRoot(){
        return this;
    }
}
customElements.define('container-recipes', Recipes);