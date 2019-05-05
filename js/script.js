window.addEventListener("DOMContentLoaded", loadTimelineSVG);

function loadTimelineSVG() {
  console.log("");

  fetch("../svg/timeline.svg")
    .then(response => response.text())
    .then(svgData => {
      console.log(svgData);

      document.querySelector("#time-line-svg").innerHTML = svgData;
    });
}
