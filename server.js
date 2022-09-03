
    var title = document.getElementById("title");
    var date = document.getElementById("date");
    var time = document.getElementById("time");
    var add_btn = document.getElementById("add-btn");

    add_btn.addEventListener('click', function(){
        
        const newschedule = {
            "id": 5,
            "todo": title.value,
            "date": date.value,
            "time": time.value
        };
        const jsonString = JSON.stringify(newschedule);
        alert(jsonString);

       
    })

    // const newschedule =  {
    //     "id": 7,
    //     "todo": "I love my life always",
    //     "date": "28-09-2022",
    //     "time": "12:00"
    // };

    // const fs = require('fs');

    // const saveData = (newschedule) => {
    //     const finished = (error) =>{
    //         if(error){
    //             console.error(error)
    //             return;
    //         }
    //     }
    //     const jsonString = JSON.stringify(newschedule, null, 2);
    //     fs.writeFile('./Main/db.json', jsonString, finished)
    // }
    // saveData(newschedule);