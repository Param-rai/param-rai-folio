const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const secBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const portfolioContainer = document.querySelector(".portfolios");

const portfolios = [
  {
    title: "Instagram replica",
    img: "img/instagram.png",
    github: "https://github.com/Param-rai/Instagram",
    demo: "https://instagram-two-beta.vercel.app/",
  },
  {
    title: "Mappin",
    img: "img/mappin.png",
    github: "https://github.com/Param-rai/Mappin",
    demo: "https://mappin-pi.vercel.app/",
  },
  {
    title: "prmMovies",
    img: "img/prmMovies.png",
    github: "https://github.com/Param-rai/prmMovies",
    demo: "https://prm-movies.vercel.app/",
  },
];

portfolios.forEach((portfolio, i) => {
  let element = document.createElement("div");
  element.className = "portfolio-item";
  element.innerHTML = `
  <div class="image">
  <img src="${portfolio.img}" alt="" />
    <span class="number"># ${i + 1}</span>
    <span class="title">${portfolio.title}</span>
</div>
<div class="hover-items">
  <h3>Project Source</h3>
  <div class="icons">
    <a href="${portfolio.github}" target="_blank" class="icon"
      ><i class="fab fa-github"></i
    ></a>
    <a href="${portfolio.demo}" target="_blank" class="icon"
      ><i class="fa fa-link"></i
    ></a>
  </div>
</div>
  `;
  portfolioContainer.appendChild(element);
});

function PageTransition() {
  // button click active class
  for (let i = 0; i < secBtn.length; i++) {
    secBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");

      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.classList.add("active-btn");
    });
  }

  // section active class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    if (id) {
      // remove selected from the other button
      // secBtn.forEach((btn) => {
      //   btn.classList.remove("active");
      // });

      // e.target.classList.add("active");

      // hide other section
      sections.forEach((section) => {
        section.classList.remove("active");
      });

      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });

  // toggle theme
  const themeBtn = document.querySelector(".theme-btn");

  themeBtn.addEventListener("click", (e) => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}

PageTransition();
