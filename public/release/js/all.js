document.addEventListener("DOMContentLoaded",(()=>{const o=document.querySelector(".story").offsetTop,s=document.querySelector(".follow"),l=document.querySelector(".follow__btn"),e=document.querySelector(".sp-follow"),t=document.querySelector(".sp-follow__inner"),d=document.querySelector(".storyLines01"),a=document.querySelector(".storyLines02");let c=0,i=0;window.pageYOffset===document.body.offsetTop&&(s.style.display="none",l.style.display="none",e.style.display="none"),window.onscroll=()=>{i=c,c=window.pageYOffset,c>=500?(s.style.display="block",l.classList.add("followThrough-in"),l.classList.remove("followThrough-out"),e.style.display="block",t.classList.add("spFollow-in"),t.classList.remove("spFollow-out"),d.style.display="block",a.style.display="block",d.classList.add("story-above"),a.classList.add("story-below")):500==!c&&c>=0?e.style.display="none":(l.classList.remove("followThrough-in"),l.classList.add("followThrough-out"),t.classList.remove("spFollow-in"),t.classList.add("spFollow-out")),c==o&&(d.style.display="block",a.style.display="block",d.classList.add("story-above"),a.classList.add("story-below")),c>=3450&&(t.classList.remove("spFollow-in"),t.classList.add("spFollow-out"))}}));