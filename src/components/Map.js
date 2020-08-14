import React from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import RestaurantMarker from './RestaurantMarker';
import { toggleDetail } from '../reducers/appReducers';

const Map =({ restaurantsReducer, showFullMap, showDetail, dispatch }) => {
  const getMapCenter = () => {
    let sumOfLat = 0;
    let sumOfLng = 0;
    restaurantsReducer.forEach(restaurant => {
      sumOfLat += restaurant.location.lat;
      sumOfLng += restaurant.location.lng;
    });
    return {
      lat: sumOfLat / restaurantsReducer.length,
      lng: sumOfLng / restaurantsReducer.length,
    }
  }

  return (
    <div className={`web-map ${showFullMap ? 'active' : ''}`}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'https://www.linkedin.com/jobs/view/1962263481/?alternateChannel=paview' }}
        center={restaurantsReducer[0] ? getMapCenter() : { lat: 0, lng: 0 }}
        zoom={13}
      >
        {restaurantsReducer.map((restaurant, ind) => (
          <RestaurantMarker
            key={ind}
            restaurant={restaurant}
            lat={restaurant.location.lat}
            lng={restaurant.location.lng}
          />
        ))}
      </GoogleMapReact>
      {showDetail && (
        <div
          className="map-overlay"
          onClick={() => dispatch(toggleDetail(false))}
        />
      )}
    </div>
  )
}
const mapStateToProps = state => ({
  restaurantsReducer: state.restaurantsReducer,
});

export default connect(mapStateToProps)(Map);
