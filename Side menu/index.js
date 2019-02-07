// function myFunction() {
//     var x = document.getElementById("navigation");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }


//    /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
//  function openNav() {
//      document.getElementById("navigation").style.width = "250px";
//      document.getElementById("content").style.marginLeft = "250px";
//    }
  
//    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
//    function closeNav() {
//      document.getElementById("navigation").style.width = "0";
//      document.getElementById("content").style.marginLeft = "0";
//    }


// var button = document.querySelector('#toggle');
// var menu = document.querySelector('#navigation');
// button.addEventListener('click', function (event) {
//       if (menu.style.display == "") {
//           menu.style.display = "none";
//           button.innerHTML = "Show Menu";
//       } else {
//           menu.style.display = "";
//           button.innerHTML = "Hide Menu";
//       }
//     }
//   );

// function openNav() {
//     document.getElementById("navigation").style.width = "250px";
//   }
  
//   function closeNav() {
//     document.getElementById("navigation").style.width = "0";
//   }

document.addEventListener('DOMContentLoaded', () => {
    let aside = document.querySelector('#aside');
    aside.addEventListener('mouseenter', () => {
      aside.classList.remove('closed');
    });
  
    aside.addEventListener('mouseleave', () => {
      aside.classList.add('closed');
    });
  });