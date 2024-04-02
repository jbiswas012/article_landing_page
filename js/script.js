


function fetchcollectionTypes(){
    fetch('./api/collectiontype.json')
    .then(response => {
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then(data => {
        const collectionIDs = data.map(item => item.collectionid);
        console.log(collectionIDs);

        const collectionId = collectionIDs[1];
        fetch(`./api/collection/${collectionId}/collection.json`)
        .then(response => {
            if(!response.ok){
                throw new Error ("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            // displayArticles(data);
            const leftsideContent = document.getElementById('leftArticleContent');
            leftsideContent.innerHTML = '';
            const articleElement = document.createElement('div');
            articleElement.innerHTML = `
            <h2>${data[0].title}</h2>
            <p> ${data[0].intro}</p>
            `;
            leftsideContent.appendChild(articleElement);

            const rightsideContent = document.getElementById('rightArticleContent');
            rightsideContent.innerHTML = '';
            const articleRElement = document.createElement('div');
            articleRElement.innerHTML = `
            <h2>${data[1].title}</h2>
            <p> ${data[1].intro}</p>
            `;
            rightsideContent.appendChild(articleRElement);

            const smallArt1Content = document.getElementById('smallArt1Content');
            smallArt1Content.innerHTML = '';
            const articleS1Element = document.createElement('div');
            articleS1Element.innerHTML = `
            <h4>${data[2].title}</h4>
            `;
            smallArt1Content.appendChild(articleS1Element);

            const smallArt2Content = document.getElementById('smallArt2Content');
            smallArt2Content.innerHTML = '';
            const articleS2Element = document.createElement('div');
            articleS2Element.innerHTML = `
            <h4>${data[3].title}</h4>
            `;
            smallArt2Content.appendChild(articleS2Element);
        })
    })
}

function displayArticles(articles) {
    // Assuming there's a container with id "articles-container" to display articles
    // const articlesContainer = document.getElementById('articles-container');
    const leftsideContent = document.getElementById('leftsideContent');
  
    // Clear previous content
    // articlesContainer.innerHTML = '';
    leftsideContent.innerHTML = '';
  
    // Loop through articles and create HTML elements to display them
    articles.map(article => {
        console.log(article)
        // console.log(article[0])
    //   const articleElement = document.createElement('div');
    //   articleElement.innerHTML = `
    //     <h2>${article.title}</h2>
    //     <p><strong>Author:</strong> ${article.author}</p>
    //     <p>${article.content}</p>
    //     <p><strong>Published Date:</strong> ${article.published_date}</p>
    //   `;
    //   // Append article element to container
    //   articlesContainer.appendChild(articleElement);
    });
  }

fetchcollectionTypes();