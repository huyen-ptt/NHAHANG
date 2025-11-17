module.exports = {
  apps: [
    {
      name: 'thekitchen',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3001',
      cwd: 'E:\\TheKitchen_2',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    }
  ]
};
