import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {mocks} from './mocks';
import {EpisodeList} from '../EpisodeList';
import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from 'react-query';
import {showService} from '../../../../../services/show/showService';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
});
const wrapper = ({children}: QueryClientProviderProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('EpisodeList', () => {
  beforeEach(() => {
    jest.spyOn(showService, 'getEpisodes').mockResolvedValueOnce({
      seasonNames: ['1', '2'],
      seasons: {
        1: [mocks.episode1],
        2: [mocks.episode2],
      },
    });
  });

  test('show all season one episodes at first', async () => {
    const {getByText, findByText, queryByText} = render(<EpisodeList show={mocks.show} />, {
      wrapper,
    });

    const episode1 = await findByText(mocks.episode1.name);

    expect(episode1).toBeTruthy();
  });
});
