import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { MetaState } from './types';
import { RootState } from '../types';

export const state: MetaState= {
    meta: null,
    error: false
};

const namespaced: boolean = true;

export const meta: Module<MetaState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
