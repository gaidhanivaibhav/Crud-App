let express = require('express');
const createError = require('http-errors');
path = require('path');
mongoose = require('mongoose');
cors = require('cors');
bodyParser = require('body-parser');
dbConfig = require('./db/database');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://0.0.0.0:27017/restapi', {
    useNewUrlParser: true,
}).then(() => {
    console.log('Database connected')
},
    error => {
        console.log('Database could not be connected :' + error)
    }
)


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(cors());

const userRoute = require('./routes/student.routes')

app.use('/student', userRoute);

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
    console.log('port connected to :' + port)
})

app.use((req, res, next) => {
    next(createError(404));

});

app.get('/', (req, res) => {
    res.send('invalid endpoint')
});

app.use(function (err,req,res,next){
    if(!err.statuscode)err.statuscode = 500;
    res.status(err.statuscode).send(err.message);
})