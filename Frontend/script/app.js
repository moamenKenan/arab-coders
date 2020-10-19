


const addPost = () => {
    const userId = getUserAuthenticationData().userId ;
    const userInput = textArea.val();
    const lastId = addPostToPosts(userId, userInput);
     const newPost = createNewPost(lastId, userInput);
     main.prepend(newPost);
    addPostIdToUser(userId, lastId);
    textArea.val('')
}






// entry point ===============================================
const posts = getPostsFromLocalStorage();
updatePosts(posts,main);


// attach eventhandler
submitBtn.click(addPost);

