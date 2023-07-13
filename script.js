// JavaScript code for the News Portal

// Fetch news data from the News API
function fetchNewsData() {
    // Your News API key
    const apiKey = 'd1da0ac33bda4d1fabcd766208881585';
  
    // Specify the endpoint URL and pass the API key as a query parameter
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  
    // Fetch news data from the API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Process the news data
        const articles = data.articles;
  
        // Clear existing news articles
        const newsSection = document.getElementById('news-section');
        newsSection.innerHTML = '';
  
        // Insert news articles into the news section
        articles.forEach(article => {
          const articleElement = createArticleElement(article);
          newsSection.appendChild(articleElement);
        });
      })
      .catch(error => {
        console.log('Error fetching news data:', error);
      });
  }
  
  // Create a news article element
  function createArticleElement(article) {
    const articleElement = document.createElement('article');
    articleElement.classList.add('article');
  
    const titleElement = document.createElement('h2');
    titleElement.textContent = article.title;
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = article.description;
  
    const sourceElement = document.createElement('p');
    sourceElement.classList.add('source');
    sourceElement.textContent = `Source: ${article.source.name}`;
  
    articleElement.appendChild(titleElement);
    articleElement.appendChild(descriptionElement);
    articleElement.appendChild(sourceElement);
  
    return articleElement;
  }
  
  // Fetch news data initially
  fetchNewsData();
  
  // Fetch news data every 5 minutes
  setInterval(fetchNewsData, 5 * 60 * 1000);  // 5 minutes in milliseconds
  