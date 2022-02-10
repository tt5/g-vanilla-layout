customElements.define('t-v',
  class TV extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById('t-v');
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));
    }
  }
);

customElements.define('t-h',
  class TH extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById('t-h');
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({mode: 'open'})
        .appendChild(templateContent.cloneNode(true));
    }
  }
);
