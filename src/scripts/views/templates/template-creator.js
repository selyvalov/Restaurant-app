import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => {
  let foods = '';
  let drinks = '';
  let customerReviews = '';

  restaurant.menus.foods.forEach((restaurants) => {
    const foodsMenu = `${restaurants.name}, `;
    foods += foodsMenu;
  });

  restaurant.menus.drinks.forEach((restaurants) => {
    const drinksMenu = `${restaurants.name}, `;
    drinks += drinksMenu;
  });

  restaurant.customerReviews.forEach((restaurants) => {
    const customerReview = `<p tabindex="0">Name : ${restaurants.name}</p>
        <p tabindex="0">Date : ${restaurants.date}</p>
        <p tabindex="0">Review : ${restaurants.review}</p>
        `;

    customerReviews += customerReview;
  });

  const menus = `<h4>Menus</h4>
    <h5 tabindex="0">Food</h5>
    <p tabindex="0">${foods}</p>
    <h5 tabindex="0">Drink</h5>
    <p tabindex="0">${drinks}</p>
    `;

  const detail = `
    <h2 class="restaurant__title" tabindex="0">${restaurant.name}</h2>
    <img class="restaurant__poster lazyload" tabindex="0" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name} restaurant image"/>
    <div class="restaurant__info">
        <h3 tabindex="0">Information</h3>
        <h4 tabindex="0">City</h4>
        <p tabindex="0">${restaurant.city}</p>
        <h4 tabindex="0">Rating</h4>
        <p tabindex="0">⭐️${restaurant.rating}</p>
        <h4 tabindex="0">Address</h4>
        <p tabindex="0">${restaurant.address}</p>
        <h4 tabindex="0">Description</h4>
        <p tabindex="0">${restaurant.description}</p>
        <div class="menus">${menus}</div>
        <h4 tabindex="0">Customer Review</h4>
        <div class="reviews">${customerReviews}</div>
    </div>
    `;

  return detail;
};

const createRestaurantItemTemplate = (restaurants) => `
 <div class="restaurant-item">
   <div class="restaurant-item__header">
       <img class="restaurant-item__header__poster lazyload" alt="${restaurants.name || '-'} restaurant image"
           data-src="${restaurants.pictureId ? CONFIG.BASE_IMAGE_URL + restaurants.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
       <div class="restaurant-item__header__rating">
           <p>⭐️<span class="restaurant-item__header__rating__score">${restaurants.rating || '-'}</span></p>
       </div>
   </div>
   <div class="restaurant-item__content">
   <p class="city" tabindex="0">${restaurants.city || '-'}</p>
      <h3 class="restaurant__title"><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name || '-'}</a></h3>
      <p>${restaurants.description || '-'}</p>
   </div>
 </div>
 `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
