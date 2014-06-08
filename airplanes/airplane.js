var SVGNS = "http://www.w3.org/2000/svg";
var XLINKNS = "http://www.w3.org/1999/xlink";
var ROOT = document.documentElement;

var airplaneList = document.getElementById("airplaneList");
var animationFrame = document.getElementById("animationFrame");
var plane;
var motion;
var raise;

airplaneList.addEventListener("click", function(event) {
  if (!plane) {
    plane = createAirplane(event.toElement.parentNode.parentNode.id);
  } else {
    plane.setAttributeNS(XLINKNS, "xlink:href", "#" + event.toElement.parentNode.parentNode.id);
  }
  if (!motion) {
    motion = createAirplaneMotion(15);
    plane.appendChild(motion);
  }
  if (!raise) {
    raise = createAirplaneRaise();
    plane.appendChild(raise);
  }

  raise.beginElement();
  motion.beginElement();
});

function createAirplane(airplaneId) {
  var newElement = document.createElementNS(SVGNS, 'use');
  newElement.setAttributeNS(XLINKNS, "xlink:href", "#" + airplaneId);
  animationFrame.appendChild(newElement);
  return newElement;
}

function createAirplaneRaise() {
  var newElement = document.createElementNS(SVGNS, 'animateTransform');
  newElement.setAttribute("attributeName", "transform");
  newElement.setAttribute("attributeType", "XML");
  newElement.setAttribute("fill", "freeze");
  newElement.setAttribute("additive", "replace");
  newElement.setAttribute("type", "scale");
  newElement.setAttribute("from", "1");
  newElement.setAttribute("begin", "2s");
  newElement.setAttribute("to", "1.5");
  newElement.setAttribute("dur", "2s");
  newElement.setAttribute("repeatCount", "1");
  return newElement;
}

function createAirplaneDown(begin) {
  var newElement = document.createElementNS(SVGNS, 'animateTransform');
  newElement.setAttribute("attributeName", "transform");
  newElement.setAttribute("attributeType", "XML");
  newElement.setAttribute("fill", "freeze");
  newElement.setAttribute("additive", "replace");
  newElement.setAttribute("type", "scale");
  newElement.setAttribute("from", "1.5");
  newElement.setAttribute("to", "1");
  newElement.setAttribute("dur", "2s");
  newElement.setAttribute("repeatCount", "1");
  return newElement;
}

function createAirplaneMotion(duration) {
  var newElement = document.createElementNS(SVGNS, 'animateMotion');
  newElement.setAttribute("dur", duration + "s");
  newElement.setAttribute("rotate", "auto");
  newElement.setAttribute("fill", "freeze");
  newElement.setAttribute("additive", "replace");
  newElement.setAttribute("repeatCount", "1");

  var mpath = document.createElementNS(SVGNS, 'mpath');
  mpath.setAttributeNS(XLINKNS, "xlink:href", "#trap");
  newElement.appendChild(mpath);
  return newElement;
}

