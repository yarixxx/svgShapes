var SVGNS = "http://www.w3.org/2000/svg";
var XLINKNS = "http://www.w3.org/1999/xlink";
var ROOT = document.documentElement;

var airplaneList = document.getElementById("airplaneList");
var animationFrame = document.getElementById("animationFrame");
var plane;
var motion;

airplaneList.addEventListener("click", function(event) {
  if (!plane) {
    plane = createAirplane();
  } else {
    plane.setAttributeNS(XLINKNS, "xlink:href", "#" + event.toElement.parentNode.parentNode.id);
  }
  if (!motion) {
    motion = createAirplaneMotion();
    plane.appendChild(motion);
  }
  motion.beginElement();
});

function createAirplane() {
  var newElement = document.createElementNS(SVGNS, 'use');
  newElement.setAttributeNS(XLINKNS, "xlink:href", "#" + event.toElement.parentNode.parentNode.id);
  animationFrame.appendChild(newElement);
  return newElement;
}

function createAirplaneMotion() {
  var newElement = document.createElementNS(SVGNS, 'animateMotion');
  newElement.setAttribute("dur", "15s");
  newElement.setAttribute("rotate", "auto");
  newElement.setAttribute("fill", "freeze");
  newElement.setAttribute("additive", "replace");
  newElement.setAttribute("repeatCount", "1");

  var mpath = document.createElementNS(SVGNS, 'mpath');
  mpath.setAttributeNS(XLINKNS, "xlink:href", "#trap");
  newElement.appendChild(mpath);
  return newElement;
}

