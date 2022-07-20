const text = "You can't hurt me"

let name = "jack"

console.log(text + " " + name)

// 数据类型
const num = 9

const str = '123123'

const bl = false

const obj = {
    name: 'jack',
    age: 2,
}

const arr = [1, 2, 3, 6]


function funName(params, p1, p2, p3){
    console.log(params)
}

funName(obj)

function handleclick(e) {
    console.log(e)

    const circleElem = document.getElementById('circleId')
    console.log(circleElem)

    // circleElem.style.display = 'block'
    if (circleElem.classList.contains("circle")){
        circleElem.className = 'circle-show'
    }
    else{
        circleElem.classList.add("circle")
    }
}

const getUserInfo = function() {
    console.log('get user info')
    axios.get('http://127.0.0.1:3000/user').then((res) => {
        console.log(res)
        console.log(res.data)

        document.getElementById('name').innerText = res.data.name
        document.getElementById('age').innerText = res.data.age
        document.getElementById('avatar').src = 'data:image/png;base64,' + res.data.avatar
    }).catch((err) =>{
        console.error();
    })
}

const buttonElem = document.getElementById('button')
buttonElem.addEventListener('click', getUserInfo)