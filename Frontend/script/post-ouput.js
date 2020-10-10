const toggleComment = (id) => {
    const item = $(`#${id}`);
    item.find('.post-output-comment').toggleClass('hide')
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

    // add to the dom
    main.prepend(newPost)
}