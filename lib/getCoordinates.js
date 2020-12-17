const fetch = require("node-fetch");

async function getCoordinates(location) {
  const googleKey = process.env.GOOGLE_API_KEY;
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      location
    )}&key=${googleKey}`
  );

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch coordinates for " + location);
  }

  return json.results[0].geometry.location;
}

module.exports.getCoordinates = getCoordinates;
