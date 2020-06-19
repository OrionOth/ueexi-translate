const { app, BrowserWindow, ipcMain } = require('electron')

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    // icon: "./icon.png",
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('frontend/index.html')
  win.setMenu(null)
  win.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()
})