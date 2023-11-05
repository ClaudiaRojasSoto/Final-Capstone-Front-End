import registerReducer, {
  registerAsync,
  selectRegisterData,
  selectRegisterLoading,
  selectRegisterError,
} from '../redux/slices/registerSlice';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

describe('registerSlice', () => {
  it('should handle initial state', () => {
    expect(registerReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle registerAsync pending', () => {
    expect(registerReducer(initialState, { type: registerAsync.pending.type })).toEqual({
      ...initialState,
      loading: true,
    });
  });

  it('should handle registerAsync fulfilled', () => {
    const newUser = {
      id: 1,
      name: 'New User',
      email: 'newuser@example.com',
    };
    const action = { type: registerAsync.fulfilled.type, payload: newUser };
    const expectedState = { ...initialState, data: newUser, loading: false };
    expect(registerReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle registerAsync rejected', () => {
    const error = 'Registration failed';
    const action = {
      type: registerAsync.rejected.type,
      error: { message: error },
    };
    const expectedState = {
      ...initialState,
      error,
      loading: false,
    };
    expect(registerReducer(initialState, action)).toEqual(expectedState);
  });
});

describe('registerSlice selectors', () => {
  const state = {
    register: initialState,
  };

  it('selectRegisterData', () => {
    expect(selectRegisterData(state)).toBe(state.register.data);
  });

  it('selectRegisterLoading', () => {
    expect(selectRegisterLoading(state)).toBe(state.register.loading);
  });

  it('selectRegisterError', () => {
    expect(selectRegisterError(state)).toBe(state.register.error);
  });
});
