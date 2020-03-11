export default class Search {
    // Organization notes
    // Select DOM elements, and keep track of any useful data
    constructor() {
        this.headerSearchIcon = document.querySelector(".header-search-icon")
        this.events()
    }

    // Events
    events() {
        this.HeaderSearchIcon.addEventListener("click", (e) => {
          e.preventDefault()
          this.openOverlay()
        })
    }


    // Methods
    openOverlay() {
        alert("openOverlay method just ran")
    }
}