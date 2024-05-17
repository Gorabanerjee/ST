document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('comment-list');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const commentText = commentInput.value;
        if (commentText.trim() !== '') {
            addComment(commentText);
            commentInput.value = '';
        }
    });

    function addComment(commentText) {
        const currentDate = new Date().toLocaleDateString();
        const comment = `
            <li class="comment">
                <p>${commentText}</p>
                <span class="comment-date">${currentDate}</span>
            </li>
        `;
        commentList.insertAdjacentHTML('beforeend', comment);
    }
});
