var glob = require('glob')

if (glob.sync('public').length > 0) {
  require('./lint')
  require('./clean-app')
  require('./build-app')
}
else {
  require('./build-module')
}
