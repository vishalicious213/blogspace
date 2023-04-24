// get first 5 posts and render them
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(posts => {
        const newPosts = posts.slice(0, 5)
        let postsHtml = ""
        newPosts.forEach(function(post) {
            postsHtml += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `
        })
        document.getElementById("blog-posts").innerHTML = postsHtml
    })