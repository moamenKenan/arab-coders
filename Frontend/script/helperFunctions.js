const log = (param) => {
    console.log(param);
}

const validateEmail  = (email)=>{
  
     const regex =/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    return regex.test(email);
} 

const setUserAuthenticationData = (userId , password) => {
    const obj = {
        userId : userId,
        password :password
    }
    localStorage.setItem('userAuth', JSON.stringify(obj))
}

const getUserAuthenticationData = () => {
    return JSON.parse(localStorage.getItem('userAuth'));
}