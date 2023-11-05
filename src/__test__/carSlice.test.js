import carReducer, {
    deleteCar,
    fetchCarStart,
    fetchCarSuccess,
    fetchCarFailure,
    toggleDeleteMode,
  } from '../redux/slices/carSlice';
  
  import configureStore from 'redux-mock-store';
  import thunk from 'redux-thunk';
  import fetchMock from 'jest-fetch-mock';
  
  fetchMock.enableMocks();
  
  const mockStore = configureStore([thunk]);
  
  const initialState = {
    cars: [],
    loading: false,
    error: null,
    deleteMode: false,
  };

  describe('carSlice', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });
  
    it('should handle initial state', () => {
      expect(carReducer(undefined, { type: 'unknown' })).toEqual({
        cars: [],
        loading: false,
        error: null,
        deleteMode: false,
      });
    });
  
    it('should handle fetchCarStart', () => {
      const actual = carReducer(initialState, fetchCarStart());
      expect(actual.loading).toEqual(true);
    });
  
    it('should handle fetchCarSuccess', () => {
      const mockCars = [{ id: 1, name: 'Test Car' }];
      const actual = carReducer(initialState, fetchCarSuccess(mockCars));
      expect(actual.cars).toEqual(mockCars);
    });
  
    it('should handle fetchCarFailure', () => {
      const error = 'Error fetching cars';
      const actual = carReducer(initialState, fetchCarFailure(error));
      expect(actual.error).toEqual(error);
    });
  
    it('should handle toggleDeleteMode', () => {
      const actual = carReducer(initialState, toggleDeleteMode());
      expect(actual.deleteMode).toEqual(true);
    });
  
    it('handles deleteCar', async () => {
      const store = mockStore({ cars: [] });
  
      fetch.mockResponseOnce(JSON.stringify({}), { status: 200 });
  
      const carIdToDelete = 1;
      await store.dispatch(deleteCar(carIdToDelete));
  
      const actions = store.getActions();
      expect(actions[0].type).toBe(deleteCar.pending.type);
      expect(actions[1].type).toBe(deleteCar.fulfilled.type);
      expect(actions[1].payload).toBe(carIdToDelete);
    });
  });
  