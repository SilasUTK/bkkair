module.exports = {
  apps: [
    {
      name: "bkkair-api",
      cwd: "./backend",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: 5001
      }
    },
    {
      name: "bkkair-web",
      cwd: ".",
      script: "npm",
      args: "run start -- -p 3000",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
