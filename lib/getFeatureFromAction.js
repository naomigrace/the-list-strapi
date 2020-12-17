const { getCoordinates } = require("./getCoordinates");

async function getFeatureFromAction(action) {
  const coordinates = await getCoordinates(action.location);

  if (coordinates) {
    const marker = {
      type: "Feature",
      properties: {
        cluster: false,
        title: action.title,
        slug: action.slug,
        category: action.categories[0].title,
      },
      geometry: {
        type: "Point",
        coordinates: [coordinates.lng, coordinates.lat],
      },
    };
    return marker;
  }
  return null;
}

module.exports.getFeatureFromAction = getFeatureFromAction;
