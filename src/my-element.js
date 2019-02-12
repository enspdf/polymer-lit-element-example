import {
    LitElement,
    html
} from "lit-element";

class MyElement extends LitElement {
    render() {
        return html `
            <p>My Element</p>
            <p>Clicks ${this.clics}</p>
            <button @click="${this.increment}">Click Here</buton>
        `;
    }

    static get properties() {
        return {
            clics: {
                type: Number
            }
        };
    }

    constructor() {
        super();
        this.clics = 0;
    }

    increment() {
        this.clics++;
    }
}

customElements.define("my-element", MyElement);