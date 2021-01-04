module.exports = {
  apps: [
    {
      name: "CLUSTER_TEST",
      script: "pm2 start -i 0 --name 'test' -- run start",
      instances: 0,
      exec_mode: "cluster",
    },
  ],
};
