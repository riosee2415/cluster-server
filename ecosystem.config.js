module.exports = {
  apps: [
    {
      name: "test",
      script: "./src/app.js",
      instances: 0,
      exec_mode: "cluster",
    },
  ],
};
