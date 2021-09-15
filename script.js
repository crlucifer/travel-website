var searchBtn = document.querySelector("#search-btn");
var searchBar = document.querySelector(".search-bar-container");
searchBtn.addEventListener("click", function(){
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})
var formBtn = document.querySelector("#login-btn");
var loginForm = document.querySelector(".login-form-container");
formBtn.addEventListener("click", function(){
    loginForm.classList.add("active");
})
var formClose = document.querySelector("#form-close");
formClose.addEventListener("click", function(){
    loginForm.classList.remove("active");
})
var menu = document.querySelector("#menu-bar");
var navbar = document.querySelector(".navbar");
menu.addEventListener("click", function(){
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
})
var videoBtn = document.querySelectorAll(".video-btn");
for(var i = 0; i < videoBtn.length; i++){
    videoBtn[i].addEventListener("click", function(){
        document.querySelector(".controls .active").classList.remove("active");
        this.classList.add("active");
        let src = this.getAttribute("data-src");
        document.querySelector("#video-slider").src = src;
    })
}