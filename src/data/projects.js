export const projects = [
  {
    slug: "airbnb-price-prediction",
    title: "Airbnb Price Prediction Model",
    category: "Machine Learning / Data Science",
    summary: "Built predictive models using Airbnb listing data.",
    tools: ["Python"],
    description: "This project uses a dataset of over 100,000 Airbnb listings across more than 30 U.S. cities to analyze and predict listing prices. The goal was to understand the key factors that drive pricing in short-term rental markets and to evaluate the performance of different machine learning models in predicting prices. I implemented and compared several models, including linear regression, regularized regression (Lasso and Ridge), decision trees, random forests, and support vector regression. The analysis focused on both predictive accuracy and interpretability, with particular attention to feature importance and how factors such as location, availability, reviews, and property characteristics influence price. The results showed that ensemble methods, particularly Random Forest, performed the best in terms of prediction accuracy, while linear and regularized models provided useful insight into the relative importance of features. This project strengthened my ability to work with large, real-world datasets, apply machine learning methods, and interpret results in an economic context.",
    pdf: "/files/airbnb-report.pdf",
    code: "/files/airbnb-code.ipynb",
    data: "https://insideairbnb.com/get-the-data/",
    github: "https://github.com/ebrown04/Final-Project-Airbnb-Price-Prediction-Geospatial-Analysis"
  },
  {
    slug: "spotify-dashboard",
    title: "Spotify Listening Dashboard",
    category: "Interactive Dashboard",
    summary:
      "Created an interactive dashboard from personal Spotify streaming history to explore listening trends and user behavior.",
    tools: ["Python", "Dash", "Plotly", "Pandas", "Data Visualization"],
    description:
      "This project parsed Spotify Extended Streaming History files and turned raw listening data into an interactive dashboard. The goal was to make personal data exploratory, visual, and engaging.",
    pdf: "#",
    github: "#",
  },
  {
    slug: "shipyard-sales-analytics",
    title: "Student Bookstore Sales Analytics",
    category: "Business Analytics",
    summary:
      "Analyzed sales, customer, and operations data for Berry College’s student-run bookstore.",
    tools: ["Python", "Excel", "Power BI", "Shopify", "Clover"],
    description:
      "This project connects my role as General Manager of The Shipyard with applied analytics. I worked with sales and customer data to better understand seasonality, conversion, product performance, and operational planning.",
    pdf: "#",
    github: "#",
  },
  {
    slug: "horse-racing-prediction",
    title: "Horse Racing Prediction Project",
    category: "Predictive Modeling",
    summary:
      "Used traditional and GPS-based racing data to evaluate models for race outcome prediction.",
    tools: ["Python", "Machine Learning", "ROC AUC", "Simulation", "Data Cleaning"],
    description:
      "This project explored whether GPS-based horse racing data improved predictive performance over traditional race variables. I worked with messy real-world datasets, tested model performance, and considered how predictions could support a live race simulation tool.",
    pdf: "#",
    github: "#",
  },
];