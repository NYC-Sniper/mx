// open and close menu

function openMenu() {
    document.getElementById('mobile').style.transform= "translateY(0%)";
};

function closeMenu() {
    document.getElementById('mobile').style.transform= "translateY(-100%)";
}


// main header
window.onscroll = function () {
    mainHeader()
};

function mainHeader() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("nav").className = "navbar fixed";
    } else {
        document.getElementById("nav").className = "navbar";
    }

    // mobile

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("M-navbar").className = "mobile-navbar fixed";
    } else {
        document.getElementById("M-navbar").className = "mobile-navbar";
    }
};

