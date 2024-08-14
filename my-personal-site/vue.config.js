const { defineConfig } = require('@vue/cli-service')
module.exports = {
  devServer: {
    https: false, // Ensure HTTPS is turned off
    port: 8080,   // Ensure the correct port is specified
    client: {
      webSocketURL: {
        port: 8080,
        hostname: 'localhost',
        pathname: '/ws',
        protocol: 'ws',
      },
    },
    allowedHosts: 'all', // Allow connections from any origin
  }
}
