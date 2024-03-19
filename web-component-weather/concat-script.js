const fs = require('fs-extra');
const concat = require('concat');

build = async () =>{
  const files = [
    './dist/web-component-weather/runtime.js',
    './dist/web-component-weather/polyfills.js',
    './dist/web-component-weather/main.js'
  ];

  await fs.ensureDir('widget');
  await concat(files, 'widget/current-weather.js');
}
build();
