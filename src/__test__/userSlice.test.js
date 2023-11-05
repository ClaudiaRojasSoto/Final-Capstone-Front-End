import userReducer, {
    getCurrentUser,
  } from '../redux/slices/userSlice';
  
  const initialState = {
    currentUser: null,
    status: 'idle',
    error: null,
  };
  
  describe('userSlice', () => {
    it('should handle initial state', () => {
      expect(userReducer(undefined, {})).toEqual(initialState);
    });
  
    it('should handle getCurrentUser.pending', () => {
      expect(userReducer(initialState, { type: getCurrentUser.pending.type })).toEqual({
        ...initialState,
        status: 'loading',
      });
    });
  
    it('should handle getCurrentUser.fulfilled', () => {
      const mockUser = { id: 1, name: 'Test User' };
      expect(userReducer(initialState, { type: getCurrentUser.fulfilled.type, payload: mockUser })).toEqual({
        ...initialState,
        currentUser: mockUser,
        status: 'succeeded',
      });
    });
  
    it('should handle getCurrentUser.rejected', () => {
      const error = 'Failed to fetch current user.';
      expect(userReducer(initialState, { type: getCurrentUser.rejected.type, payload: error })).toEqual({
        ...initialState,
        error: error,
        status: 'failed',
      });
    });
  
  });
