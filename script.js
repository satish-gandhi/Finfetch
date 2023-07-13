// script.js

function fetchNews() {
  fetch('/api/fetch-news')
    .then(response => response.json())
    .then(data => {
      const articles = data.articles;
      const newsContainer = document.getElementById('news-container');

      // Clear existing articles
      newsContainer.innerHTML = '';

      // Loop through articles and create news cards
      articles.forEach(article => {
        const { title, description } = article;

        const card = document.createElement('div');
        card.classList.add('news-card');

        const titleElement = document.createElement('h2');
        titleElement.textContent = title;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = description;

        card.appendChild(titleElement);
        card.appendChild(descriptionElement);

        newsContainer.appendChild(card);
      });
    })
    .catch(error => console.error(error));
}

// Fetch news every 5 minutes
setInterval(fetchNews, 300000);
