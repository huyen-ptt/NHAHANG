module.exports = {
  apps: [
    {
      name: 'thekitchen',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 4011',
      cwd: 'E:\\TheKitchen_2',
      env: {
        NODE_ENV: 'production',
        PORT: 4011
      }
    }
  ]
};
