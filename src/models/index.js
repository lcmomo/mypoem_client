const context = require.context('./', false, /\.js$/);
console.log(context);
export default context
  .keys()
  .filter(item => item !== './index.js')
  .map(key => context(key));
