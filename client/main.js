
console.log('connected')
const getComp = document.querySelector('#complimentButton')
const getFort = document.querySelector('#fortuneButton')
const showUsr = document.querySelector('#userButton')
const changeMike = document.querySelector('#ChangeMike')
const delAlex = document.querySelector('#deleteAlex')
const addUser = document.querySelector('#addUsr')

const baseURL = "http://localhost:4000"

const getCompFunc = () => {
    axios.get(`${baseURL}/api/compliment/`)
    .then(function (response) {
        const data = response.data;
        alert(data);
    });
}
const getFortFunc = () => {
    axios.get(`${baseURL}/api/fortune/`)
    .then(function (response) {
        const data = response.data;
        alert(data);
    });
}
const getAllUsers = () => {
    axios.get(`${baseURL}/api/users/`)
    .then(function(response){
        let data = response.data
        let addUsers = document.createElement('h3')
        addUsers.innerHTML = response.data.usr1 + ' ' + response.data.usr2 + ' ' + response.data.usr3 + ' ' + response.data.usr4 + ' ' + response.data.usr5 + ' ' + response.data.usr6
        document.body.appendChild(addUsers)
    })

}
const changeMikeFunc = () => {
    axios.put(`${baseURL}/api/users/:usr3/`)
    .then(function(response){
        let addUsers = document.createElement('h3') 
        addUsers.innerHTML = response.data.usr1 + ' ' + response.data.usr2 + ' ' + response.data.usr3 + ' ' + response.data.usr4 + ' ' + response.data.usr5
        document.body.appendChild(addUsers)
    })
}
const delAlexFunc = () => {
    axios.delete(`${baseURL}/api/users/:usr1/`)
    .then(function(response){
        let addUsers = document.createElement('h3') 
        addUsers.innerHTML = response.data.usr1 + ' ' + response.data.usr2 + ' ' + response.data.usr3 + ' ' + response.data.usr4 + ' ' + response.data.usr5
        document.body.appendChild(addUsers)
    })
}
const addUserFunc = () => {
    axios.post(`${baseURL}/api/users/`)
    .then(function(response){
        let addUsers = document.createElement('h3') 
        addUsers.innerHTML = response.data.usr1 + ' ' + response.data.usr2 + ' ' + response.data.usr3 + ' ' + response.data.usr4 + ' ' + response.data.usr5
        document.body.appendChild(addUsers)
    })
}
getComp.addEventListener('click',getCompFunc)
getFort.addEventListener('click',getFortFunc)
showUsr.addEventListener('click',getAllUsers)
changeMike.addEventListener('click',changeMikeFunc)
delAlex.addEventListener('click',delAlexFunc)
addUser.addEventListener('click',addUserFunc)
