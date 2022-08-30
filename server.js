const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const session = require('express-session');

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 3001;

const controllers = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'diningSecret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

// handlebar engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// // delete later
// let count = 0;

// io.on('connection', (socket) => {
//     console.log('New WebSocket connection')

//     // server to client - review.js in js folder
//     socket.emit('countUpdated', count)

//     socket.on('increment', () => {
//         count++

//         // emit to all connections
//         io.emit('countUpdated', count)
//     })
// });

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    socket.emit('message', 'Welcome')

    socket.on('sendMessage', (message) => {
        io.emit('message', message)
    })

});

app.use(controllers);

sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});