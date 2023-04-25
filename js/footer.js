class Footer extends HTMLElement {
    constructor() {
        super();   
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="footer">
                <div class="links">
                    <a href="https://github.com/Hannahd06?tab=repositories" target="blank">GitHub Repositories</a>
                    <a href="https://www.bellevue.edu/degrees/bachelor/web-development-bs/" target="blank">Bellevue University's Web Development Degree</a>
                    <a href="https://www.youtube.com/@bellevueuniversity" target="blank">Bellevue University Youtube Channel</a>
                    <a href="https://github.com/buwebdev" target="blank>Bellevue University GitHub</a>
                </div>
            </div>`; 
    }
}

customElements.define("page-footer", Footer);


                
