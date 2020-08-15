import React, { PureComponent } from 'react';
import GoogleMapReact from 'google-map-react';
import RestaurantMarker from './RestaurantMarker';

class RestaurantDisplay extends PureComponent {
  state = {
    center: {
      lat: 0,
      lng: 0,
    },
    zoom: 13,
  }

  componentDidUpdate() {
    const { restaurant } = this.props;

    if (restaurant.location) {
      this.setState(prevState => {
        if (
          prevState.center.lat !== restaurant.location.lat ||
          prevState.center.lng !== restaurant.location.lng
        ) {
          return {
            center: {
              lat: restaurant.location.lat,
              lng: restaurant.location.lng,
            }
          }
        }
      })
    }
  }

  render() {
    const { restaurant, showDetail } = this.props;

    return (
      <div className={`restaurant-content-container ${showDetail ? 'active' : ''}`}>
        <div className="map-placeholder">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBM3LuxFCdnd1GY_w_pQUqlr4Gc_t_3oCc' }}
            center={this.state.center}
            zoom={this.state.zoom}
          >
            <RestaurantMarker
              lat={this.state.center.lat}
              lng={this.state.center.lng}
            />
          </GoogleMapReact>
        </div>
        <section className="restaurant-info-stripe">
          <h1 className="restaurant-title">{restaurant.name}</h1>
          <h3 className="restaurant-category">{restaurant.category}</h3>
        </section>

        <section className="restaurant-detail-container">
          {restaurant.location && (
            <p>
              {restaurant.location.address}
              <br />
              {restaurant.location.formattedAddress[1]}
            </p>
          )}
          {restaurant.contact ? (
            <>
              <p>{restaurant.contact.formattedPhone || 'No Contact Found'}</p>
              {restaurant.contact.twitter && <p>@{restaurant.contact.twitter}</p>}
              {restaurant.contact.facebookName && <p>@{restaurant.contact.facebookName}</p>}
            </>
          ) : <p>No contact info</p>}
        </section>
      </div>
    )
  }
}

export default RestaurantDisplay;