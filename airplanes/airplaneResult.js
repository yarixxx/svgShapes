var SVGNS = "http://www.w3.org/2000/svg";
var XLINKNS = "http://www.w3.org/1999/xlink";
var ROOT = document.documentElement;
var airplaneList = document.getElementById("airplaneList");
var animationFrame = document.getElementById("animationFrame");
var trap = document.getElementById("trap");

var plane;
var motion;

airplaneList.addEventListener("click", function(event) {
  if (!plane) {
    plane = createAirplane(event.toElement.parentNode.parentNode.id);
  } else {
    plane.setAttributeNS(XLINKNS, "xlink:href", "#" + event.toElement.parentNode.parentNode.id);
  }
  if (!motion) {
    console.log(event);
    motion = createAirplaneMotion(10);
    plane.appendChild(motion);
  }

  trap.setAttribute("d", "M " + event.x + "," + event.y + " C " + event.x + "," + event.y + "  -159.9,1013 509.7,802.9 1179,592.4 340.3,366.9 " + event.x + "," + event.y)

  motion.beginElement();
});

function createAirplane(airplaneId) {
  var newElement = document.createElementNS(SVGNS, 'use');
  newElement.setAttributeNS(XLINKNS, "xlink:href", "#" + airplaneId);
  animationFrame.appendChild(newElement);
  return newElement;
}

function createAirplaneMotion(duration) {
  var newElement = document.createElementNS(SVGNS, 'animateMotion');
  newElement.setAttribute("dur", duration + "s");
  newElement.setAttribute("rotate", "auto");
  newElement.setAttribute("fill", "remove"); // freeze
  newElement.setAttribute("additive", "replace");
  newElement.setAttribute("repeatCount", "1");

  var mpath = document.createElementNS(SVGNS, 'mpath');
  mpath.setAttributeNS(XLINKNS, "xlink:href", "#trap");
  newElement.appendChild(mpath);
  return newElement;
}
