let imgAvatar = document.getElementById("img-avatar");
let fullname = document.getElementById("fullname");
let email = document.getElementById("email");

let btnLeft = document.querySelector(".btn-left");
let btnRight = document.querySelector(".btn-right");

let dataArr = [
  {
    id: 0,
    first_name: "Supasin",
    last_name: "Saetang",
    age: 23,
    email: "supasin.s1t@gmail.com",
    img: "avatar-1.jpg",
  },
  {
    id: 1,
    first_name: "Danny",
    last_name: "Brucely",
    age: 23,
    email: "danny.zb@gmail.com",
    img: "avatar-2.jpg",
  },
  {
    id: 2,
    first_name: "Nephew",
    last_name: "Beggin",
    age: 23,
    email: "Nephew.bg@gmail.com",
    img: "avatar-3.jpg",
  },
  {
    id: 3,
    first_name: "Cooper",
    last_name: "Pitchen",
    age: 23,
    email: "cooper.pch@gmail.com",
    img: "avatar-4.jpg",
  },
  {
    id: 4,
    first_name: "Acesyos",
    last_name: "Monas",
    age: 23,
    email: "Acesyos.mas@gmail.com",
    img: "avatar-5.jpg",
  },
];

let slideItem = 0;

function slideRight() {
  slideItem++;
  console.log(`next : ${slideItem}`);
  if (slideItem > dataArr.length - 1) {
    console.log(`Condition : Success ${slideItem}`);
    slideItem = 0;
  }
  const user = dataArr[slideItem];
  imgAvatar.src = user.img;
  fullname.textContent = user.first_name + " " + user.last_name;
  email.textContent = user.email;
}

function slideLeft() {
  slideItem--;
  console.log(`prev : ${slideItem}`);
  if (slideItem < 0) {
    slideItem = dataArr.length - 1;
    console.log(slideItem);
  }
  const user = dataArr[slideItem];
  imgAvatar.src = user.img;
  fullname.textContent = user.first_name + " " + user.last_name;
  email.textContent = user.email;
}

btnLeft.addEventListener("click", slideLeft);
btnRight.addEventListener("click", slideRight);
