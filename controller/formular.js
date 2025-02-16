const data={
    users: [
        {id: 0, ime: "Vladimir", prezime: "Damjanoski"},
        {id: 1, ime: "Riste", prezime: "Zlatev"},
        {id: 2, ime: "Dejan", prezime: "Kitanoski"},
        {id: 3, ime: "Nadica", prezime: "Jordanova"},
        {id: 4, ime: "Aleksandar", prezime: "Milosheski",},
    ],
};

exports.getView = (req,res)=>{
    res.render(`index`, data);
};

exports.postForm=(req,res)=>{
    console.log(req.body);
    const newUser={
        id: req.body.id,
        ime: req.body.ime,
        prezime: req.body.prezime,
    };
    data.users.push(newUser);
    res.render(`index`, data);

};