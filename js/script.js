async function fetchcollectionTypes(){
    try{
        const response = await fetch('./api/collectiontype.json');
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const collectionIDs = data.map(item => item.collectionid);
        const collectionId = collectionIDs[1];

        const articleResponse = await fetch(`./api/collection/${collectionId}/collection.json`);
        if(!articleResponse.ok){
            throw new Error ("Network response was not ok");
        }
        const articleData = await articleResponse.json();

        const leftsideContent = document.getElementById('leftArticleContent');
            leftsideContent.innerHTML = '';
            const articleElement = document.createElement('div');
            articleElement.innerHTML = `
            <h2>&#10012;${articleData[0].title}</h2>
            <p> ${articleData[0].intro}</p>
            <p>&#x1F550;${articleData[0].commentcount}m 
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chat-right" viewBox="0 0 16 16"><path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/></svg>
                    ${articleData[0].commentcount}
                </span>
            </p>`;
            leftsideContent.appendChild(articleElement);
            document.getElementById('articleLgImage').src = articleData[0].imageurl;


            const rightsideContent = document.getElementById('rightArticleContent');
            rightsideContent.innerHTML = '';
            const articleRElement = document.createElement('div');
            articleRElement.innerHTML = `
            <h2>&#10012;${articleData[1].title}</h2>
            <p> ${articleData[1].intro}</p>
            <p>&#x1F550;${articleData[1].published}m 
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chat-right" viewBox="0 0 16 16"><path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/></svg>
                    ${articleData[1].commentcount}
                </span>
            </p>`;
            rightsideContent.appendChild(articleRElement);
            document.getElementById('articleImage').src = articleData[1].imageurl;


            const smallArt1Content = document.getElementById('smallArt1Content');
            smallArt1Content.innerHTML = '';
            const articleS1Element = document.createElement('div');
            articleS1Element.innerHTML = `
            <h4>&#10012;${articleData[2].title}</h4>
            <p>&#x1F550;${articleData[2].published}m </p>`;
            smallArt1Content.appendChild(articleS1Element);
            document.getElementById('s1articleImage').src = articleData[2].imageurl;


            const smallArt2Content = document.getElementById('smallArt2Content');
            smallArt2Content.innerHTML = '';
            const articleS2Element = document.createElement('div');
            articleS2Element.innerHTML = `
            <h4>&#10012;${articleData[3].title}</h4>
            <p>&#x1F550;${articleData[3].published}m </p>`;
            smallArt2Content.appendChild(articleS2Element);
            document.getElementById('s2articleImage').src = articleData[3].imageurl;
    }
    catch(error){
        console.error('Error', error);
    }
}
fetchcollectionTypes();
