import React, {createRef} from 'react';
import {render, act, fireEvent} from '@testing-library/react-native';
import {Modalize} from 'react-native-modalize';
import {SeasonModal} from '../SeasonModal';

describe('SeasonModal', () => {
  const setup = {
    ref: createRef<Modalize>(),
    selectedSeason: '1',
    onSelectSeasonMock: jest.fn(),
    seasons: ['1', '2', '3'],
  };

  it('should show all seasons', () => {
    const {getAllByText} = render(
      <SeasonModal
        ref={setup.ref}
        selectedSeason={setup.selectedSeason}
        onSelectSeason={setup.onSelectSeason}
        seasons={setup.seasons}
      />,
    );

    act(() => {
      setup.ref.current?.open();
    });

    expect(getAllByText(/season/i)).toHaveLength(setup.seasons.length);
  });

  it('should call onSelectSeason when season is selected', () => {
    const {getByText} = render(
      <SeasonModal
        ref={setup.ref}
        selectedSeason={setup.selectedSeason}
        onSelectSeason={setup.onSelectSeasonMock}
        seasons={setup.seasons}
      />,
    );

    act(() => {
      setup.ref.current?.open();
    });

    const seasonButton = getByText(/season 1/i);

    fireEvent.press(seasonButton);

    expect(setup.onSelectSeasonMock).toHaveBeenCalledWith('1');
  });
});
