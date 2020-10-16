
const searchData = (email, pass)=>{
      const users = getUserFromLocalStorage();

      const found =users.find( (e)=>e.email === email && e.pass === pass);

      if(found != undefined){
          return [true, found];
      }
      return [false, null];
}

const loginHandler = (e)=>{
    e.preventDefault();
    const email = emailInput_login.val();
    const password = password_login.val();
 
    const [isFound, found] =  searchData(email, password)
    if(validateEmail(email) && isFound  ){
            setUserAuthenticationData(found.id, found.pass)
            window.location.href = '../index.html';
    }else{
        errorMessageLogin.removeClass('hide');
    }
}
     
loginBtn.click(
    loginHandler 
)