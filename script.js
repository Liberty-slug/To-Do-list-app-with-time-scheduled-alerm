let tbody = document.getElementById("tbody");



// fetch function
fetch("http://localhost:3000/schedule")
.then(res => res.json())
.then(json => {
    json.map(data => {
        tbody.append(table_function(data));
    })
})



// Create a table
function table_function({id, todo, date, time}){
    let td = document.createElement('tr');
    td.innerHTML = `
        <td id="sn">${id}</td>
        <td id="tbtitle">${todo}</td>
        <td id="tbdate">${date}</td>
        <td id="tbtime">${time}</td>
        <td>Action</td>
    `;
    return td;
}
