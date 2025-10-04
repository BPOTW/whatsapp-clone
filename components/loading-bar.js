
    class LoadingBar extends HTMLElement {
      connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML = `
          <style>
            .loading-bar {
              width: 200px;        /* fixed width so you can see it */
              height: 4px;
              background-color: #ccc;
              border-radius: 4px;
              overflow: hidden;
              position: relative;
            }

            .loading-bar::before {
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              height: 100%;
              width: 100%;
              background: #4caf50;
              transform: translateX(-100%);
              animation: loading 1.5s forwards ease-in;
            }

            @keyframes loading {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(0%); }
            }
          </style>

          <div class="loading-bar"></div>
        `;
      }
    }

    customElements.define("loading-bar", LoadingBar);
  
