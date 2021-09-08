function pag(){
    $(".iniciar").addClass("d-none");
    $(".conteudo").removeClass("d-none");

   // document.getElementsByClass("iniciar").classList.add("d-none");
   // document.getElementsByClass("nav").classList.remove("d-none");
}

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector (mobileMenu);
        this.navList = document.querySelector (navList);
        this.navLinks = document.querySelectorAll (navLinks);
        this.activeClass = "active";
    
        this.handleClick = this.handleClick.bind (this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`); 
        });

    }

    handleClick () {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent () {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    
    init () {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar (
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();

document.querySelector("#items").addEventListener("wheel", event => { 
    if (event.deltaY > 0) {
        event.target.scrollBy (300, 0) 
    } else {
        event.target.scrollBy (-300,0)
    }
});