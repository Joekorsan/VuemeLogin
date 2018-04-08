let knex = require('../db/knex.js');

module.exports = {
  authenticate : function(req,res){
    let email = req.body.email;
    let password = req.body.password;
    knex('users')
    .where('users.email' , `${email}`)
    .then((result)=>{
      if(result.length > 0 && result[0].password == password){
        // req.session.user = email;
        console.log("authenticated",email);
        // res.json({ userName: email });
        res.redirect('http://localhost:3000');
      }else{
        res.render('login',{msg: 'incorrect email or password'})
      }

    })
    .catch((err)=>{
      console.log(err);
    })
  }
}
