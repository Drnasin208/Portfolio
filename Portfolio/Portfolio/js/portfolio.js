function openSlideMenu() {
  document.getElementById("side-menu").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeSlideMenu() {
  document.getElementById("side-menu").style.width = "0px";
  document.getElementById("main").style.marginLeft = "0px";
}
// AOS.init({
//   offset: -300, // offset (in px) from the original trigger point
//   delay: 500, // values from 0 to 3000, with step 50ms
//   duration: 3000, // values from 0 to 3000, with step 50ms
// });


// var list = document.getElementsByTagName("ul")[0];
// var newEl = document.createElement("a");
// var newText = document.createTextNode("Dodatak");
// newEl.appendChild(newText);
// // list.appendChild(newEl);
// list.insertBefore(newEl, list.firstChild);

// var foto = document.createElement("a");
// var newText = document.createTextNode("FOTO");
// newEl.appendChild(newText);
// var position = document.getElementsByTagName("ul")[0];
// position.appendChild(foto);
// foto.css("padding", "30px");   //  NIJE USPJELO! ! ! !!!

// var removeEl = document.getElementsByTagName("li")[0];
// var containerEl = document.getElementsByTagName("ul")[0];
// containerEl.removeChild(removeEl); ----// USPJEŠNO RADI