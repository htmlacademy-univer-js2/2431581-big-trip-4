import EventsView from '../view/trip-point-list-view.js';
import tripPointView from '../view/trip-point-view.js';
import EditingtripPointView from '../view/editing-trip-point-view.js';
import SortingView from '../view/sorting-view.js';
import { render } from '../render.js';

export default class tripPointPresenter {
  constructor(tripContainer) {
    this.eventsList = new EventsView();
    this.tripContainer = tripContainer;
  }

  init (tripPointsModel) {
    this.tripPointsModel = tripPointsModel;
    this.tripPoints = [...this.tripPointsModel.getTripPoints()];
    this.destinations = [...this.tripPointsModel.getDestinations()];
    this.offers = [...this.tripPointsModel.getOffers()];

    render(new SortingView(), this.tripContainer);
    render(this.eventsList, this.tripContainer);
    render(new EditingtripPointView(this.tripPoints[0], this.destinations, this.offers), this.eventsList.getElement());

    for (const tripPoint of this.tripPoints){
      render(new tripPointView(tripPoint, this.destinations, this.offers), this.eventsList.getElement());
    }

  }
}
