"use strict";

const { getFeatureFromAction } = require("../../../lib/getFeatureFromAction");

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.location) {
        data.geojson = await getFeatureFromAction(data);
        console.log(data.geojson);
      }
    },
    afterUpdate: async (data) => {
      if (data.location) {
        data.geojson = await getFeatureFromAction(data);
        console.log(data.geojson);
      }
    },
  },
};
