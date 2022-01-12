import Component from '@glimmer/component';
// import { action } from '@ember/object';

export default class EpisodeList extends Component {
  get episodes() {
    return this.args.episodes;
  }
}
