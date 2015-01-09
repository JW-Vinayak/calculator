var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var path = require('path');
// Report crashes to our server.
require('crash-reporter').start();
var monaca;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
  });

  // This method will be called when atom-shell has done everything
  // initialization and ready for creating browser windows.
  app.on('ready', function() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 275, height: 340});

    // and load the index.html of the app.
    //console.log("path join is " + 'file://' +  path.join(__dirname,'ui','view','index.html'));
    mainWindow.loadUrl(path.join(__dirname,'index.html'));

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
    });


  });
