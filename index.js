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

// listen for form submissions
document.getElementById("new-post").addEventListener("submit", function(e) {
    e.preventDefault()
    const postTitle = document.getElementById("post-title").value
    const postBody = document.getElementById("post-body").value
    const newPost = {
        title: postTitle,
        body: postBody
    }

    // send form submission to API
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(post => {
            // render new post & then render existing posts after it
            document.getElementById("blog-posts").innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
                ${document.getElementById("blog-posts").innerHTML}
            `
        })
})