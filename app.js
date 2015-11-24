(function() {
  var app = angular.module('goldCommerce', ['store-directives']);

  app.controller('StoreController', ['$http', function($http){
    var store = this;
    store.products = [];
    

	store.products = [
  {
    "name": "Diamond Jewellery",
    "description": "Designer Jewellery from Rs. 2500. Save Upto 30% Over Retail. Buy Now! Free Insured Shipping. · 30-Day Money Back. · Lifetime Exchange.",
    "shine": 8,
    "price": 80.99,
    "rarity": 7,
    "color": "#CCC",
    "faces": 14,
    "images": [
      "images/gem-02.gif",
      "images/gem-05.gif",
      "images/gem-09.gif"
    ],
    "reviews": []
  },
  {
    "name": "Solitaires",
    "description": "30 Day Money Back Policy. · Lifetime Exchange. · BIS Hallmarked Jewellery.",
    "shine": 9,
    "price": 25.99,
    "rarity": 6,
    "color": "#EEE",
    "faces": 12,
    "images": [
      "images/gem-01.gif",
      "images/gem-03.gif",
      "images/gem-04.gif"
    ],
    "reviews": []
  },
  {
    "name": "Plain Gold Jewellery",
    "description": "Buy Jewellery Online at Low Prices in India. Choose From 2000+ Chic Designs. 100% Certified. Lifetime Exchange.",
    "shine": 70,
    "price": 1100,
    "rarity": 2,
    "color": "#000",
    "faces": 6,
    "images": [
      "images/gem-06.gif",
      "images/gem-07.gif",
      "images/gem-08.gif"
    ],
    "reviews": []
  }
]

    
  }]);

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);

      this.review = {};
    };
  });
})();
