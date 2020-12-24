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
        category: action.categories.length ? action.categories[0].slug : "",
      },
      geometry: {
        type: "Point",
        coordinates: [coordinates.lng, coordinates.lat],
      },
    };
    console.log("categories were");
    console.log(JSON.stringify(action.categories, null, 2));
    return marker;
  }
  console.log("could not get coordinates for " + action.title);
  return null;
}

module.exports.getFeatureFromAction = getFeatureFromAction;
