import {Button} from '@pushkin/ui-kit';

import {Env, Errors} from './config';

const {NODE_ENV} = process.env;

if (NODE_ENV !== Env.PRODUCTION) {
    console.warn(Errors.NON_OPTIMIZED_BUILD);
}

export * from './components';
