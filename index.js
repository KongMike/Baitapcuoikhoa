src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.min.js'
src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'
const upvoteButtons = document.querySelectorAll(".upvote");
const downvoteButtons = document.querySelectorAll(".downvote");

for (let i = 0; i < upvoteButtons.length; i++) {
    upvoteButtons[i].addEventListener("click", function(e) {
        const scoreSpan = upvoteButtons[i].nextElementSibling;
        scoreSpan.innerHTML = parseInt(scoreSpan.innerHTML) + 1;
    });
}

for (let i = 0; i < downvoteButtons.length; i++) {
    downvoteButtons[i].addEventListener("click", function(e) {
        const scoreSpan = downvoteButtons[i].previousElementSibling;
        scoreSpan.innerHTML = parseInt(scoreSpan.innerHTML) - 1;
    });
}

$(document).ready(function(){
    $(".primaryContained").on('click', function(){
        $(".comment").addClass("commentClicked");
    });
    $("textarea").on('keyup.enter', function(){
        $(".comment").addClass("commentClicked");
    });
});
 
new Vue({
    el: "#app",
    data:{
        title: 'Add a comment',
        newItem: '',
        item: [],
    },
    methods:{
        addItem  (){
        this.item.push(this.newItem);
        this.newItem = "";
        }
    }
});

document.querySelector("#MyFileInput").addEventListener("change", function() {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        localStorage.setItem("recent-image", reader.result);
    })

    reader.readAsDataURL(this.file[0]);
})

document.addEventListener("DOMContentLoaded", () =>{
    const recentImageDataUrl = localStorage.getItem("recent-image");
    
    if (recentImageDataUrl) {
        document.querySelector("#imgPreview").setAttribute("src", recentImageDataUrl);
    }
});