fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(posts => {
        const newPosts = posts.slice(0, 5)
        console.log(newPosts)
    })