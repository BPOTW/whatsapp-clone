class contact_card extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML = `
      <style>
.contact-card{
  width: 380px;
  margin-right: 4px;
//   background-color: #21c063;
  height: 75px;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.contact-card:hover{
  background-color: #373838;
}

.contact-card.active {
  background-color: #373838;
}

.nam-msg-tim-div{
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  /* background-color: #90c021; */
  width: 80%;
}

.time-options-div,.name-msg-div{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.msg-card-profile-pic{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-block;
}

.options-icon{
  display: inline-block;
}

.name{
  color: #f1f1ee;
  font-size: 16px;
  font-weight: 400;
  font-family: "Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
  margin-bottom: 4px;
}

.msg{
  width: 90%;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #FFFFFF99;
  /* background-color: rgb(83, 83, 83); */
  font-size: 14px;
  font-weight: 400;
  font-family: "Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
  
}

.time{
  /*color: #21c063;*/
  color: #FFFFFF99;
  font-size: 12px;
  font-family: "Segoe UI", "Helvetica Neue", Helvetica, "Lucida Grande", Arial, Ubuntu, Cantarell, "Fira Sans", sans-serif;
  font-feature-settings: "kern";
  font-weight: 600;
  margin-right:8px;

}

.options-icon{
    margin-right:8px;
}

.contact-card-option-icon{
cursor:pointer;
}

      </style>

      <div class="contact-card">
            <img
              class="msg-card-profile-pic"
              src="${this.getAttribute("src")}"
              alt=""
              srcset=""
            />
            <div class="nam-msg-tim-div">
              <div class="name-msg-div">
                <div class="name">${this.getAttribute("name")}</div>
                <div class="time">${this.getAttribute("time")}</div>
              </div>
              <div class="time-options-div">
                <div class="msg">
                  ${this.getAttribute("msg")}
                </div>
                <div class="options-icon">
                  <img class="contact-card-option-icon"
                    src="assets/icons/arrowdown-icon.svg"
                    width="28px"
                    height="28px"
                    alt=""
                  />
            
                </div>
              </div>
            </div>
          </div>
    `;
  }
}

customElements.define("contact-card", contact_card);
