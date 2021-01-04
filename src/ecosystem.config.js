module.exports = {
  apps: [
    {
      name: `CLUSTER_TEST`,
      script: `babel-node ./app.js`,
      instances: 0,
      exec_mode: `cluster`,
      watch: true,
      ignore_watch: ["node_modules"],
      interpreter: "./node_modules/.bin/babel-node",
      source_map_support: true,
    },
  ],
};
