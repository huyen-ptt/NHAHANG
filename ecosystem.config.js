module.exports = {
  apps: [
    {
      name: 'thekitchen',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 4011',
      cwd: 'C:\\inetpub\\wwwroot\\TheKitchen\\NHAHANG',
      env: {
        NODE_ENV: 'production',
        PORT: 4011
      }
    }
  ]
};
