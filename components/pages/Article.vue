<template lang="pug">
  .home
    .article
      ArticleDetail(:article='article')
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "nuxt-property-decorator"

import { Article } from '~/models/article'

import ArticleDetail from "~/components/organisms/ArticleDetail"

@Component({
  components: {
    ArticleDetail,
  }
})
export default class extends Vue {
  @Prop() article: Article
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
