import React from 'react';
import { mapDispatchToProps } from './HouseCard';
import {
  addMembers
} from '../../actions/initialFetchActions';



describe('houseCard', () => {
  describe('MDTP', () => {
    it('should call dispatch whith a addInitialInfo action', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addMembers([{ name: 'mike' }])

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addMembers([{ name: 'mike' }]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })
})