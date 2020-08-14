import React from 'react';
import { connect } from 'react-redux';
import RestaurantPreview from '../components/RestaurantPreview';
import RestaurantDisplay from '../components/RestaurantDisplay';
import Map from '../components/Map';

const Home = ({ restaurants, appReducer }) => {
  const { currentRestaurant, showDetail, showFullMap } = appReducer;
  const restaurantList = restaurants.map((restaurant, i) => (
    <RestaurantPreview restaurant={restaurant} key={i} />
  ))

  return (
    <>
      <div className="restaurant-preview-list">
        {restaurantList}
      </div>
      <RestaurantDisplay showDetail={showDetail} restaurant={currentRestaurant} />
      {restaurants[0] && (
        <Map
          showFullMap={showFullMap}
          showDetail={showDetail}
        />
      )}
    </>
  )
}

const mapStateToProps = state => ({
  restaurants: state.restaurantsReducer,
  appReducer: state.appReducer,
});

export default connect(mapStateToProps)(Home);
