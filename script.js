
let tapis = document.getElementById("tapis");
let carton = document.getElementById("carton");
let speed = document.getElementById("speedContain");
let emojiVide = document.getElementById("emojivide");
let finish = document.getElementById("start");
let create = document.getElementById("create");
let bouche1 = document.getElementById("bouche1");
let container = document.getElementsByClassName("container");
let choix = document.getElementById("choix");



function allowDrop(ev) {
  ev.preventDefault();
  console.log("allow")
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  console.log(data)

  const rect = ev.target.getBoundingClientRect();
  offsetX = ev.clientX - rect.x;
  offsetY = ev.clientY - rect.y;
  console.log(offsetX, offsetY)
}
TweenMax.set("#choix", {autoAlpha:0});
create.addEventListener("click", onCreate)
function onCreate() {
  gsap.to("#emojivide", {
    duration: 5,
    y: -400,
    ease: "elastic"
  });
  TweenMax.fromTo("#choix", 5, {autoAlpha:0}, {autoAlpha:1});
}


finish.addEventListener("click", onFinish)
function onFinish() {
  gsap.to("#emojivide", { duration: 2, ease: "elastic.in", y: -5 });
  timer = setInterval(function() {
    gsap.to("#speedContain", {
      duration: 4, 
      x: 1800
    });
  }, 2500);
}

// carton.addEventListener("click", onLeave)
// function onLeave() {
//   gsap.to("#speedContain", {
//     duration: 4, 
//     x: 1755
//   });
  
// }


// function animateBg(px=0){
//       requestAnimationFrame(()=>{
//             tapis.style.backgroundPosition = `${px}px 0px`;
//             console.log(px)
//             animateBg(px+0.2);
//         });
//     }
//     animateBg();
    