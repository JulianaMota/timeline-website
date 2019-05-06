window.addEventListener("DOMContentLoaded", loadTimelineSVG);
window.addEventListener("DOMContentLoaded", loadIllustrations);

function loadTimelineSVG() {
  //console.log("");

  fetch("../svg/timeline.svg")
    .then(response => response.text())
    .then(svgData => {
      //console.log(svgData);

      document.querySelector("#time-line-svg").innerHTML = svgData;

      const iconsArray = document.querySelectorAll(".btn-Icon");
      console.log(iconsArray);
      iconsArray.forEach(eachIcon);
    });
}

function eachIcon(icon) {
  console.log(icon);
  icon.addEventListener("click", iconClicked);
}

function iconClicked(event) {
  console.log(event.target.classList);
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
            element.src = "../images/" + obj[property];
            const imageI = "../images/" + obj[property];
            //console.log(imageI);
          } else if (element.dataset.field === "svg") {
            fetch("../svg/" + obj[property])
              .then(res => res.text())
              .then(svgData => {
                //console.log(svgData);

                element.innerHTML = svgData;
              });
          } else {
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
