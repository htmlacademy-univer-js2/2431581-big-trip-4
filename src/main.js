import FiltersView from './view/filters-view.js';
import RoutePointPresenter from './presenter/route-point-presenter.js';
import { render } from './render.js';

const siteHeaderElement = document.querySelector('.trip-main');
const siteMainElement = document.querySelector('.page-main');
const tripPresenter = new RoutePointPresenter(siteMainElement.querySelector('.trip-events'));

render(new FiltersView(), siteHeaderElement.querySelector('.trip-controls__filters'));

tripPresenter.init();
