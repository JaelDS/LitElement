import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class Recipe extends LitElement {

    static properties={
            dish: { type: String },
            ingredients: {type:String},
    }

    constructor(){
        super();
        this.dish="Edame Noodles";
        this.ingredients="Edame Beans, Noodels, Garlic oil"
    }

    render() {
        return html `
        <div id="containerRecipe" class="card-panel recipe white row">
            <img src="/img/dish.png" alt="recipe thumb">
            <div class="recipe-details">
                <div class="recipe-title">${this.dish}</div>
                <div class="recipe-ingredients">${this.ingredients}</div>
            </div>
            <div class="recipe-delete">
                <i class="material-icons" id="_deleted">delete_outline</i>
            </div>
        </div>
        `;
    }
    createRenderRoot(){
        return this;
    }
}
customElements.define('recipe-content', Recipe);