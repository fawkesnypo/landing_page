class Navbar{

    constructor(nav_div, nav_ul,nav_ul_links){

        this.nav_div = document.querySelector(nav_div);
        this.nav_ul = document.querySelector(nav_ul);
        this.nav_ul_links = document.querySelectorAll(nav_ul_links);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    animatedLinks(){
        this.nav_ul_links.forEach((link,index)=> {
            link.style.animation 
            ? (link.style.animation = "")
            :(link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        });
    }

    handleClick(){
        this.nav_div.classList.toggle(this.activeClass);
        this.nav_ul.classList.toggle(this.activeClass);
        this.animatedLinks();
    }

    addClickEvent(){
        this.nav_div.addEventListener("click",this.handleClick);
    }

    init(){
        if(this.nav_div){
            this.addClickEvent();
        }

        return this;
    }
}

const navbar = new Navbar(
    ".page-header-nav-div",
    ".page-header-ul",
    ".page-header-ul li",
);

navbar.init()