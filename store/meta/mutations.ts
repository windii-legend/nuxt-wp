import { MutationTree } from 'vuex';
import { MetaState } from './types';
import { Meta } from '~/models/meta'

export const mutations: MutationTree<MetaState> = {
    setMeta(state, payload: Meta) {
        state.error = false;
        state.meta = payload;
    }
};
