let m = document.querySelector(".msg");
let r = document.querySelector(".rock");
let p = document.querySelector(".paper");
let s = document.querySelector(".sis");
let c = document.querySelector(".comp");
let u = document.querySelector(".user");
let res=document.querySelector(".reset");
let comp = 0;
let user = 0;
var arr = ["Rock", "Paper", "Scissors"];
var rand;
console.log(rand);

r.addEventListener("click", () => {
    m.style.opacity= 1;
  rand = Math.floor(Math.random() * 3);
  var a = arr[rand];
  if (arr[rand] == r.value) {
    m.innerText = "game tied!!";
    console.log("hello");
  } else if (a == "Scissors") {
    m.innerText = "you Won!!";
    user += 1;
    u.innerText = user;
  } else {
    m.innerText = "You lost!!";
    comp += 1;
    c.innerText = comp;
  }
  console.log(arr[rand]);
});

p.addEventListener("click", () => {
    m.style.opacity= 1;
    rand = Math.floor(Math.random() * 3);
    var a = arr[rand];
    if (arr[rand] == p.value) {
      m.innerText = "game Tied!!";
      console.log("hello");
    } else if (a == "Scissors") {
      m.innerText = "you lost!!";
      comp += 1;
      c.innerText = comp;
    } else {
      m.innerText = "You won!!";
      user += 1;
      u.innerText = user;
    }
    console.log(arr[rand]);
  });

  s.addEventListener("click", () => {
    m.style.opacity= 1;
    rand = Math.floor(Math.random() * 3);
    var a = arr[rand];
    if (arr[rand] == s.value) {
      m.innerText = "game Tied!!";
      console.log("hello");
    } else if (a == "Paper") {
      m.innerText = "you Won!!";
      user += 1;
      u.innerText = user;
    } else {
      m.innerText = "You lost!!";
      comp += 1;
      c.innerText = comp;
    }
    console.log(arr[rand]);
  });
res.addEventListener("click",()=>{
    c.innerText = 0;
    u.innerText = 0;
    m.style.opacity= 0;
})