/** @type {import('next').NextConfig}    */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "hiten",
        mongodb_password: "hitman",
        mongodb_clustername: "atlascluster",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "hiten",
      mongodb_password: "hitman",
      mongodb_clustername: "atlascluster",
      mongodb_database: "my-site-prod",
    },
  };
};

module.exports = nextConfig;
