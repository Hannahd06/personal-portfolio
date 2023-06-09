class Header extends HTMLElement {
    constructor() {
        super();   
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <p> Hannah Del Real </p>
                <nav class="nav-links">
                    <a href="./index.html" id="home">Home</a>
                    <a href="./about.html" id="about">About</a>
                    <a href="./resume.html" id="resume">Resume</a>
                    <a href="./projects.html" id="projects">Projects</a>
                    <a href="./db-diagrams.html" id="db-diagrams">Database Diagrams</a>
                    <a href="./api-unit-test.html" id="api-unit-test">API Unit tests</a>
                    <a href="./bucket-list.html" id="bucket-list">Bucket List</a>
                </nav>
            </header>`;
    }
} 

customElements.define("page-header", Header);


