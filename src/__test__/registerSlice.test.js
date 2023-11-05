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
      const newUser = { id: 1, name: 'New User', email: 'newuser@example.com' };
      expect(registerReducer(initialState, { type: registerAsync.fulfilled.type, payload: newUser })).toEqual({
        ...initialState,
        data: newUser,
        loading: false,
      });
    });
  
    it('should handle registerAsync rejected', () => {
      const error = 'Registration failed';
      expect(registerReducer(initialState, { type: registerAsync.rejected.type, error: { message: error } })).toEqual({
        ...initialState,
        error: error,
        loading: false,
      });
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
