import React from 'react';
import {render} from '@testing-library/react-native';
import {StarRating} from './StarRating';

describe('StarRating', () => {
  describe('when rating is not provided', () => {
    it('should return nothing', () => {
      const {container} = render(<StarRating />);

      expect(container.children).toHaveLength(0);
    });
  });

  describe('when rating is provided', () => {
    it('show the average', () => {
      const {getByText} = render(<StarRating rating={{average: 4.5}} />);
      const element = getByText('4.5');

      expect(element).toBeTruthy();
    });

    it('show the star icon', () => {
      const {getByTestId} = render(<StarRating rating={{average: 4.5}} />);
      const icon = getByTestId('star-icon');

      expect(icon).toBeTruthy();
    });
  });
});
