<template lang="pug">
  .home
    .articles
      ArticleList(:articles='articles')
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "nuxt-property-decorator"

import { Article } from '~/models/article'

import ArticleList from "~/components/organisms/ArticleList"

@Component({
  components: {
    ArticleList,
  }
})
export default class extends Vue {
  @Prop() articles: Article[]
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  .articles {
    padding: 0 32px;
    max-width: 900px;
    width: 100%;

    @media (max-width: 1000px) {
      max-width: none;
    }

    @media (max-width: 700px) {
      padding: 0 16px;
    }
  }
}
</style>
