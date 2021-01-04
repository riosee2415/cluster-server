module.exports = {
  apps: [
    {
      name: "CLUSTER_TEST",
      script: "./app.js",
      instances: 0,
      exec_mode: "cluster",
    },
  ],
};
