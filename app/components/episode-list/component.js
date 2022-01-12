import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EpisodeList extends Component {
  @tracked episodeOnesOnly = false;

  get allEpisodes() {
    return this.args.episodes;
  }

  get episodes() {
    if (this.episodeOnesOnly) {
      return this.allEpisodes.filterBy('episodeInSeason', 1);
    }
    return this.allEpisodes;
  }

  @action showOnlyEpisodeOnes() {
    this.episodeOnesOnly = true;
  }

  @action showAll() {
    this.episodeOnesOnly = false;
  }
}
