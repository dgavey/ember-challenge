import Route from '@ember/routing/route';
import allData from '../data/all-data';
import { service } from '@ember/service';
export default class IndexRoute extends Route {
  @service store;
  async model() {
    await this.store.pushPayload({ episodes: allData });
    return this.store.peekAll('episode');
  }
}
