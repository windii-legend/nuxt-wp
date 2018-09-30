import { MutationTree } from 'vuex';
import { ArticleState } from './types';
import { Article } from '~/models/article'

export const mutations: MutationTree<ArticleState> = {
    articlesLoaded(state, payload: Article[]) {
        state.error = false;
        state.articles = payload;
    },
    articlesLoadedError(state) {
        state.error = true;
        state.articles = [];
    },
    articleLoaded(state, payload: Article) {
        state.error = false;
        state.article = payload;
    },
    articleLoadedError(state) {
        state.error = true;
        state.article = null;
    },
};
