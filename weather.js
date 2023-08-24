//Weather API using package axios and open source weather url LINK

const axios = require("axios");
const moment = required("moment");
async function getWeather() {
  try {
    const response = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
    );
    const { data } = response;
    const currentDateAndTime = new Date().toISOString();
    console.log({ currentDateAndTime });
    const { daily } = data;
    const { sunrise, sunset } = daily;
    const sr = moment(sunrise.toString()).format("LLLL");
    const ss = moment(sunset.toString().format("LLLL"));
    return { sunrise: sr, sunset: ss };
  } catch (error) {
    console.error(error);
  }
}

async function result() {
  const sunStatus = await getWeather();
  console.log({ sunStatus });
}

result();
