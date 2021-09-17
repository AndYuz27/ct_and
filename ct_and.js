let lem = require('fs')
function Person({ 
    name,
    surname,
    date,
    gender}) 
    {
    this.name = name;
    this.surname = surname;
    this.date = new Date(date);
    this.gender = gender;
    this.documents = `${name[0]}. ${surname}`;
};
let dat1;
lem.readFile('ppl.csv', function (err, Data) {
    dat1 = Data .toString() .split(';;;;') .filter(e => e) .map(e => e.replace('\r\n','').split(';')).slice(1);
    let pers = dat1.map(([name, surname, gender, date]) => new Person({ name, surname, surname, date}));
    console.log(pers);
    console.log(pers.sort((a, b) => b.date - a.date).map(person => person.documents));
    console.log(pers.filter(person => person.gender === 'male').map(person => person.documents));
    console.log(pers.filter(person => person.gender === 'female').map(person => person.documents));
});


