import FiltersView from './view/filters-view.js';
import TripPointPresenter from './presenter/trip-point-presenter.js';
import { render } from './render.js';
import TripPointsModel from './model/trip-point-model.js';
import { getTripPoints, getDestinations, getOffersByType } from './mocks/trip-point.js';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const tripPointsPresenter = new TripPointPresenter(siteMainElement.querySelector('.trip-events'));

const tripPoints = getTripPoints();
const offersByType = getOffersByType();
const destinations = getDestinations();

const tripPointsModel = new TripPointsModel();

render(new FiltersView(), siteHeaderElement.querySelector('.trip-controls__filters'));

tripPointsModel.init(tripPoints, destinations, offersByType);
tripPointsPresenter.init(tripPointsModel);
