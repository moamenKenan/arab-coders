const toggleComment = (id) => {
    const item = $(`#${id}`);
    item.find('.post-output-comment').toggleClass('hide')
}
const addCommentToPostUI = (postId, content) => {
    const commentContainer = $(`#${postId} > .post-output-comment`)
    const newComment = commentOutput.clone();
    newComment.removeClass('hide');
    newComment.find('p').text(content);
    commentContainer.prepend(newComment);
}


const addComment = (postId) => {
    const content = $(`#${postId}`)
        .find('.comment-input > input');
    addCommentToPost(
        getUserAuthenticationData().userId, 
        postId,
        content.val() );
    addCommentToPostUI(postId, content.val());
    content.val('')
}


const toggleLikeToPostUI = (postId, cheked) => {
    let icon ;
    if(cheked){
        icon = 'favorite';
    }else{
        icon = 'favorite_border'
    }
    $(`#${postId}`).find('.action-favorite > span').text(icon);
}

const toggleLike = (postId) => {
    const checked = toggleLikeToPost(
        postId,
        getUserAuthenticationData().userId)
    toggleLikeToPostUI(postId, checked);
}

const toggleActionsMenuUI = (postId) => {
    $(`#${postId}`).find('.actions-menu').toggleClass('hide');
}


const createNewPost = (id, content) => {
    const newPost = outputPost.clone();
    newPost.removeClass('hide');
    newPost.attr('id', id);
    newPost.find('.post-content > p').text(content);

    // attach eventhandlers 
    newPost.find('.action-comment > span').click(() => {
        toggleComment(id);
    });

    newPost.find('.comment-input > span').click(() => {
        addComment(id);
    })

    newPost.find('.action-favorite > span').click(() => {
        toggleLike(id)
    })

    newPost.find('.post-actions > span').click(() => {
        toggleActionsMenuUI(id)
    })

    // add to the dom
    // main.prepend(newPost)
    return newPost;
}


// initial state
const updatePosts = (posts,container) => {
    for (let i = 0; i < posts.length; i++) {
       const newPost = createNewPost(posts[i].id, posts[i].body);
       container.prepend(newPost);
        if(posts[i].likes.length > 0){
            toggleLikeToPostUI(posts[i].id,true); 
        }else{
            toggleLikeToPostUI(posts[i].id,false);
        }
        if(posts[i].comments){
            for(let j = 0 ; j < posts[i].comments.length; j++){
                addCommentToPostUI(
                    posts[i].id,
                    posts[i].comments[j].content
                    )
            }
        }
    }
}