import { ActionTree } from 'vuex';
import axios from 'axios';
import { ArticleState } from './types';
import { RootState } from '../types';

import { Article } from '~/models/article'

export const actions: ActionTree<ArticleState, RootState> = {
    async fetchArticles({ commit }): Promise<any> {
        const response = await axios.get(`${process.env.apiHost}/wp/v2/posts?orderby=date&per_page=10&_embed`);
        const payload : Article[] = response && response.data
        commit('articlesLoaded', payload);
    },
    async fetchArticle({ commit, state }, slug): Promise<any> {
        const response = await axios.get(`${process.env.apiHost}/wp/v2/posts?slug=${slug}&_embed`);
        const payload : Article = response && response.data[0]
        commit('articleLoaded', payload);
    },
};
