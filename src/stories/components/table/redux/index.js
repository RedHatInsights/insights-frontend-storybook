import logger from 'redux-logger';
import { ReducerRegistry } from '@red-hat-insights/insights-frontend-components';

export * from './actions';
export * from './reducers';

let registry;

export function init(initialState = {}) {
    if (!registry) {
        registry = new ReducerRegistry(initialState, [logger]);
    }
    return registry;
}
