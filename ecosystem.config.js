module.exports = {
    apps: [{
      name: 'Proxy_Justan',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-3-17-68-248.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/FEC.pem',
        ref: 'origin/master',
        repo: 'https://github.com/baebay/Proxy_Justan.git',
        path: '/home/ubuntu/Proxy_Justan',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }