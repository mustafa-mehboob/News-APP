// let newsValue = document.getElementById("newsValue");

// if (!newsValue.value) {
//     newsValue.value = "karachi"
//     console.log(newsValue.value);
// }

// const getData = new Promise((resolve, reject) => {
//     fetch(
//         "https://newsapi.org/v2/everything?q=" + newsValue.value + "&apiKey=820f631351e64ec3a69317b05c1ea811"
//     )
//         .then((res) => res.json())
//         .then((res) => resolve(res))
//         .catch((err) => {
//             reject(err)
//             swal("Enter avalid value")
//         });
// });

// getData.then((res) => {
//     console.log(res);


//     let articles = res.articles;
//     console.log(res.articles.length);
//     for (var i = 0; i < articles.length; i++) {
//         console.log(articles);
//         var img = `
//         <div class="single-card-div" id="cardData"  >
//              <img src="${articles[i].urlToImage}" class="card-img-top" alt="...">
//              <div class="card-body">
//                  <h5 class="card-title">${articles[i].title}</h5>
//                  <p class="card-text">${articles[i].description}</p>
//                  <a href="${articles[i].url}" class="btn btn-primary">Read more</a>
//              </div>
//         </div>
//         `;
//         document.getElementById("news-data").innerHTML += img
//     }


//     getData.catch((err) => {
//     })


// }

// );


// function search() {
//     console.log(newsValue.value);



//         const getData = new Promise((resolve, reject) => {
//             fetch(
//                 "https://newsapi.org/v2/everything?q=" + newsValue.value + "&apiKey=820f631351e64ec3a69317b05c1ea811"
//             )
//                 .then((res) => res.json())
//                 .then((res) => resolve(res))
//                 .catch((err) => {
//                     reject(err)
//                     swal("Enter avalid value")
//                 });
//         });

//         getData.then((res) => {
//             console.log(res);

// console.log(articles);
//         let cardData = document.getElementById("cardData");
//         console.log(cardData);
//         let parent = cardData.parentNode;
//         parent.removeChild(cardData);


//             let articles = res.articles;
//             console.log(res.articles.length);
//             for (var i = 0; i < articles.length; i++) {
//                 console.log(articles);
//                 var img = `
//                 <div class="single-card-div" id="cardData"  >
//                      <img src="${articles[i].urlToImage}" class="card-img-top" alt="...">
//                      <div class="card-body">
//                          <h5 class="card-title">${articles[i].title}</h5>
//                          <p class="card-text">${articles[i].description}</p>
//                          <a href="${articles[i].url}" class="btn btn-primary">Read more</a>
//                      </div>
//                 </div>
//                 `;
//                 document.getElementById("news-data").innerHTML += img
//             }


//             getData.catch((err) => {
//             })


//         }

//         );


// }







let newsValue = document.getElementById("newsValue");

if (!newsValue.value) {
    newsValue.value = "karachi"
    console.log(newsValue.value);
}

const getData = new Promise((resolve, reject) => {
    fetch(
        "https://newsapi.org/v2/everything?q=" + newsValue.value + "&apiKey=820f631351e64ec3a69317b05c1ea811"
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

    var newsData = document.getElementById("news-data")
    newsData = ""
    for (var i = 0; i < 1; i++) {
        console.log(articles);
        var img = `
                        <div class="single-card-div" id="cardData"  >
                             <img src="${articles[i].urlToImage}" class="card-img-top" alt="...">
                             <div class="card-body">
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



function search() {
    console.log(newsValue.value);

    const getData = new Promise((resolve, reject) => {
        fetch(
            "https://newsapi.org/v2/everything?q=" + newsValue.value + "&apiKey=820f631351e64ec3a69317b05c1ea811"
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


        console.log(articles);

        newsData = document.getElementById("news-data")

        for (let o = 0; o < articles.length; o++) {
            
            let cardData = document.getElementById("cardData");
            let parent = cardData.parentNode;
            parent.removeChild(cardData);
        }
        
        let cardData = document.getElementById("cardData");
        
        //cardData.firstElementChild can be used.
        var child = cardData.lastElementChild; 
        while (child) {
            cardData.removeChild(child);
            child = cardData.lastElementChild;
        }
        for (var i = 0; i < 3; i++) {
            var img = `
                <div class="single-card-div " id="cardData">
                    <img src="${articles[i].urlToImage}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${articles[i].title}</h5>
                            <p class="card-text">${articles[i].description}</p>
                            <a href="${articles[i].url}" class="btn btn-primary">Read more</a>
                        </div>
                </div>
                            `;
            document.getElementById("news-data").innerHTML += img
        }
        console.log(newsData.length);



        getData.catch((err) => {
        })


    }

    );


}
