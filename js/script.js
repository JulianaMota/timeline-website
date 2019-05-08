window.addEventListener("DOMContentLoaded", loadTimelineSVG);
window.addEventListener("DOMContentLoaded", loadIllustrations);

function loadTimelineSVG() {
  //console.log("");

  fetch("svg/timeline.svg")
    .then(response => response.text())
    .then(svgData => {
      //console.log(svgData);

      document.querySelector("#time-line-svg").innerHTML = svgData;

      const iconsArray = document.querySelectorAll(".btn-Icon");
      console.log(iconsArray);
      iconsArray.forEach(eachIcon);

      const snap = Snap("#time-line-svg svg");
      circle = snap.select("#movecircle");

      curve = snap.select("#curve-line");
      console.log(circle, curve);
      runAnimation();
    });
}

let circle = null;
let curve = null;
let currentPosition = 0;

const speed = 3;

function runAnimation() {
  //console.log("animate");

  if (currentPosition < curve.getTotalLength()) {
    requestAnimationFrame(runAnimation);
  }

  curveL = curve.getPointAtLength();
  console.log(curveL);
  currentPosition += speed;

  const pos = curve.getPointAtLength(currentPosition);
  console.log(pos);

  circle.node.style.transform = `translate( ${pos.x}px, ${pos.y}px )`;
}

function eachIcon(icon) {
  //console.log(icon);
  icon.addEventListener("click", iconClicked);
}

function iconClicked(event) {
  const girlCircle = document.querySelector(".girlCircle");
  //console.log(event.target.classList);
  if (event.target.classList.value === "girlCircle") {
    document.querySelector("#Dreamer").classList.remove("hide");
    document.querySelector("#Friendly").classList.add("hide");
    document.querySelector("#Crealive").classList.add("hide");
    document.querySelector("#Realistic").classList.add("hide");
    document.querySelector("#Passionate").classList.add("hide");
    document.querySelector("#Adventurous").classList.add("hide");
    document.querySelector("#Perseverant").classList.add("hide");
    document.querySelector("#Hopeful").classList.add("hide");
    document.querySelector("#Inspiring").classList.add("hide");
    document.querySelector("#Vision").classList.add("hide");

    //animation
    const couldlist = document.querySelectorAll(".cloud");
    couldlist.forEach(cloud => {
      console.log(cloud);
      cloud.classList.toggle("cloudAnimate");
    });
    const treelist = document.querySelectorAll(".tree-d");
    treelist.forEach(tree => {
      console.log(tree);
      tree.classList.add("tree-dAnimate");
    });
  }
  if (event.target.classList.value === "scoutCircle") {
    document.querySelector("#Friendly").classList.remove("hide");
    document.querySelector("#Dreamer").classList.add("hide");
    document.querySelector("#Crealive").classList.add("hide");
    document.querySelector("#Realistic").classList.add("hide");
    document.querySelector("#Passionate").classList.add("hide");
    document.querySelector("#Adventurous").classList.add("hide");
    document.querySelector("#Perseverant").classList.add("hide");
    document.querySelector("#Hopeful").classList.add("hide");
    document.querySelector("#Inspiring").classList.add("hide");
    document.querySelector("#Vision").classList.add("hide");

    //animation
    const friendlist = document.querySelectorAll(".friends");
    friendlist.forEach(friend => {
      console.log(friend);
      friend.classList.add("friendAnimate");
      friend.style.opacity = 1;
    });
    document.querySelector("#fireAnime").classList.toggle("fireAnimate");
  }
  if (event.target.classList.value === "artCircle") {
    document.querySelector("#Crealive").classList.remove("hide");
    document.querySelector("#Dreamer").classList.add("hide");
    document.querySelector("#Friendly").classList.add("hide");
    document.querySelector("#Realistic").classList.add("hide");
    document.querySelector("#Passionate").classList.add("hide");
    document.querySelector("#Adventurous").classList.add("hide");
    document.querySelector("#Perseverant").classList.add("hide");
    document.querySelector("#Hopeful").classList.add("hide");
    document.querySelector("#Inspiring").classList.add("hide");
    document.querySelector("#Vision").classList.add("hide");

    //animation
    document.querySelector("#ink-creat").classList.toggle("ink-creatAnimate");
    document.querySelector("#blueInk").classList.toggle("blueInkAnimate");
    document.querySelector("#girl-creat").classList.add("girl-creatAnimate");
  }
  if (event.target.classList.value === "archCircle") {
    document.querySelector("#Realistic").classList.remove("hide");
    document.querySelector("#Dreamer").classList.add("hide");
    document.querySelector("#Friendly").classList.add("hide");
    document.querySelector("#Crealive").classList.add("hide");
    document.querySelector("#Passionate").classList.add("hide");
    document.querySelector("#Adventurous").classList.add("hide");
    document.querySelector("#Perseverant").classList.add("hide");
    document.querySelector("#Hopeful").classList.add("hide");
    document.querySelector("#Inspiring").classList.add("hide");
    document.querySelector("#Vision").classList.add("hide");

    //animation
    document.querySelector("#ruler-rea").classList.toggle("ruler-reaAnimate");
    document.querySelector("#bin-rea").classList.add("bin-reaAnimate");
  }
  if (event.target.classList.value === "heartCircle") {
    document.querySelector("#Passionate").classList.remove("hide");
    document.querySelector("#Dreamer").classList.add("hide");
    document.querySelector("#Friendly").classList.add("hide");
    document.querySelector("#Crealive").classList.add("hide");
    document.querySelector("#Realistic").classList.add("hide");
    document.querySelector("#Adventurous").classList.add("hide");
    document.querySelector("#Perseverant").classList.add("hide");
    document.querySelector("#Hopeful").classList.add("hide");
    document.querySelector("#Inspiring").classList.add("hide");
    document.querySelector("#Vision").classList.add("hide");

    document.querySelector("#beatHeart").classList.add("beatHeartAnimate");
  }
  if (event.target.classList.value === "danCircle") {
    document.querySelector("#Adventurous").classList.remove("hide");
    document.querySelector("#Dreamer").classList.add("hide");
    document.querySelector("#Friendly").classList.add("hide");
    document.querySelector("#Crealive").classList.add("hide");
    document.querySelector("#Realistic").classList.add("hide");
    document.querySelector("#Passionate").classList.add("hide");
    document.querySelector("#Perseverant").classList.add("hide");
    document.querySelector("#Hopeful").classList.add("hide");
    document.querySelector("#Inspiring").classList.add("hide");
    document.querySelector("#Vision").classList.add("hide");

    //animation
    document.querySelector("#plain").classList.toggle("plainAnimate");
    document.querySelector("#flag-ad").classList.toggle("flag-adAnimate");
    document.querySelector("#ruler-ad").classList.toggle("ruler-adAnimate");
  }
  if (event.target.classList.value === "workCircle") {
    document.querySelector("#Perseverant").classList.remove("hide");
    document.querySelector("#Dreamer").classList.add("hide");
    document.querySelector("#Friendly").classList.add("hide");
    document.querySelector("#Crealive").classList.add("hide");
    document.querySelector("#Realistic").classList.add("hide");
    document.querySelector("#Passionate").classList.add("hide");
    document.querySelector("#Adventurous").classList.add("hide");
    document.querySelector("#Hopeful").classList.add("hide");
    document.querySelector("#Inspiring").classList.add("hide");
    document.querySelector("#Vision").classList.add("hide");

    //animation
    document.querySelector("#ruler-pres").classList.toggle("ruler-presAnimate");
    document
      .querySelector("#ruler-t-pres")
      .classList.toggle("ruler-t-presAnimate");
    document
      .querySelector("#square-ruler-pres")
      .classList.toggle("square-ruler-presAnimate");
    document.querySelector("#model-pres").classList.toggle("model-presAnimate");
    document
      .querySelector("#compass-pres")
      .classList.add("compass-presAnimate");
  }
  if (event.target.classList.value === "searchCircle") {
    document.querySelector("#Hopeful").classList.remove("hide");
    document.querySelector("#Dreamer").classList.add("hide");
    document.querySelector("#Friendly").classList.add("hide");
    document.querySelector("#Crealive").classList.add("hide");
    document.querySelector("#Realistic").classList.add("hide");
    document.querySelector("#Passionate").classList.add("hide");
    document.querySelector("#Adventurous").classList.add("hide");
    document.querySelector("#Perseverant").classList.add("hide");
    document.querySelector("#Inspiring").classList.add("hide");
    document.querySelector("#Vision").classList.add("hide");

    //animation
    document.querySelector("#cruise-hop").classList.toggle("cruise-hopAnimate");
    document.querySelector("#mop").classList.add("mopAnimate");
  }
  if (event.target.classList.value === "mmdCircle") {
    document.querySelector("#Inspiring").classList.remove("hide");
    document.querySelector("#Dreamer").classList.add("hide");
    document.querySelector("#Friendly").classList.add("hide");
    document.querySelector("#Crealive").classList.add("hide");
    document.querySelector("#Realistic").classList.add("hide");
    document.querySelector("#Passionate").classList.add("hide");
    document.querySelector("#Adventurous").classList.add("hide");
    document.querySelector("#Perseverant").classList.add("hide");
    document.querySelector("#Hopeful").classList.add("hide");
    document.querySelector("#Vision").classList.add("hide");

    //animation
    document.querySelector("#idea-ins").classList.toggle("idea-insAnimate");
    document.querySelector("#design-isn").classList.toggle("design-isnAnimate");
    document.querySelector("#code-ins").classList.toggle("code-insAnimate");
    document.querySelector("#girl-ins").classList.toggle("girl-insAnimate");
  }
  if (event.target.classList.value === "futureCircle") {
    document.querySelector("#Vision").classList.remove("hide");
    document.querySelector("#Dreamer").classList.add("hide");
    document.querySelector("#Friendly").classList.add("hide");
    document.querySelector("#Crealive").classList.add("hide");
    document.querySelector("#Realistic").classList.add("hide");
    document.querySelector("#Passionate").classList.add("hide");
    document.querySelector("#Adventurous").classList.add("hide");
    document.querySelector("#Perseverant").classList.add("hide");
    document.querySelector("#Hopeful").classList.add("hide");
    document.querySelector("#Inspiring").classList.add("hide");

    //animation
    document.querySelector("#family").classList.toggle("familyAnimate");
    document.querySelector("#mouse").classList.add("mouseAnimate");
    document.querySelector(".pc-screen").classList.add("pc-screenAnimate");
  }
}

function loadIllustrations() {
  fetch("js/data.json")
    .then(res => res.json())
    .then(dataAr => {
      //console.log(dataAr);
      dataAr.forEach(obj => {
        //console.log(obj);

        clone = document.querySelector("template").content.cloneNode(true);

        clone.querySelector(".IllustrationBox").id = obj.title;

        const dataFields = clone.querySelectorAll("[data-field]");
        dataFields.forEach(element => {
          //console.log(element);
          const property = element.dataset.field;

          if (element.dataset.field === "image") {
            element.src = "images/" + obj[property];
          } else if (element.dataset.field === "svg") {
            fetch("svg/" + obj[property])
              .then(res => res.text())
              .then(svgData => {
                //console.log(svgData);

                element.innerHTML = svgData;
              });
          } else {
            if (obj.description2 === "") {
              clone.querySelector("[data-field=description2]").style.display =
                "none";
            } else {
              element.textContent = obj[property];
            }
            element.textContent = obj[property];
          }
        });

        document.querySelector("#illustration-svg").appendChild(clone);
      });
      const illustrationSections = document.querySelectorAll(
        ".IllustrationBox"
      );
      //console.log(illustrationSections);
      illustrationSections.forEach(section => {
        //console.log(section);
        section.classList.add("hide");
      });
    });
}
