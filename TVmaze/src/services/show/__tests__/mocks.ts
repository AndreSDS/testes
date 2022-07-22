import {Episode} from '../../../models/EpisodeModel';

const episode1: Episode = {
  id: 1,
  url: 'https://www.tvmaze.com/episodes/1/the-office-us-1x01-pilot',
  name: 'Pilot',
  season: 1,
  number: 1,
  type: 'regular',
  airdate: '2001-01-01',
  airtime: '22:00',
  airstamp: '2001-01-01T22:00:00-0500',
  runtime: 60,
  rating: {
    average: null,
  },
  image: {
    medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/1/3.jpg',
    original:
      'https://static.tvmaze.com/uploads/images/original_untouched/1/3.jpg',
  },
  summary:
    '<p>The Office is a workplace management show that airs every Monday morning on <a href="http://www.fxnetworks.com/">FX</a>.</p>',
  _links: {
    self: {
      href: 'https://api.tvmaze.com/episodes/1',
    },
  },
};

const episode2: Episode = {
  id: 2,
  url: 'https://www.tvmaze.com/episodes/2/the-office-us-1x02-the-office-us-1x02-pilot',
  name: 'The Office US 1x02 Pilot',
  season: 2,
  number: 2,
  type: 'regular',
  airdate: '2001-01-01',
  airtime: '22:00',
  airstamp: '2001-01-01T22:00:00-0500',
  runtime: 60,
  rating: {
    average: null,
  },
  image: {
    medium: 'https://static.tvmaze.com/uploads/images/medium_landscape/1/3.jpg',
    original:
      'https://static.tvmaze.com/uploads/images/original_untouched/1/3.jpg',
  },
  summary:
    '<p>The Office is a workplace management show that airs every Monday morning on <a href="http://www.fxnetworks.com/">FX</a>.</p>',
  _links: {
    self: {
      href: 'https://api.tvmaze.com/episodes/2',
    },
  },
};

export const episodeList: Episode[] = [episode1, episode2];
