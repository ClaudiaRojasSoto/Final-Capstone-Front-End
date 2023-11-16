import loginReducer, {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
} from '../redux/slices/loginSlice';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

describe('loginSlice', () => {
  it('should handle initial state', () => {
    expect(loginReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle fetchDataStart', () => {
    expect(loginReducer(initialState, fetchDataStart())).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle fetchDataSuccess', () => {
    const userData = { id: 1, name: 'Test User' };
    expect(loginReducer(initialState, fetchDataSuccess(userData))).toEqual({
      ...initialState,
      data: userData,
      loading: false,
    });
  });

  it('should handle fetchDataFailure', () => {
    const error = 'Error message';
    expect(loginReducer(initialState, fetchDataFailure(error))).toEqual({
      ...initialState,
      error,
      loading: false,
    });
  });
});
