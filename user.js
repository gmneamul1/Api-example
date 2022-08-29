const loaduserfetch = () => {
    const url = `
    https://randomuser.me/api/?gender=female
    `
    fetch(url)
    .then(res => res.json())
    .then(data =>displayuser(data.results[0]))
    .catch(error => console.log(error))
}

const LoaduserAsync = async() => {
    const url = `
    https://randomuser.me/api/?gender=female
    `
    const res = await fetch (url);
    const data = await res.json();
    displayuser(data.results[0])

}
const displayuser = user => {
    console.log(user);
}