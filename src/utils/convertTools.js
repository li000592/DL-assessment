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

function timeConverter(time) {
  return new Date(time * 1000).toUTCString().slice(0, 22)
}

function queryFilter(array, key) {
  return array.filter((element) => {
    return Object.values(element).some((s) =>
      typeof s === "object"
        ? timeConverter(s.seconds).toLowerCase().includes(key.toLowerCase())
        : ("" + s).toLowerCase().includes(key.toLowerCase())
    )
  })
}
function sortArrayByCreateDay(data) {
  return data.sort((a, b) => b.createAt.seconds - a.createAt.second)
}
export { isDay, fullNameToNameInitials, randomColourString, timeConverter, queryFilter, sortArrayByCreateDay }
