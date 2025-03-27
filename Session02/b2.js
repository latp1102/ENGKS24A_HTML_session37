document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".food-item").forEach(item => {
        const foodName = item.getAttribute("data-food");
        const likeCountElement = item.querySelector(".likes");
        const likeButton = item.querySelector(".like-btn");
        
        let likeCount = localStorage.getItem(foodName) || 0;
        likeCountElement.textContent = likeCount;
        
        likeButton.addEventListener("click", function() {
            likeCount++;
            likeCountElement.textContent = likeCount;
            localStorage.setItem(foodName, likeCount);
        });
    });
});