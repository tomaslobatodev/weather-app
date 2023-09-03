const cityInput = document.getElementById("cityinput")
const fetchButton = document.getElementById("fetchbutton")
const output = document.getElementById("output")

const getWeather = async (input) => {
  try {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=419fc301be3543d19c1124810230309&q=${input}`)
    const data = await response.json()
    return data
  } catch (err) {
    output.textContent = "Error"
  }
}

const showResults = (data) => {
  const time = data.location.localtime

  output.style.display = "flex"
  document.getElementById("place").textContent = `${data.location.name}, ${data.location.country}`
  document.getElementById("condition").textContent = `${data.current.condition.text}` 
  document.getElementById("temp").textContent = `${data.current.temp_c}C°`
  document.getElementById("hour").textContent = `Hour: ${time.substring(time.indexOf(" ") + 1)}`
  document.getElementById("feelslike").textContent = `Feels like: ${data.current.feelslike_c}C°`
  document.getElementById("wind").textContent = `Wind speed: ${data.current.wind_kph}kph`
  document.getElementById("humidity").textContent = `Humidity: ${data.current.humidity}`
}

fetchButton.addEventListener("click", async (ev) => {
  ev.preventDefault()
  const city = cityInput.value
  const data = await getWeather(city)
  showResults(data)
})

