module.exports = {
  apps: [
    {
      name: `CLUSTER_TEST`,
      script: `pm2 start npm -- run start`,
      instances: 0,
      exec_mode: `cluster`,
    },
  ],
};
