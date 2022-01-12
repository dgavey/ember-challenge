import Model, { attr } from '@ember-data/model';

export default class Episode extends Model {
  @attr episodeNumber;
  @attr season;
  @attr episode_title;
  @attr episodeInSeason;
  @attr directedBy;
  @attr writtenBy;
  @attr airDate;
  @attr viewersInMillions;
}
