import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class About extends LitElement {

    render() {
        return html `
        <div class="container grey-text">
            <h5 class="center">About Food Ninja</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, porro voluptatum illum veniam eaque sunt sit labore provident eligendi! Voluptate amet suscipit inventore unde maxime atque impedit officia nobis laboriosam!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus omnis, ea doloremque exercitationem id necessitatibus. Voluptatem officiis cupiditate commodi totam, hic laborum est ducimus amet iure, non dignissimos illo.</p>
        </div>
        `;
    }
    createRenderRoot(){
        return this;
    }
}
customElements.define('about-content', About);