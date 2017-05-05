// Save original console object
var _console = global.console

// Overwrite the object with color logs
var colors = [{name: 'log',
  color: '\033[0m'
},{name: 'info',
  color: '\033[36m'
},{name: 'warn',
  color: '\033[33m'
},{name: 'error',
  color: '\033[31m'
}]

colors.forEach((mode) => {
  return global[mode.name] = function() {
    var args = arguments
    // _console.log(args, mode)
    args[0] = mode.color +args[0] + '\x1b[0m'
    // _console.log(args, mode)
    return _console[mode.name].apply(null, args)
  }
})
