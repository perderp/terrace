document.addEventListener("DOMContentLoaded",(()=>{const o=document.querySelector(".story").offsetTop,s=document.querySelector(".follow"),e=document.querySelector(".follow__btn"),l=document.querySelector(".sp-follow"),t=document.querySelector(".sp-follow__inner"),d=document.querySelector(".storyLines01"),n=document.querySelector(".storyLines02");let c=0,r=0;window.pageYOffset===document.body.offsetTop&&(s.style.display="none",e.style.display="none",l.style.display="none"),window.onscroll=()=>{r=c,c=window.pageYOffset,console.log("prevY = "+window.pageYOffset+"currentY = "+document.body.offsetTop),c>=500?(s.style.display="block",e.classList.add("followThrough-in"),e.classList.remove("followThrough-out"),l.style.display="block",t.classList.add("spFollow-in"),t.classList.remove("spFollow-out")):500==!c&&c>=0?l.style.display="none":(e.classList.remove("followThrough-in"),e.classList.add("followThrough-out"),t.classList.remove("spFollow-in"),t.classList.add("spFollow-out")),c===o&&(d.style.display="block",n.style.display="block",d.classList.add("story-above"),n.classList.add("story-below")),c>=3450&&(t.classList.remove("spFollow-in"),t.classList.add("spFollow-out"))}}));