window.addEventListener("DOMContentLoaded", loadTimelineSVG);
window.addEventListener("DOMContentLoaded", loadIllustrations);

function loadTimelineSVG() {
  //console.log("");

  fetch("../svg/timeline.svg")
    .then(response => response.text())
    .then(svgData => {
      //console.log(svgData);

      document.querySelector("#time-line-svg").innerHTML = svgData;
    });
}

function loadIllustrations() {
  fetch("js/data.json")
    .then(res => res.json())
    .then(dataAr => {
      //console.log(dataAr);
      dataAr.forEach(obj => {
        //console.log(obj);

        clone = document.querySelector("template").content.cloneNode(true);

        const dataFields = clone.querySelectorAll("[data-field]");
        dataFields.forEach(element => {
          console.log(element);
          const property = element.dataset.field;
          //console.log(property);
          // element.textContent = obj[field];

          if (element.dataset.field === "image") {
            element.src = "../images/" + obj[property];
            const imageI = "../images/" + obj[property];
            console.log(imageI);
          } else if (element.dataset.field === "svg") {
            fetch("../svg/" + obj[property])
              .then(res => res.text())
              .then(svgData => {
                console.log(svgData);

                element.innerHTML = svgData;
              });
          } else {
            element.textContent = obj[property];
          }
        });

        document.querySelector("#illustration-svg").appendChild(clone);
      });
    });
}
