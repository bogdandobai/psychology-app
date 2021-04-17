import { StateType } from 'typesafe-actions';
import rootReducer from '../reducers';
import { AuthActions } from '@auth/store/reducers/auth.reducer';
import { CoreActions } from '@src/store/reducers/core.reducer';

export type RootAction = AuthActions | CoreActions

export type RootState = StateType<typeof rootReducer>;
