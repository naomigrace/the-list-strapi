const { getCoordinates } = require("./getCoordinates");

async function getFeatureFromAction(action) {
  const coordinates = await getCoordinates(action.location);
  console.log(action.categories);
  if (coordinates) {
    const marker = {
      type: "Feature",
      properties: {
        cluster: false,
        title: action.title,
        slug: action.slug,
        categories: action.categories.map((cat) => cat.id),
      },
      geometry: {
        type: "Point",
        coordinates: [coordinates.lng, coordinates.lat],
      },
    };
    return marker;
  }
  console.log("could not get coordinates for " + action.title);
  return null;
}

module.exports.getFeatureFromAction = getFeatureFromAction;
