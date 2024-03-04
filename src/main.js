import FiltersView from './view/filters-view.js';
import RoutePointPresenter from './presenter/route-point-presenter.js';
import { render } from './render.js';
import RoutePointsModel from './model/route-point-model.js';
import { getRoutePoints, getDestinations, getOffersByType } from './mocks/route-point.js';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const routePointsPresenter = new RoutePointPresenter(siteMainElement.querySelector('.trip-events'));

const routePoints = getRoutePoints();
const offersByType = getOffersByType();
const destinations = getDestinations();

const routePointsModel = new RoutePointsModel();

render(new FiltersView(), siteHeaderElement.querySelector('.trip-controls__filters'));

routePointsModel.init(routePoints, destinations, offersByType);
routePointsPresenter.init(routePointsModel);
