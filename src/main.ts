import { app, BrowserWindow } from 'electron';
import path from 'path';

const createWindow = (): void => {
  // レンダープロセスとなる、ウィンドウオブジェクトを作成する。
  const win = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      contextIsolation: true,
    },
  });

  // 読み込む index.html
  // tsc でコンパイルするので、出力先の dist の相対パスで指定する。
  win.loadFile('./index.html');

  // 開発者ツールを起動する
  win.webContents.openDevTools();
};

// Electronの起動準備が終わったら、ウィンドウを作成する。
app.whenReady().then(createWindow);

// すべてのウィンドウが閉じた時の処理
app.on('window-all-closed', () => {
  // macOS以外では、メインプロセスを停止する
  // macOSでは、ウィンドウが閉じてもメインプロセスは停止せず
  // ドックから再度ウィンドウが表示されるようにする。
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // macOSでは、ウィンドウが閉じてもメインプロセスは停止せず
  // ドックから再度ウィンドウが表示されるようにする。
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
