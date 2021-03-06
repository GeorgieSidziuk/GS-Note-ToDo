import { Component } from "../core/component";

export class HeaderComponent extends Component {
  constructor(id) {
    super(id);
  }
  init() {
    if (localStorage.getItem("visited")) {
      this.hide();
    }
    // Получаем кнопку и вешаем её на элемент header
    const $BTN = this.$el.querySelector(".js-header-start");
    $BTN.addEventListener("click", buttonHandler.bind(this));
  }
}

// Создание приватной функции для скрытия header
function buttonHandler() {
  localStorage.setItem("visited", JSON.stringify(true));
  this.hide();
}