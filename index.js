fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(posts => console.log(posts))