console.log("hello");

function addListener() {
    document.getElementById("forms").addEventListener("submit", function (e) {
        // disable default form handling
        e.preventDefault();

        // grab what user typed
        var title = document.getElementById("validationDefault01").value;
        var post = document.getElementById("validationDefault02").value;

        // get pointers to the checkboxes
        

        console.log(title);
        console.log(post);
        

        // write the values into new database document
        
        db.collection("posts")
            .add({ //using the add() function, auto-generated doc ID
                "post": post,
                "title": title,
                "rating": 0,
            })
            
    })
}
addListener();