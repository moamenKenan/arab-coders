
const saveUsersInLocalStorage = (users)=>{
      localStorage.setItem('users',JSON.stringify(users));
}

const getAndValidateUserData = ()=>{
   let isValid = true;  
    return[([userNameInput, passwordInput, eamilInput, dateInput, genderInput ]
      .map((e)=>{
       if(! e.val() || (e.attr('name') === 'email' && !validateEmail(e.val()) )){
        e.parent().addClass('redBorder'); 
         isValid = false; 
       }
       else{
        e.parent().removeClass("redBorder");
       }
       return {key:e.attr('name'), value:e.val()};
   })),isValid];
           
        
} ;

const addUser = (userData)=>{
    const users = getUserFromLocalStorage();
    const user ={id:users.length};
    userData.forEach(e => {
        user[e.key] = e.value; 
    });
   users.push(user); 
   log(users);
   saveUsersInLocalStorage(users);
}

const register  = (e)=>{
    e.preventDefault();
    const [data,isValid] = getAndValidateUserData();

    if(isValid){
       addUser(data);
       window.location.href = '../index.html';
    }
}


registerBtn.click(register)

