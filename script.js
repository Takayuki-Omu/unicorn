const unicorns = [
  {
    name: 'GoldenChocolate',
    img: 'imgs/01_goldenchocolate.jpg',
    desc: 'Gentle and kind.'
  },
  {
    name: 'StareingCourage',
    img: 'imgs/02_stareingcourage.jpg',
    desc: 'Young unicorn, brother of NobleBreeze.'
  },
  {
    name: 'ObsidianConfidence',
    img: 'imgs/03_obsidianconfidence.jpg',
    desc: 'Black knight of Abirian kingdom.'
  },
  {
    name: 'NobleBreeze',
    img: 'imgs/04_noblebreeze.jpg',
    desc: 'Princess of Abirian kingdom.'
  },
  {
    name: 'DreamBox',
    img: 'imgs/05_dreambox.jpg',
    desc: 'She is full of dreams.'
  },
  {
    name: 'CyberTiger',
    img: 'https://seijirokosakitmc.github.io/myfriendlyunicorns/imgs/06_cybertiger.jpg',
    desc: 'Happy Hacking.'
  }
];

const setupMenu = function() {
  const menu = document.querySelector(".menu");
  
  for (let i = 0; i < unicorns.length; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", i);
    div.addEventListener("click", selectImgFn);
    if (i === 0) {
      div.classList.add("selected");
    } else {
      div.classList.add("unselected");
    }
    const img = document.createElement("img");
    img.src = unicorns[i].img;
    const p = document.createElement("p");
    p.textContent = unicorns[i].name;
    div.appendChild(img);
    div.appendChild(p);
    menu.appendChild(div);
  }
}

const setupMain = function() {
  const main = document.querySelector(".main");
  const h1 = document.createElement("h1");
  h1.textContent = unicorns[0].name;
  main.appendChild(h1);
  const img = document.createElement("img");
  img.src = unicorns[0].img;
  main.appendChild(img);
  const p = document.createElement("p");
  p.textContent = unicorns[0].desc;
  main.appendChild(p);
}

const selectImgFn = function() {
  const h1 = document.querySelector(".main h1");
  h1.textContent = unicorns[this.id].name;
  const img = document.querySelector(".main img");
  img.src = unicorns[this.id].img;
  const p = document.querySelector(".main p");
  p.textContent = unicorns[this.id].desc;
  
  const select = document.getElementsByClassName("selected")[0];
  select.classList.replace("selected", "unselected");
  this.classList.replace("unselected", "selected");
}

setupMenu();
setupMain();