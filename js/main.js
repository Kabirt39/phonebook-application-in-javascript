
function deletePhoneBookData() {
    var buttons = document.querySelectorAll('.delete');
    for (var i = 0; i < buttons.length; i++) {
        var self = buttons[i];
        self.addEventListener('click', function (event) {
            // prevent browser's default action
            event.preventDefault();

            let x = this.getAttribute("value");

            let data = JSON.parse(localStorage.getItem("phonebooks") || "[]");
            data = data.filter(function(item) {
                return item.phone !== x;
            });

            this.parentElement.parentElement.remove();
            localStorage.setItem("phonebooks", JSON.stringify(data));

            console.log(x, 'ddd');
            console.log(data, 'ddd111');

            // call your awesome function here
            console.log(this); // 'this' refers to the current button on for loop
        }, false);
    }
}

function myFunction() {
    let phonebooks = JSON.parse(localStorage.getItem("phonebooks") || "[]");
    console.log(phonebooks);


    if(phonebooks.length > 0) {
        for(let i=0; i<phonebooks.length; i++) {
            let html = `
                <tr>
                    <td>${phonebooks[i].name}</td>
                    <td>${phonebooks[i].phone}</td>
                    <td>
                        <button class="btn btn-danger delete" value="${phonebooks[i].phone}">
                            <i class="fal fa-times"></i>
                        </button>
                    </td>
                </tr>
            `;
            const place = document.querySelector('tbody')
            place.innerHTML += html;
        }
    }
    deletePhoneBookData();
}

function addTodo(){
    let data = JSON.parse(localStorage.getItem("phonebooks") || "[]");
    let todolist = document.getElementById('todolist').value;
    let todoPhone = document.getElementById('todoPhone').value;
    if(todolist.length > 0 && todoPhone.length > 0) {
        document.getElementById('todolist').value = '';
        document.getElementById('todoPhone').value = '';
        let html = `
            <tr>
                <td>${todolist}</td>
                <td>${todoPhone}</td>
                <td>
                    <button class="btn btn-danger delete">
                        <i class="fal fa-times"></i>
                    </button>
                </td>
            </tr>
        `;
        {}
        const place = document.querySelector('tbody')
        place.innerHTML += html;

        data.push({name:todolist, phone: todoPhone});
        localStorage.setItem("phonebooks", JSON.stringify(data));
        deletePhoneBookData();
    } else {
        alert("Name and Phone can't be null!")
    }
};


























/*===================================================*/

/*

let inputAttendance = document.getElementById("inputAttendance");
inputAttendance.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        let inputAttendance = document.getElementById('inputAttendance').value;
        document.getElementById('inputAttendance').value = '';


        let html2 = `

                 <li class="attendanceLi">
                     <p>${inputAttendance}</p>
                     <button class="attendancePresent">Present</button>
                    <button class="attendanceAbsence">Absence</button>
                    <i class="fal fa-times aDelete"></i>
                </li>
                
        `;
        const placeValue = document.querySelector('.attendanceStudent')

        placeValue.innerHTML += html2;

    }

});



const absent = document.querySelector('ul.attendanceStudent');

if(typeof absent != 'undefined' && absent !=null){
    absent.addEventListener('click',function (e){
       if(e.target.className == 'attendanceAbsence'){
           e.target.parentElement.style.color = 'red';
       }
       else if(e.target.className == 'attendancePresent'){
           e.target.parentElement.style.color = 'blue';
       }
       else if(e.target.className == 'fal fa-times aDelete'){
            e.target.parentElement.remove()
        }




    })
};

*/
















