const log = (param) => {
    console.log(param);
}

const validateEmail  = (email)=>{
  
     const regex =/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    return regex.test(email);
} 