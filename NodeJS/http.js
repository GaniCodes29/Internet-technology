let  nameElement = document.querySelector('.name');
let  SurnameElement = document.querySelector('.Surname');
const getMyName = async () => {
    let res = await fetch('http://127.0.0.1.3000/')
    console.log(res);
    if(!res.ok) {
        alert('failed to get name');
        return;
    }
    let name = await res.text();
    nameElement.textContent = name;
}
const postSurname = async () => {
    let res = await fetch('http://127.0.0.1.3000/', {
    
    }
}
