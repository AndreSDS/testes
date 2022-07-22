import {DaysOfWeek} from '../../../../../models/CommonModels';
import {Episode} from '../../../../../models/EpisodeModel';
import {Show} from '../../../../../models/ShowModel';

const show: Show = {
  id: 250,
  url: 'http://www.tvmaze.com/shows/250/the-office',
  name: 'The Office',
  type: 'Scripted',
  genres: ['Comedy'],
  status: 'Ended',
  schedule: {
    time: '07:00',
    days: [
      DaysOfWeek.Monday,
      DaysOfWeek.Tuesday,
      DaysOfWeek.Wednesday,
      DaysOfWeek.Thursday,
      DaysOfWeek.Friday,
    ],
  },
  rating: {
    average: null,
  },
  image: {
    medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/0/9.jpg',
    original:
      'http://static.tvmaze.com/uploads/images/original_untouched/0/9.jpg',
  },
  summary:
    '<p>The Office is a British sitcom created by David Crane and first shown on BBC One in May 2005. The show is based on the comic strip series of the same name, which ran from its debut on Saturday Night Live to its final episode in 2005.</p>',
};

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

export const mocks = {
  show,
  episode1,
  episode2,
};
