// let img = document.getElementById("image"),
//           msg = document.getElementById("message");

//       img.onmouseover = function(){
//         msg.style.display = "block";
//       }

//       img.onmouseout = function(){
//         msg.style.display = "none";
//       }

const reveal = (show) => {
    let message = document.querySelector('#message');
    if(show) {
      message.classList.remove('hidden');
    } else {
      message.classList.add('hidden');
    }
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    let padlock = document.querySelector('#padlock');
    padlock.addEventListener('mouseenter', () => {
      reveal(true);
    });
  
    padlock.addEventListener('mouseleave', () => {
      reveal(false);
    });
  });