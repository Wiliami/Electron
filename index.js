const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({

    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);
}); 

//ARQUIVO
// var file = {};


// function createNewFile() {
//   file = {
//       name: 'novo.arquivo.txt',
//       content: '',
//       saved: false,
//       path: app.getPath('documents')+'/novo-arquivo.txt'
//   };
// }

// Template Menu
//const templateMenu = [
//     {
//         label: 'Arquivo',
//         submenu: [
//             {
//                 label: 'Novo',
//                 click() {
//                     createNewFile();
//                 }
//             },
//             {
//                 label: 'Abrir'
//             },
//             {
//                 label: 'Salvar'
//             },
//             {
//                 label: 'Salvar como'
//             },
//             {
//                 label: 'Fechar',
//                 role: process.platform === 'darwin' ? 'close' : 'quit'
//             }
//         ]
//     }
// ]; 


// const menu = Menu.buildFromTemplate(templateMenu);
// Menu.setApplicationMenu(menu);
