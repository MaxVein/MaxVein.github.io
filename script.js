const x = document.getElementById('myTopnav');




let icon = document.getElementById('nav-icon3');
 icon.onclick = function(){
 icon.classList.toggle("open");
};

let userScroll = false;

function MouseEvent()
{
  userScroll = true;
}
document.addEventListener('wheel', MouseEvent, false);

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      let menu = document.getElementById('menu');
      if(userScroll) {
        if (prevScrollpos > currentScrollPos) {
          menu.style.transition = "all ease-out .4s"; 
          menu.style.top = "0";
        } else {
          menu.style.top = "-100px";
        }
      }
      prevScrollpos = currentScrollPos;
    
      if(pageYOffset > 100)
      {
          menu.style.backgroundColor ="#0f0f0f";
      }
      else{
          menu.style.backgroundColor = "#0f0f0f00";
      }
    }  


let links = document.querySelectorAll('.cool-link');
function ClickMenu()
{
  userScroll=false;

  let menu = document.getElementById('menu');
  menu.style.top = "-100px";
}
for (let item of links) {
  item.addEventListener('click', ClickMenu);
}

function ResponsiveMenu()
{
if(x.className === "topnav")
{
x.className += " responsive"
}
else{
    x.className = "topnav"
}
}
