module.exports = {
  apps: [
    {
      name: "CLUSTER_TEST",
      script: "babel-node ./app.js",
      instances: 0,
      exec_mode: "cluster",
    },
  ],
};
