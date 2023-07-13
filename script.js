// Fetch news data from the News API
function fetchNewsData() {
  // Your News API key
  const apiKey = 'd1da0ac33bda4d1fabcd766208881585';

  // Specify the endpoint URL and pass the API key as a query parameter
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  // Fetch news data from the API as JSON
  fetch(apiUrl, {
    headers: {
      Accept: 'application/json'
    }
  })
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
