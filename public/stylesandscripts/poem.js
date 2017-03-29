/* GET VARIABLES */
var imageView = document.getElementById('poem_image');
var titleAuthorArea = document.getElementById('title_author_area');
var recitedByArea = document.getElementById('recBy_Pub_Gen');
var descriptionArea = document.getElementById('descr_area');

var playBtn = document.getElementById('description_play_button');
var likeBtn = document.getElementById('description_like_button');
var favoriteBtn = document.getElementById('description_favorite_button');

var playLabel = document.getElementById('poem_play_label');
var likeLabel = document.getElementById('poem_like_label');
var favoriteLabel = document.getElementById('poem_favorite_label');

var recitation;



if (typeof(Storage) !== "undefined") {
    currentUser = JSON.parse(window.localStorage.getItem("current_user"));
    
    recitation = JSON.parse(window.sessionStorage.getItem("recitation_to_look_at"));
    console.log(recitation);
    console.log(recitation["author"]);
    
    
    /* SET VARIABLES */
    imageView.src = recitation["image"];
    titleAuthorArea.innerHTML = recitation["title"] + " by " + recitation["author"];
    recitedByArea.innerHTML = "Recited by " + recitation["recited_by"] + ", Published: " + recitation["published"] + ", Genre: " + recitation["genre"];
    descriptionArea.innerHTML = recitation["description"];
    
    playLabel.innerHTML = recitation["plays"];
    likeLabel.innerHTML = recitation["likes"];
    favoriteLabel.innerHTML = recitation["favorites"];
    
    
    
    
    
    playBtn.onclick = function() {

    };

    likeBtn.onclick = function() {
        var s = recitation["title"] + " " + recitation["author"];
        var arr = currentUser["likes"];

        if(!arr.includes(s)) {
            recitation.likes += 1;
            favoriteLabel.innerHTML = recitation["likes"];
            currentUser["likes"].push(s);

            // Save to firebase.
            fireRef.child("Recitations").child(currentUser["userID"]).child(recitation["title"]).set(recitation);
        } else {
            return;
        }
    };

    favoriteBtn.onclick = function() {
        var s = recitation["title"] + " " + recitation["author"];
        var arr = currentUser["favorites"];

        if(!arr.includes(s)) {
            recitation.likes += 1;
            favoriteLabel.innerHTML = recitation["favorites"];
            currentUser["favorites"].push(s);

            // Save to firebase.
            fireRef.child("Recitations").child(currentUser["userID"]).child(recitation["title"]).set(recitation);
        } else {
            return;
        }
    };
};