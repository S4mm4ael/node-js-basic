const os = require('os')
const cluster = require('cluster')

const cpus = os.cpus()

if (cluster.isMaster) {
  for (let i = 1; i < cpus.length - 4; i++) {
    cluster.fork()
  }
  cluster.on('exit', (worker, code, signal) => {
    if (signal) {
      console.log(`worker was killed by signal: ${signal}`);
    } else if (code !== 0) {
      console.log(`worker exited with error code: ${code}`);
    } else {
      console.log('worker success!');
    }
  })
} else {
  console.log('Worker with id', process.pid)

  setInterval(() => {
    console.log('Worker with id still working', process.pid)
  }, 5000)
}


