class Python {
    constructor(selector) {
        this.element = document.querySelector(selector);

        this.activeClass = "activate";

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this.element);
        this.element.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.element.addEventListener("click", this.handleClick);
    }
}

const python = new Python(".Python");
python.addClickEvent();
