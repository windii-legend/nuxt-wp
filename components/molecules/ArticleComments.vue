<template>
  <div class="comments">
    <div class="loading" v-if="!disqusReady">
      <span>Loading comments</span>
    </div>
    <div class="disqus" :class="{ ready: disqusReady }">
      <no-ssr>
        <lazy-component>
          <VueDisqus
            shortname="nuepress-kmr-io"
            :identifier="article.slug"
            @ready="disqusReady = true"
          />
        </lazy-component>
      </no-ssr>
    </div>
  </div>
</template>

<script lang="ts">
import VueDisqus from 'vue-disqus/VueDisqus.vue'
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

import { Article } from '~/models/article'
export default class extends Vue {
  @Prop() article: Article
}
</script>

<style lang="scss" scoped>
.comments {
  border-top: 1px dotted #65676a;
  padding-top: 32px;
  margin-top: 32px;

  .loading {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    width: 100%;

    .spinner {
      margin-bottom: 16px;
    }
  }

  .disqus {
    min-height: 440px;
    opacity: 0;
    transform: translateY(16px);
    transition: 1s;

    &.ready {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
