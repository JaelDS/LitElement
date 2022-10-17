import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class Nav extends LitElement {

    render() {
        return html `
        <nav class="z-depth-0">
            <div class="nav-wrapper container">
            <a href="/">Food<span>Ninja</span></a>
            <span class="right grey-text text-darken-1">
                <i class="material-icons sidenav-trigger" data-target="side-menu">menu</i>
            </span>
            </div>
        </nav>
        <ul id="side-menu" class="sidenav side-menu">
            <li><a class="subheader">FOODNINJA</a></li>
            <li><a href="/" class="waves-effect">Home</a></li>
            <li><a href="/pages/about.html" class="waves-effect">About</a></li>
            <li><div class="divider"></div></li>
            <li><a href="/pages/contact.html" class="waves-effect">
            <i class="material-icons">mail_outline</i>Contact</a>
            </li>
        </ul>
        `;
    }
    createRenderRoot(){
        return this;
    }
}
customElements.define('nav-webapp', Nav);