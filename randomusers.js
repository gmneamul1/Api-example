const loadusers =() => {
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => displayusers(data.results))
}
const displayusers = users => {
    const userContainer = document.getElementById('users-container');
    for( const user of users){
        console.log(user)
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML =`
        <h3> User Name: ${user.name.title} ${user.name.first} ${user.name.last} </h3>
        <p> Email: ${user.email} </p>
        <p> User Location: ${user.location.city} ${user.location.country} </p>
        
        
        `
        userContainer.appendChild(userDiv)
    }
}
loadusers()