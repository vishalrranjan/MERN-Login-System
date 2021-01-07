const router = require('express').Router();
const User = require('../models/users');

router.route('/').get((req, res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
})

// register
router.route('/register').post((req, res) => {

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({username, email, password});
  newUser.save()
  .then(()=> res.json("user registered."))
  .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/login').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email}, function(err, foundUser){
        if(err){
            console.log(err);
        } else{
            if(foundUser.password === password){
                // res.render('welcome');
                console.log(err);
            }
        }
    })
    .then(()=> res.json("user logged."))
    .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;
