const getStudents = localStorage.getItem("students")
let students = getStudents ? JSON.parse(getStudents) : []
let id = students.length > 0 ? students.length : 0
let moyenne = 0
const name = document.querySelector(".name")
const cours = document.querySelector(".cours")
const grade = document.querySelector(".grade")
const message = document.querySelector(".message")

const handleCancel = () => {
    Array.from(input).map(i => i.value = "")
}

const handelAdd = () => {
    if( typeof name.value != "string" ) {
        message.textContent = "Value must be text"
        message.classList.add("faild")
        setTimeout(() => {
            message.textContent = ""
            message.classList.remove("faild")
        }, 2000);
        return 0
    }
    if( name.value.length == 0 ) {
        message.textContent = "Name is required"
        message.classList.add("faild")
        setTimeout(() => {
            message.textContent = ""
            message.classList.remove("faild")
        }, 2000);
        return 0
    }
    if( name.value.length < 3 ) {
        message.textContent = "The value name must be at least 3"
        message.classList.add("faild")
        setTimeout(() => {
            message.textContent = ""
            message.classList.remove("faild")
        }, 2000);
        return 0
    }
    if( name.value.length > 20 ) {
        message.textContent = "Maximum length name is 20 characters"
        message.classList.add("faild")
        setTimeout(() => {
            message.textContent = ""
            message.classList.remove("faild")
        }, 2000);
        return 0
    }
    if( typeof cours.value != "string" ) {
        message.textContent = "Value must be text"
        message.classList.add("faild")
        setTimeout(() => {
            message.textContent = ""
            message.classList.remove("faild")
        }, 2000);
        return 0
    }
    if( cours.value.length == 0 ) {
        message.textContent = "Cours is required"
        message.classList.add("faild")
        setTimeout(() => {
            message.textContent = ""
            message.classList.remove("faild")
        }, 2000);
        return 0
    }
    if( cours.value.length < 2 ) {
        message.textContent = "The value name must be at least 2"
        message.classList.add("faild")
        setTimeout(() => {
            message.textContent = ""
            message.classList.remove("faild")
        }, 2000);
        return 0
    }
    if( cours.value.length > 30 ) {
        message.textContent = "Maximum length name is 30 characters"
        message.classList.add("faild")
        setTimeout(() => {
            message.textContent = ""
            message.classList.remove("faild")
        }, 2000);
        return 0
    }
    const g = Number.parseFloat(grade.value)
    console.log(g)
    if( isNaN(g) ) {
        message.textContent = "The value must be a number"
        message.classList.add("faild")
        setTimeout(() => {
            message.textContent = ""
            message.classList.remove("faild")
        }, 2000);
        return 0
    }
    if( g < 0 || g > 20 ) {
        message.textContent = "Please enter a value between 0 and 20"
        message.classList.add("faild")
        setTimeout(() => {
            message.textContent = ""
            message.classList.remove("faild")
        }, 2000);
        return 0
    }
    id++
    students.push({
        id : id++,
        name : name.value,
        cours : cours.value,
        grade : g
    })
    console.log(students)
    localStorage.clear()
    localStorage.setItem("students",JSON.stringify(students))
    handleTable()
    message.textContent = "Student has been added"
    message.classList.add("success")
    setTimeout(() => {
        message.textContent = ""
        message.classList.remove("success")
    }, 2000);
}

const tableStudents = document.querySelector(".table-students")
const handleTable = () => {
    handleAverage()
    tableStudents.innerHTML = ""
    tableStudents.innerHTML += `
        <div class="child-one"> Student Name </div>
        <div class="child-one"> Student Course </div>
        <div class="child-one"> Student Grade </div>
        <div class="child-one child-one-op"> Operation </div>
    `
    if(students.length > 0) {
        students.map(s => {
            tableStudents.innerHTML += `
            <div class="child-two"> ${s.name} </div>
            <div class="child-two"> ${s.cours} </div>
            <div class="child-two"> ${s.grade} </div>
            <div class="child-two btn btn-update" onclick="handleUpdate('${s.id}')"> <i class="fa-solid fa-brush"></i> Update </div>
            <div class="child-two btn btn-delete" onclick="handleDelete('${s.id}')"> <i class="fa-solid fa-trash"></i> Delete </div>
        `
        })
    }
}
handleTable()
handleAverage()
function handleAverage() {
    let sum = 0
    students.map(s => {
        sum += s.grade
    })
    moyenne = sum / students.length
    value.textContent = moyenne > 0 ? moyenne.toFixed(2) : 0
}

const handleDelete = (id) => {
    students = students.filter(s => s.id != id)
    localStorage.clear()
    localStorage.setItem("students",JSON.stringify(students))
    handleTable()
    handleAverage()
    message.textContent = "Deleted successfully"
    message.classList.add("success")
    setTimeout(() => {
        message.textContent = ""
        message.classList.remove("success")
    }, 2000);
}

const handleUpdate = (id) => {
    if(name.value.length > 0) {
        if(name.value.length < 3) {
            message.textContent = "The value name must be at least 3"
            message.classList.add("faild")
            setTimeout(() => {
                message.textContent = ""
                message.classList.remove("faild")
            }, 2000);
            return 0
        }
        if(name.value.length > 20) {
            message.textContent = "Maximum length name is 20 characters"
            message.classList.add("faild")
            setTimeout(() => {
                message.textContent = ""
                message.classList.remove("faild")
            }, 2000);
            return 0
        }
    }
    if(cours.value.length > 0) {
        if(cours.value.length < 2) {
            message.textContent = "The value name must be at least 2"
            message.classList.add("faild")
            setTimeout(() => {
                message.textContent = ""
                message.classList.remove("faild")
            }, 2000);
            return 0
        }
        if(name.value.length > 30) {
            message.textContent = "Maximum length name is 30 characters"
            message.classList.add("faild")
            setTimeout(() => {
                message.textContent = ""
                message.classList.remove("faild")
            }, 2000);
            return 0
        }
    }
    if(grade.value.length > 0){
        const g = Number.parseFloat(grade.value)
        if( isNaN(g) ) {
            message.textContent = "The value must be a number"
            message.classList.add("faild")
            setTimeout(() => {
                message.textContent = ""
                message.classList.remove("faild")
            }, 2000);
            return 0
        }
        if( g < 0 || g > 20 ) {
            message.textContent = "Please enter a value between 0 and 20"
            message.classList.add("faild")
            setTimeout(() => {
                message.textContent = ""
                message.classList.remove("faild")
            }, 2000);
            return 0
        }
    }

    console.log(students)
    students = students.map(s => {
        if(s.id == id) {
            console.log(s.grade)
            s.name = name.value.length > 0 ? name.value : s.name
            s.cours = cours.value.length > 0 ? cours.value : s.cours
            s.grade = grade.value.length > 0 ? Number.parseFloat(grade.value) : s.grade
        }
        return s
    })
    console.log(students)
    localStorage.clear()
    localStorage.setItem("students",JSON.stringify(students))
    handleTable()
    message.textContent = "Updated successfully"
    message.classList.add("success")
    setTimeout(() => {
        message.textContent = ""
        message.classList.remove("success")
    }, 2000);
}