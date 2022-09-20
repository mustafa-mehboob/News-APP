// var url = 'https://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2022-09-19&' +
//           'sortBy=popularity&' +
//           'apiKey=820f631351e64ec3a69317b05c1ea811';

// var req = new Request(url);

// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })

// var url = 'newsapi.org/v2/top-headlines?country=us&apiKey=820f631351e64ec3a69317b05c1ea811'
//     // 'https://newsapi.org/v2/top-headlines?' +
//     // 'country=nz&' +
//     // 'apiKey=820f631351e64ec3a69317b05c1ea811';
// var req = new Request(url);
// fetch(req)
//     .then(function (response) {
//         console.log(response.json());
//     })

// function newsApi() {
//     fetch('newsapi.org/v2/top-headlines?country=us&apiKey=820f631351e64ec3a69317b05c1ea811')

//     .then(a => a.json())
// }

const getData = new Promise((resolve, reject) => {
    fetch(
        "https://newsapi.org/v2/top-headlines?country=tr&apiKey=820f631351e64ec3a69317b05c1ea811"
    )
        .then((res) => res.json())
        .then((res) => resolve(res))
        .catch((err) => reject(err));
});

getData.then((res) => {
    console.log(res);
    if (!fetch) {
        alert("Enter correct city");
    } else {
        // var img = `
        // <img src="${res.articles[0].urlToImage}" class="card-img-top" alt="...">
        // <div class="card-body">
        //             <h5 class="card-title">Special title treatment</h5>
        //             <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        //             <a href="#" class="btn btn-primary">Go somewhere</a>
        //           </div>
        // `;
        // document.getElementById("news-data").innerHTML = img

        let articles = res.articles;
        console.log(res.articles.length);
        for (var i = 0; i < articles.length; i++) {
            console.log(articles);
            var img = `
            <img src="${articles[i].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${articles[i].author}</h5>
                <h5 class="card-title">${articles[i].title}</h5>
                <p class="card-text">${articles[i].description}</p>
                <a href="${articles[i].url}" class="btn btn-primary">Read more</a>
            </div>
         `;
            document.getElementById("news-data").innerHTML += img

        }

        // document.getElementById("description").innerHTML = res.weather[0].description
        // document.getElementById("temp").innerHTML = res + "&#176;"
    }
});