document.addEventListener('DOMContentLoaded', () => {
  // CLASS TARGET
  const storyClass = document.querySelector('.story').offsetTop;
  // RESERVATION 
  const scrollTop = document.querySelector('.follow');
  const btnScroll = document.querySelector('.follow__btn');
  // SP RESERVATION
  const scrollTopSp = document.querySelector('.sp-follow');
  const btnSp = document.querySelector('.sp-follow__inner');
  // STORY SECTION
  const storyLines01 = document.querySelector('.storyLines01');
  const storyLines02 = document.querySelector('.storyLines02');
  // FOR HEADER TOGGLE SHOW WHEN SCROLL
  let pageY = 0;
  let prevY = 0;


  // init
  if (window.pageYOffset === document.body.offsetTop) {
    scrollTop.style.display = "none";
    btnScroll.style.display = "none";
    scrollTopSp.style.display = "none";
  }

  window.onscroll = () => {
    prevY = pageY;
    pageY = window.pageYOffset;

    console.log('prevY = ' + window.pageYOffset + 'currentY = ' + document.body.offsetTop);

    // FOR RESERVATION 
    if (pageY >= 500) {
      scrollTop.style.display = "block";
      btnScroll.classList.add('followThrough-in');
      btnScroll.classList.remove('followThrough-out');

      //SP
      scrollTopSp.style.display = "block";
      btnSp.classList.add('spFollow-in');
      btnSp.classList.remove('spFollow-out');

      //STORY SECTION LINE
      storyLines01.style.display = "block";
      storyLines02.style.display = "block";
      storyLines01.classList.add('story-above');
      storyLines02.classList.add('story-below');

    } else if (!pageY == 500 && pageY >= 0) {
      scrollTopSp.style.display = "none";
    } else {
      btnScroll.classList.remove('followThrough-in');
      btnScroll.classList.add('followThrough-out');

      //SP
      btnSp.classList.remove('spFollow-in');
      btnSp.classList.add('spFollow-out');
    }

    //STORY SECTION
    if (pageY == storyClass) {
      storyLines01.style.display = "block";
      storyLines02.style.display = "block";
      storyLines01.classList.add('story-above');
      storyLines02.classList.add('story-below');
    }

    // SP REMOVE 
    if (pageY >= 3450) {
      btnSp.classList.remove('spFollow-in');
      btnSp.classList.add('spFollow-out');
    }

  };
});


// MODAL
var modal = document.getElementById("Modal");

// Get the button that opens the modal
var btn = document.getElementById("Btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}