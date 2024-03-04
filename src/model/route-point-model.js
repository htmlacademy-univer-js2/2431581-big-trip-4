export default class RoutePointsModel {
  constructor() {
    this.routePoints = [];
  }

  init(routePoints, destinations, offers) {
    this.routePoints = routePoints;
    this.destinations = destinations;
    this.offers = offers;
  }

  getRoutePoints() {
    return this.routePoints;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
