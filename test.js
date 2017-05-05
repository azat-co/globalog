require('./index.js')
console.log('See if looks colored!')
log('i am normal', 'yes')
error('i am an error')
log('hello', 'world')                      // colored
info(['foo', 'bar'])                       // colored
warn('baz is deprecated.')                 // colored
error('HTTP/1.1 400 Bad Request')          // colored
console.error('HTTP/1.1 400 Bad Request')          // normal console.error
console.log(log.toString())
