import firebase from "firebase"
function isDay() {
  const hours = new Date().getHours()
  return hours >= 6 && hours < 18
}

function fullNameToNameInitials(name) {
  return name.split(" ").map((n) => n[0])
}

function randomColourString() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16)
}
// codes from https://css-tricks.com/snippets/javascript/random-hex-color/

// codes form https://stackoverflow.com/questions/3177836/how-to-format-time-since-xxx-e-g-4-minutes-ago-similar-to-stack-exchange-site
function timeConverter(time) {
  return Date(time).slice(0, 21)
}
export { isDay, fullNameToNameInitials, randomColourString, timeConverter }
