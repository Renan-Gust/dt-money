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

const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('server.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 5000;

server.use(middlewares);
server.use('/api', router);

// Certifique-se de que o caminho para a pasta de saída do Vite esteja correto
const viteBuildPath = path.join(__dirname, 'dist');

// Defina a rota raiz para o servidor Vite
server.use(jsonServer.static(viteBuildPath));
server.use('*', (req, res) => {
    res.sendFile(path.join(viteBuildPath, 'index.html'));
});

server.listen(port, () => {
    console.log(`JSON Server and Vite App are running on port ${port}`);
});