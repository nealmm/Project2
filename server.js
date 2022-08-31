const express        = require('express');
const session        = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize      = require("./config/connection");
const exphbs         = require('express-handlebars');
const path           = require('path');
const routes         = require('./controllers');
const helpers        = require('./utils/helpers');

const PORT = process.env.PORT || 3001;

const app = express();

const sess = {
    secret: 'purple extraterrestrial Malthus',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
});