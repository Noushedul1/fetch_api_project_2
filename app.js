// start employee 1
var btn = document.getElementById('leanneGraham');
btn.addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/users').
    then((res)=> res.json())
    .then((data)=>{
    //    console.log(data[0]);
    var outputs = '<h2>Leanne Graham</h2>';
    outputs += `
        <div class="leanneGraham">
            <p>Name : ${data[0].name}</p>
            <p>Email : ${data[0].email}</p>
            <p>City : ${data[0].address.city}</p>
            <p>Zipcode : ${data[0].address.zipcode}</p>
            <p>Latitude : ${data[0].address.geo.lat}</p>
            <p>Longitude : ${data[0].address.geo.lng}</p>
            <p>Phone : ${data[0].phone}</p>
            <p>Company : ${data[0].company.name}</p>
        </div>
    `;
    document.getElementById('leanneGrahamDetails').innerHTML = outputs;
    }).catch((err)=>{
        console.log(err);
    })
});
// end employee 1
// start employee 2
var btn = document.getElementById('ervinHowell');
btn.addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/users').
    then((res)=> res.json())
    .then((data)=>{
    //    console.log(data[0]);
    var outputs = '<h2>Ervin Howell</h2>';
    outputs += `
        <div class="ervinHowell">
            <p>Name : ${data[1].name}</p>
            <p>Email : ${data[1].email}</p>
            <p>City : ${data[1].address.city}</p>
            <p>Zipcode : ${data[1].address.zipcode}</p>
            <p>Latitude : ${data[1].address.geo.lat}</p>
            <p>Longitude : ${data[1].address.geo.lng}</p>
            <p>Phone : ${data[1].phone}</p>
            <p>Company : ${data[1].company.name}</p>
        </div>
    `;
    document.getElementById('ervinHowellDetails').innerHTML = outputs;
    }).catch((err)=>{
        console.log(err);
    })
});
// end employee 2
// start employee 3
var btn = document.getElementById('clementineBauch');
btn.addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/users').
    then((res)=> res.json())
    .then((data)=>{
    //    console.log(data[0]);
    var outputs = '<h2>Ervin Howell</h2>';
    outputs += `
        <div class="ervinHowell">
            <p>Name : ${data[2].name}</p>
            <p>Email : ${data[2].email}</p>
            <p>City : ${data[2].address.city}</p>
            <p>Zipcode : ${data[2].address.zipcode}</p>
            <p>Latitude : ${data[2].address.geo.lat}</p>
            <p>Longitude : ${data[2].address.geo.lng}</p>
            <p>Phone : ${data[2].phone}</p>
            <p>Company : ${data[2].company.name}</p>
        </div>
    `;
    document.getElementById('clementineBauchDetails').innerHTML = outputs;
    }).catch((err)=>{
        console.log(err);
    })
});
// end employee 3
// start employee all 1
var btn = document.getElementById('allemployee');
btn.addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/users').
    then((res)=> res.json())
    .then((data)=>{
    //    console.log(data[0]);
    var outputs = "<h2>All Employee</h2>";
    outputs += `
    <div class="ervinHowell">
        <p><strong>Id : ${data[0].id}</strong></p>
        <p><strong>Name : ${data[0].name}</strong></p>
        <p>Email : ${data[0].email}</p>
        <p>City : ${data[0].address.city}</p>
        <p>Zipcode : ${data[0].address.zipcode}</p>
        <p>Latitude : ${data[0].address.geo.lat}</p>
        <p>Longitude : ${data[0].address.geo.lng}</p>
        <p>Phone : ${data[0].phone}</p>
        <p>Company : ${data[0].company.name}</p>

        <p><strong>Id : ${data[1].id}</strong></p>
        <p><strong>Name : ${data[1].name}</strong></p>
        <p>Email : ${data[1].email}</p>
        <p>City : ${data[1].address.city}</p>
        <p>Zipcode : ${data[1].address.zipcode}</p>
        <p>Latitude : ${data[1].address.geo.lat}</p>
        <p>Longitude : ${data[1].address.geo.lng}</p>
        <p>Phone : ${data[1].phone}</p>
        <p>Company : ${data[1].company.name}</p>

        <p><strong>Id : ${data[2].id}</strong></p>
        <p><strong>Name : ${data[2].name}</strong></p>
        <p>Email : ${data[2].email}</p>
        <p>City : ${data[2].address.city}</p>
        <p>Zipcode : ${data[2].address.zipcode}</p>
        <p>Latitude : ${data[2].address.geo.lat}</p>
        <p>Longitude : ${data[2].address.geo.lng}</p>
        <p>Phone : ${data[2].phone}</p>
        <p>Company : ${data[2].company.name}</p>
    </div>
    `;
    document.getElementById('allemployeeDetails').innerHTML = outputs;
    }).catch((err)=>{
        console.log(err);
    })
});
// end employee all 1