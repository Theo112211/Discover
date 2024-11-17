imgsrc = "/imgs/pic (33).jpg";

const close = document.querySelector(".close");
const display = document.querySelector(".showcase");
const imgclicked = document.querySelector(".selected");

function showcase() {
  const showcase = document.querySelector(".showcase");
  const close = document.querySelector(".close");
  const imgclicked = document.querySelector(".selected");
  const img = document.querySelector(".brick");

  let rand = img.a;
  console.log(rand);

  showcase.style.visibility = "visible";
  showcase.style.opacity = "1";
  // show();
}

close.addEventListener("click", function () {
  display.style.visibility = "hidden";
  display.style.opacity = "0";
});

function show(imgsrc) {
  imgclicked.source = imgsrc;
  console.log(imgsrc);
}

// const imgclicked = document.querySelector(".selected");
// let image = document.querySelectorAll(".brick");
// forEach(image, (imgsrc = image.source));
// console.log("happy??");

/*
function cascade(){
  const img=document.querySelectorAll('img');
  img.forEach(img)=>{
    img.addEventListener('click',function(){
      const src=img.getAttribute('src');
      console.log(src);
    });
  }
}*/

document.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    const src = event.target.getAttribute("src");
    console.log(src);
    imgclicked.setAttribute("src", src);
  }
});
