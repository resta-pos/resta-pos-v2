const { app, BrowserWindow, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
const log = require('electron-log');

require('./src/db');
const createPDF = require('./src/printer')

let mainWindow;


const data = {
  title: "A new Brazilian School",
  date: "05/12/2018",
  name: "Rodolfo Luis Marcos",
  age: 28,
  birthdate: "12/07/1990",
  course: "Computer Science",
  obs: "Graduated in 2014 by Federal University of Lavras, work with Full-Stack development and E-commerce."
}

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    show: false,
  });
  mainWindow.loadFile('index.html');
  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  log.info('checkForUpdatesAndNotify')

  mainWindow.once('ready-to-show', () => {
    log.info('ready to show')
    mainWindow.show();
    createPDF(data);
    autoUpdater.checkForUpdatesAndNotify();
  });
}

app.on('ready', () => {
  log.info('hereee')
  createWindow();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('app_version', (event) => {
  log.info('got app version')
  event.sender.send('app_version', { version: app.getVersion() });
});

autoUpdater.on('update-available', () => {
  log.info('update available')
  mainWindow.webContents.send('update_available');
});

autoUpdater.on('update-downloaded', () => {
  log.info('update downloaded')
  mainWindow.webContents.send('update_downloaded');
});

ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});

autoUpdater.on("error", err => {
  log.error("AutoUpdater error");
  log.error(err);
});

autoUpdater.on("update-not-available", err => {
  log.error("AutoUpdater not available");
  log.error(err);
});
