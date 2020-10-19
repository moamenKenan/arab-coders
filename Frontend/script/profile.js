
veiwProfileIcon.mouseenter(()=>{
      navProfile.slideDown(1000);
})

navProfile.mouseleave(()=>{
      navProfile.slideUp(1000);
})







const posts = getUserPostsFromLocalStorage();

console.log(posts);

  updatePosts(posts,postsProfile);
  