// Save original console object
var _console = global.console

// Overwrite the object with color logs
var colors = [{name: 'log',
  color: '\u001b[0m'
},{name: 'info',
  color: '\u001b[36m'
},{name: 'warn',
  color: '\u001b[33m'
},{name: 'error',
  color: '\u001b[31m'
}]

colors.forEach((mode) => {
  return global[mode.name] = function() {
    var args = arguments
    // _console.log(args, mode)
    args[0] = mode.color +args[0] + '\u001b[0m'
    // _console.log(args, mode)
    return _console[mode.name].apply(null, args)
  }
})
