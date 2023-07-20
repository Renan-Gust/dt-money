// // JSON Server module
// const jsonServer = require('json-server');
// const { exec } = require('child_process');

// const server = jsonServer.create();
// const router = jsonServer.router('server.json');

// // Inicie o servidor Vite
// const viteProcess = exec('npm run dev'); 

// // Make sure to use the default middleware
// const middlewares = jsonServer.defaults();

// server.use(middlewares);
// // Add this before server.use(router)
// // server.use(
// // Add custom route here if needed
// // jsonServer.rewriter({
// //     '/api/*': '/$1',
// // })
// // );
// server.use('/api', router);


// server.get('*', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// // Listen to port
// server.listen(3000, () => {
//     console.log('JSON Server is running');
// });

// process.on('SIGINT', () => {
//     viteProcess.kill('SIGINT');
//     server.close();
// });

// // Export the Server API
// module.exports = server;

const { exec } = require('child_process');
const jsonServer = require('json-server');
const path = require('path');

// Caminho para a pasta 'dist' onde o Vite irá gerar o build
const viteBuildPath = path.join(__dirname, 'dist');

// Inicie o servidor Vite
const viteProcess = exec('vite build && vite preview', { cwd: viteBuildPath });

// Inicie o json-server
const jsonServerProcess = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

jsonServerProcess.use(middlewares);
jsonServerProcess.use('/api', router);

const PORT = process.env.PORT || 5000;
jsonServerProcess.listen(PORT, () => {
    console.log(`JSON Server is running on port ${PORT}`);
});

// Finalize os processos Vite e json-server ao final do script
process.on('SIGINT', () => {
    viteProcess.kill('SIGINT');
    jsonServerProcess.close();
});
