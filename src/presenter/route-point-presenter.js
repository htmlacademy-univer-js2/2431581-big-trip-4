import EventsView from '../view/route-point-list-view.js';
import RoutePointView from '../view/route-point-view.js';
import EditingRoutePointView from '../view/editing-route-point-view.js';
import SortingView from '../view/sorting-view.js';
import { render } from '../render.js';

export default class RoutePointPresenter {
  constructor(tripContainer) {
    this.eventsList = new EventsView();
    this.tripContainer = tripContainer;
  }

  init (routePointsModel) {
    this.routePointsModel = routePointsModel;
    this.routePoints = [...this.routePointsModel.getRoutePoints()];
    this.destinations = [...this.routePointsModel.getDestinations()];
    this.offers = [...this.routePointsModel.getOffers()];

    render(new SortingView(), this.tripContainer);
    render(this.eventsList, this.tripContainer);
    render(new EditingRoutePointView(this.routePoints[0], this.destinations, this.offers), this.eventsList.getElement());

    for (const routePoint of this.routePoints){
      render(new RoutePointView(routePoint, this.destinations, this.offers), this.eventsList.getElement());
    }

  }
}
