<template>
  <div class="articles">
    <ArticleListItem v-for="article in articles" :article="article" :key="article.id"/>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

import { Article } from '~/models/article'

import ArticleListItem from '~/components/molecules/ArticleListItem'

@Component({
  components: {
    ArticleListItem
  }
})
export default class ArticleList extends Vue {
  @Prop() articles: Article[]
}
</script>
<style scoped>
</style>
