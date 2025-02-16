const express = require('express');
const formular = require(`./controller/formular`)
const app = express();


app.set(`view engine`, `ejs`);
app.use(express.urlencoded({extended: true}))
app.use(express.static(`public`));



// app.get(`/prisutni`,)
// app.get(`/otsutni`,)
app.get(`/dodadiStudent`, (req,res)=>{
  res.render(`dodadiStudent`);
})
app.get(`/`, formular.getView);
app.post(`/dodadiStudent`, formular.postForm);

const port = 10000;
app.listen(port, (err)=>{
  if (err ) return console.log(err.message);
  console.log(`Service started on port ${port}`)
});