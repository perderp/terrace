document.addEventListener('DOMContentLoaded', () => {
  const scrollTop = document.querySelector('.follow');
  const btnScroll = document.querySelector('.follow__btn');
  // FOR HEADER TOGGLE SHOW WHEN SCROLL
  let pageY = 0;
  let prevY = 0;

  // init
  if (window.pageYOffset === document.body.offsetTop) {
    scrollTop.style.display = "none";
    btnScroll.style.display ="none";
  }
  window.onscroll = () => {
    prevY = pageY;
    pageY = window.pageYOffset;
    console.log('prevY = ' + window.pageYOffset + 'currentY = ' + document.body.offsetTop);
    if(pageY >=  500){
      scrollTop.style.display = "block";
      btnScroll.classList.add("followThrough-in");
      btnScroll.classList.remove("followThrough-out");
    }else if (pageY != 500 && pageY <= 0 ){
      scrollTop.style.display = "block";
      btnScroll.classList.remove("followThrough-in");
      btnScroll.classList.add("followThrough-out");
    }
    // if (window.pageYOffset === document.body.offsetTop) {
    //   // console.log("you're at the top of the page");
    //   scrollTop.style.display = "none";

    // } else if (pageY - prevY < 0) {
    //   // console.log("is scrolling up");
    //   scrollTop.style.display = "block";
    // } else if ((pageY - prevY) > 0) {
    //   // console.log("is scrolling down");
    //   scrollTop.style.display = "block";

    // }
    // if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    //   //  console.log("you're at the bottom of the page");
    //   scrollTop.style.display = "block";
    // }

  };
});



var navbar = document.querySelector(".navigation02")
var ham = document.querySelector(".hamburger-icon")

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger(){
  navbar.classList.toggle("showClose")
}

ham.addEventListener("click", toggleHamburger)
