import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { article } from './article/index';
import { meta } from './meta/index'

const options: StoreOptions<RootState> = {
    state: {
        version: '1.0.0',
    },
    modules: {
      meta,
      article,
    },
    actions: {
      async nuxtServerInit ({ commit, state }) {
        let meta = await this.$axios.get(process.env.apiHost)
        commit('meta/setMeta', meta.data)
      }
    }
};
const store = () => new Vuex.Store<RootState>(options);

export default store
