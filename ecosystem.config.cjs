module.exports = {
  apps: [
    {
      name: "bkkair-backend",
      cwd: "./backend",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
        PORT: 5001
      }
    },
    {
      name: "bkkair-frontend",
      cwd: "./frontend",
      script: "npm",
      args: "run start -- -p 3000",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
