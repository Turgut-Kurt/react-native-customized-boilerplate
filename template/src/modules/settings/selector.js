import {createSelector} from 'reselect';
export const settings = state => state.settings;
export const langSelector = createSelector(settings, data => data.lang);
