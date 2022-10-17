import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class Add extends LitElement {

    render() {
        return html `
        <div class="center">
            <a class="btn-floating btn-small btn-large add-btn sidenav-trigger" data-target="side-form">
            <i class="material-icons">add</i>
            </a>
        </div>
        `;
    }
    createRenderRoot(){
        return this;
    }
}
customElements.define('add-button', Add);