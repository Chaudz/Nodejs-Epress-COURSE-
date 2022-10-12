const os = require('os')

console.log(os.userInfo())

// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMen: os.freemem(),
}
console.log(currentOS)