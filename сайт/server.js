const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const formData = new URLSearchParams(body);
            console.log(formData.toString());
            res.end('Данные получены успешно!');
        });
    } else {
        res.statusCode = 405;
        res.end('Метод не поддерживается');
    }
}).listen(5500, '127.0.0.1', () => {
    console.log('Сервер запущен по адресу http://127.0.0.1:5500');
});