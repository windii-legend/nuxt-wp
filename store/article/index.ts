import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ArticleState } from './types';
import { RootState } from '../types';

export const state: ArticleState= {
    articles: [],
    article: null,
    error: false
};

const namespaced: boolean = true;

export const article: Module<ArticleState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
