import {api} from '../../api';
import {showService} from '../showService';
import {episodeList} from './mocks';

describe('ShowService', () => {
  describe('getEpisodes', () => {
    beforeAll(() => {
      jest.spyOn(api, 'get').mockResolvedValue({data: episodeList});
    });

    it('when API return episode list return all season names', async () => {
      const spyFn = jest
        .spyOn(api, 'get')
        .mockResolvedValue({data: episodeList});

      const groupedEpisodes = await showService.getEpisodes('250');

      expect(groupedEpisodes.seasonNames.includes('1')).toBeTruthy();
      expect(groupedEpisodes.seasonNames.includes('2')).toBeTruthy();

      expect(spyFn).toHaveBeenCalledTimes(1);
    });

    it('when API return episode list return so return the episodes grouped by season', async () => {
      const groupedEpisodes = await showService.getEpisodes('250');

      const season1 = groupedEpisodes.seasons[1];
      const season2 = groupedEpisodes.seasons[2];

      expect(season1.includes(episodeList[0])).toBeTruthy();
      expect(season2.includes(episodeList[1])).toBeTruthy();
    });
  });
});
