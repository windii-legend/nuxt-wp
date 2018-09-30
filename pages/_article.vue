<template>
  <ArticlePage :article="articleState.article"/>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"

import { State } from 'vuex-class';

import { ArticleState } from '~/store/article/types';
import ArticlePage from "~/components/pages/Article"

@Component({
  components: {
    ArticlePage,
  }
})
export default class extends Vue {
  @State('article') articleState : ArticleState

  async fetch ({ store, params }) {
    await store.dispatch('article/fetchArticle', params.article)
  }
}
</script>
