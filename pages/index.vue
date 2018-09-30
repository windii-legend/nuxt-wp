<template>
  <ArticlesPage :articles="articleState.articles"/>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"

import { State } from 'vuex-class';

import { ArticleState } from '~/store/article/types';
import ArticlesPage from "~/components/pages/Articles"

@Component({
  components: {
    ArticlesPage,
  }
})
export default class extends Vue {
  @State('article') articleState : ArticleState

  async fetch ({ store, params }) {
    await store.dispatch('article/fetchArticles')
  }
}
</script>
