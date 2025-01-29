let a=10
let b=20
console.log(a+b);
function add(x,y) {
    return x+y;
}
const add =(x,y)=>{
    return x+y;
}
function handleLogin(){
    const username=document.getElementById('user').value;
    const password=document.getElementById('pass').value;
    const error=document.getElementById('error')

    const loginData=[
        {username:"charles",password:"charles16"},
        {username:"carlos",password:"carlos55"},
        {username:"username",password:"password"},
    ]

    const isValid= loginData.some((user)=>{user.username===username && user.password===password})
    if(isValid){
        window.location.href='flexbox.html'
        error.innerText="login Successful";
    }
    else{
        error.innerText="Invalid Credentials";
    }
}