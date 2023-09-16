class Header extends HTMLElement {
    constructor() {
        super();   
    }

    connectedCallback() {
        this.innerHTML = `
            <header>
                <p> Hannah Del Real </p>
                <nav class="nav-links">
                <a href="https://hannahd06.github.io/personal-portfolio/index.html" id="home">Home</a>
                <a href="https://hannahd06.github.io/personal-portfolio/about.html" id="about">About</a>
                <a href="https://hannahd06.github.io/personal-portfolio/resume.html" id="resume">Resume</a>
                <a href="https://hannahd06.github.io/personal-portfolio/projects.html" id="projects">Projects</a>
                <a href="https://hannahd06.github.io/personal-portfolio/db-diagrams.html" id="db-diagrams">Database Diagrams</a>
                <a href="https://hannahd06.github.io/personal-portfolio/api-unit-test.html" id="api-unit-test">API Unit tests</a>
                <a href="https://hannahd06.github.io/personal-portfolio/bucket-list.html" id="bucket-list">Bucket List</a>
                    <div class="dropdown">
                        <button class="dropbtn">DevOps <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                            <a href="https://hannahd06.github.io/personal-portfolio/web-430/delreal-tech-value-stream.html">Tech Value Stream</a>
                            <a href="https://hannahd06.github.io/personal-portfolio/web-430/delreal-two-pizza-team-rule.html">The Two-Pizza Team Rule</a>
                            <a href="https://hannahd06.github.io/personal-portfolio/web-430/delreal-automated-testing.html">DevOps Automated Testing</a>                            
                            <a href="https://hannahd06.github.io/personal-portfolio/web-430/delreal-continuous-integration.html">Continuous Integration</a>                            
                            <a href="https://hannahd06.github.io/personal-portfolio/web-430/delreal-pager-rotation-duties.html">Pager Rotation Duties</a>                            
                            <a href="https://hannahd06.github.io/personal-portfolio/web-430/delreal-change-approval.html">Dangers of Change Approval</a>                            
                            <a href="#">Presentation 7</a>
                            
                        <div>
                    </div>     
                </nav>
            </header>`;
    }
} 

customElements.define("page-header", Header);


