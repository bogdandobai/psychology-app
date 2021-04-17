import { AuthState } from '@auth/store/reducers/auth.reducer';
import { CoreState } from '@src/store/reducers/core.reducer';


export default interface AppState {
  auth: AuthState;
  core: CoreState
}
