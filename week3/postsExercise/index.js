function sendPost() {
    // alert("se envió el formulario")
    const postsContainer = document.getElementById('posts-container');
    const rowPostCard = document.createElement('div');
    const postDiv = document.createElement('div');
    let textareaPost = document.getElementById('post-input').value;
    const textPost = document.createElement('p');
    const textNodePost = document.createTextNode(textareaPost);
    textPost.appendChild(textNodePost);
    postDiv.appendChild(textPost);
    rowPostCard.appendChild(postDiv);
    postsContainer.appendChild(rowPostCard);

    postDiv.classList.add('col-6','post-card');
    rowPostCard.classList.add('row', 'justify-content-md-center');
    console.log("🚀 ~ file: index.js ~ line 4 ~ sendPost ~ textareaPost", textareaPost)
    document.getElementById('post-input').value = "";
}