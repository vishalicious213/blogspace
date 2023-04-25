let postsArray = []
const form = document.getElementById("new-post")

// get first 5 posts and render them
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(posts => {
        postsArray = posts.slice(0, 5)
        renderPosts(postsArray)
    })

// ⬇️ EVENT LISTENERS ⬇️

// listen for form submissions
form.addEventListener("submit", function(e) {
    e.preventDefault()
    submitPost()
})

// ⬇️ EVENT HANDLERS ⬇️

// submit post from form to API
function submitPost() {
    let postTitle = document.getElementById("post-title").value
    let postBody = document.getElementById("post-body").value
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
            postsArray.unshift(post)
            renderPosts(postsArray)
        })

    // clear out the form fields
    form.reset()
}

// ⬇️ RENDER THE APP ⬇️

// render posts from postsArray
function renderPosts(postsArray) {
    let postsHtml = ""

    postsArray.forEach(function(post) {
        postsHtml += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `
    })

    document.getElementById("blog-posts").innerHTML = postsHtml
}