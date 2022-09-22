let newsValue = document.getElementById("newsValue");

function search() {
    console.log(newsValue.value);

    if (!newsValue.value) {
        newsValue = "karachi"
    } else {
        
    }



const getData = new Promise((resolve, reject) => {
    fetch(
        "https://newsapi.org/v2/everything?q="+newsValue.value+"i&apiKey=820f631351e64ec3a69317b05c1ea811"
    )
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((err) => {
            reject(err)
            swal("Enter avalid value")
        });
});

getData.then((res) => {
    console.log(res);
    

        let articles = res.articles;
        console.log(res.articles.length);
        for (var i = 0; i < articles.length; i++) {
            console.log(articles);
            var img = `
            <div class="single-card-div " >
                 <img src="${articles[i].urlToImage}" class="card-img-top" alt="...">
                 <div class="card-body">
                       <h5 class="card-title">${articles[i].author}</h5>
                     <h5 class="card-title">${articles[i].title}</h5>
                     <p class="card-text">${articles[i].description}</p>
                     <a href="${articles[i].url}" class="btn btn-primary">Read more</a>
                 </div>
            </div>
            `;
            document.getElementById("news-data").innerHTML += img
        }


        getData.catch((err) => {
        })

        
}
  
);

}