const getUserFromLocalStorage = ()=>{
    let users = [];
    const usersString = localStorage.getItem('users');
    if( usersString ){
         users =  JSON.parse(usersString);
    }
    return users;
}

const saveUsersInLocalStorage = (users)=>{
    localStorage.setItem('users',JSON.stringify(users));
}

const getPostsFromLocalStorage = () => {
    let posts = [];
    // get posts if stored in localstorage
    if (localStorage.getItem('posts') !== null){
        posts = JSON.parse(localStorage.getItem('posts'));
    }
    return posts;
}

const savePostsInLocalStorage = (posts) => {
    localStorage.setItem('posts',JSON.stringify(posts));
}

const addPostIdToUser = (userId, postId ) => {
    let users = getUserFromLocalStorage(); 
    users = users.map((el) => {
        if(el.id === userId ){
            const newUser = {...el}
            if(newUser.postIds){
                newUser.postIds.push(postId)
            }else{
                newUser.postIds = [postId]
            }
            return newUser;
        }else{
            return {...el};
        }
    })

    saveUsersInLocalStorage(users);
}


const addCommentToPost = (userId, postId,content) => {
    let posts = getPostsFromLocalStorage();
    posts = posts.map((el, index) => {
        const newEl = {...el};
        if(el.id === postId){
            const newComments = [...newEl.comments];
            newComments.push({
                content:content,
                userId : userId
            });
            newEl.comments = newComments
        }
        return newEl;
    })
    savePostsInLocalStorage(posts);
}


const toggleLikeToPost = (postId, userId) => {
    let posts = getPostsFromLocalStorage();
    let liked = false;
    posts = posts.map((el, index) => {
        const newEl = {...el};
        if(newEl.id === postId){
            let newLikes = [...newEl.likes];
            if(newLikes.indexOf(userId) === -1){
                newLikes.push(userId);
                liked = true;
            }else{
                newLikes = newLikes.filter((el) => el !== userId)
            }
            newEl.likes = newLikes
        }
        return newEl;
    })
    savePostsInLocalStorage(posts);
    return liked;
}

const addPostToPosts = (userId, userInput) => {
    const posts = getPostsFromLocalStorage()
        .map(el => {
            return ({
                ...el,
                likes: [...el.likes],
                comments:[...el.comments]
            })
        })
    let lastId
    if(posts.length === 0 ){
        lastId = 0 ;         
    }else{
        lastId = posts.length;
    }
    posts.push({
        id: lastId,
        body: userInput,
        userId : userId,
        comments:[],
        likes:[]
    });
    log(posts)
    savePostsInLocalStorage(posts);
    return lastId;
}