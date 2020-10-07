const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            display: inline-block;
        }
        h2 {
            color: red;
        }
        p {
            color: blue;
        }
    </style>
    <h2>別のHTMLからやってきました！</h2>
    <p>こんにちは！</p>
    <slot></slot>
`;

export default class DemoComponent extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const content = template.content;
        shadowRoot.appendChild(content.cloneNode(true));
    }
}
window.customElements.define('demo-component', DemoComponent);