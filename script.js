// ==============================
// Smooth Scroll Active Menu
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==============================
// Typing Effect
// ==============================

const words = [
    "Python Developer",
    "Frontend Developer",
    "MCA Graduate",
    "Computer Operator @ MPEB"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex == 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex == words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

// ==============================
// Scroll To Top
// ==============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

//==========================
// Counter Animation
//==========================

const counters=document.querySelectorAll(".achievement-card h1");

counters.forEach(counter=>{

const update=()=>{

const target=counter.innerText.replace("+","").replace("%","");

const count=+counter.getAttribute("data-count") || 0;

if(count<target){

counter.setAttribute("data-count",count+1);

counter.innerText=count+1;

setTimeout(update,25);

}else{

if(counter.innerHTML.includes("%"))

counter.innerHTML=target+"%";

else

counter.innerHTML=target+"+";

}

}

update();

});

const toggle=document.querySelector(".theme-toggle");

toggle.onclick=()=>{

document.body.classList.toggle("light-mode");

};

// =====================
// Loader
// =====================

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1200);

});

//=====================
// Cursor
//=====================

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

//=====================
// Mobile Menu
//=====================

const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");

menuBtn.onclick=()=>{

nav.classList.toggle("active");

};

//=====================
// Scroll Progress
//=====================

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let progress=(scrollTop/scrollHeight)*100;

document.getElementById("progress-bar").style.width=progress+"%";

});

// =====================
// Project Tilt Effect
// =====================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateX = -(y - rect.height/2)/20;

const rotateY = (x - rect.width/2)/20;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});

// Disable Right Click

document.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});

// Welcome Message

window.onload=()=>{

console.log("Welcome To Anjali Portfolio 🚀");

};
