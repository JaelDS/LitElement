import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class Form extends LitElement {

    render() {
        return html `
        <div id="side-form" class="sidenav side-form">
            <form class="add-recipe container section">
            <h6 >New Recipe</h6>
            <div class="divider"></div>
            <div class="input-field">
                <input placeholder="e.g. Ninja soup" id="title" type="text" class="validate">
                <label for="title">Recipe Title</label>
            </div>
            <div class="input-field">
                <input placeholder="e.g. Tofu, mushroom, garlic" id="ingredients" type="text" class="validate">
                <label for="ingredients">Ingredients</label>
            </div>
            <div class="input-field center">
                <button class="btn-small" id="new">Add</button>
            </div>
            </form>
        </div>
        `;
    }

    createRenderRoot(){
        return this;
    }
}
customElements.define('form-recipes', Form);