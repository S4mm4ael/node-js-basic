const os = require('os')
const cluster = require('cluster')

const cpus = os.cpus()

if (cluster.isMaster) {
  for (let i = 1; i < cpus.length - 2; i++) {
    cluster.fork()
  }
} else {
  console.log('Worker with id', process.pid)

  setInterval(() => {
    console.log('Worker with id still working', process.pid)
  }, 5000)
}


