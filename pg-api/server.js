let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');
let cors = require('cors');
//let multer = require('multer'); //for forms/images
const PORT = 3001;

let app = express();
app.use(cors());

//connect to PG DB
let pool = new pg.Pool({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    database: 'reactscheduler'
})

//app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(morgan('dev'));



//const upload = multer({dest: 'uploads/'}); //where multer will store all incoming files

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


  app.get('/api/users', (req,res) => {
      pool.connect((err, db, done) => {
          if(err){
              return res.status(400).send(err)
          }
          else {
              db.query('SELECT * FROM USERS', (err, table) => {
                  done();
                  if(err){
                    return res.status(400).send(err)
                  }
                  else {
                      return res.status(200).send(table.rows)
                  }
              })
          }
      })
  })
  //build out post
  app.post('/api/new-user', (req, res) => {
      console.log(JSON.parse(JSON.stringify(req.body)));

      let fname = req.body.first_name;
      let lname = req.body.last_name;
      let location = req.body.location;
      let pod = req.body.pod;
      let title = req.body.title;
      let date = req.body.startDate;
      let email = req.body.email;

      let values = [fname, lname, location, pod, title, date, email]

      pool.connect((err, db, done) => {
            if (err) {
                console.log("Error: " + err);
                res.status(400).send(err);
            } else {
                db.query('INSERT INTO USERS("FirstName", "LastName", "Location", "Team", "Title", "StartDate", "email") VALUES($1, $2, $3, $4, $5, $6, $7)', [...values], (err, table) => {
                    if (err) {
                      //  console.log(err);
                        res.status(400).send(err);
                    } else {
                        console.log('Data inserted');
                        db.end();//close db
                        res.status(201).send({message:'Data inserted!'});
                    }
                })
            }
        })

  })

  app.delete('/api/users/remove/:id', (req,res) => {
      const id = req.params.id;
     // console.log(id);

     pool.connect((err,db,done) => {
         if(err) {
             return res.status(400).send(err);
         } else {
             db.query('DELETE FROM users WHERE id = $1', [id], (err, result) => {
                 if(err) {
                    return res.status(400).send(err); 
                 } else {
                     return res.status(200).send({message: 'success in deleting record'});
                 }

             })
         }
     })
  });

  app.listen(PORT, () => console.log('* Listening on Port * : ' + PORT));