<template lang="pug">
article.single-article
  ArticleFeaturedImage(v-if='featuredImage', :expanded='expanded', :featured-image='featuredImage')
  transition(name='slide-fade')
    .narrow(:class="{ 'expanded': expanded, 'no-featured-image': !featuredImage }")
      button.expand-featured-image(title='Show full image', @click.prevent='expandFeaturedImage', :class="{ 'expanded': expanded }", v-if='featuredImage.source_url')
        svg(fill='#000000', height='24', viewBox='0 0 24 24', width='24', xmlns='http://www.w3.org/2000/svg')
          path(d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z')
          path(d='M0 0h24v24H0z', fill='none')
      .meta
        h1.title(v-html='article.title.rendered')
        .details
          span {{article.date}}
          span.separator
          //nuxt-link.author.fancy(:to='`/authors/${author.slug}`') {{ author.name }}
      #article-content.content(v-html='article.content.rendered')
      //ArticleComments(:article='article')
  //div(v-html='linkRGB')
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

import { Article } from '~/models/article'

import ArticleFeaturedImage from '~/components/molecules/ArticleFeaturedImage.vue'
import ArticleComments from '~/components/molecules/ArticleComments'

@Component({
  components: {
    ArticleFeaturedImage,
    ArticleComments
  }
})
export default class extends Vue {
  @Prop() article: Article
  disqusReady = false
  expanded = false
  linkRGB = {}
  
  get author () {
    return this.article._embedded.author[0]
  }
  get featuredImage () {
    let featuredImage = this.article._embedded['wp:featuredmedia']

    if (featuredImage) {
      return featuredImage[0].media_details.sizes.large || featuredImage[0].media_details.sizes.full || false
    } else {
      return { height: 0, width: 0 }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/css/vars.scss';

article {
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;

  &.page-enter-active .narrow {
    transition: transform 1s cubic-bezier(.11,.89,.31,.99), opacity 0.75s ease-out;
  }

  &.page-enter .narrow, .page-leave-to .narrow {
    transform: translateY(16px);
  }

  .narrow {
    background-color: #efefef;
    margin: 0 auto;
    max-width: 842px;
    min-height: calc(100vh - 80px - 96px - 200px);
    padding: 0 96px 96px 96px;
    position: relative;
    transition: min-height 1s, transform 1s;
    transform: translateY(0);
    width: 100%;

    &.expanded {
      min-height: 0;
    }

    @media (max-width: 900px) {
      margin-top: 0 !important;
      max-width: 100%;
      min-height: initial;
    }

    @media (max-width: 700px) {
      max-width: none;
      padding: 0 16px 16px 16px;
    }

    .expand-featured-image {
      background-color: transparent;
      border: 0;
      cursor: pointer;
      outline: 0;
      position: absolute;
      right: 32px;
      top: 32px;
      transition: 1s;
      z-index: 1;

      @media (max-width: 900px) {
        display: none;
      }

      &:hover {
        svg {
          opacity: 1;
        }
      }

      &.expanded {
        transform: rotate(180deg);
      }

      svg {
        fill: $primary;
        height: 24px;
        opacity: 0.7;
        transition: 0.1s;
        width: 24px;
      }
    }

    &.no-featured-image {
      margin: 0 auto;
    }
  }

  .meta {
    .title {
      font-size: 40px;
      line-height: 1;
      margin-bottom: 16px;
      margin-top: 0;
      padding-top: 64px;

      @media (max-width: 700px) {
        padding-top: 48px;
      }

      @media (max-width: 500px) {
        padding-top: 32px;
      }
    }

    .details {
      font-size: 0.8rem;

      .separator {
        padding: 0 0.5rem;
      }
    }
  }
}
</style>

<style lang="scss">
/*@import '../node_modules/lightgallery.js/dist/css/lightgallery.css';*/
@import '~assets/css/vars.scss';

.lg-backdrop {
  background-color: #111;
}

#lg-counter {
  font-family: 'Roboto', sans-serif;
}

.lg-toolbar,
.lg-actions .lg-next,
.lg-actions .lg-prev,
.lg-outer .lg-thumb-outer,
.lg-outer .lg-toggle-thumb {
  background-color: #1a1a1a;
}

#lg-actual-size:after {
  content: "\E311";
}

#lg-zoom-in,
#lg-zoom-out {
  display: none;
}

.lg-outer .lg-thumb-item {
  border-radius: 2px;
}

.lg-outer .lg-thumb-item {
  border-color: #aaa;
}

.lg-outer .lg-thumb-item.active,
.lg-outer .lg-thumb-item:hover {
  border-color: #fff;
}
</style>

<style lang="scss">
@import '~assets/css/vars.scss';

.single-article {
  .content {
    border-top: 1px dotted lighten($primary, 20%);
    padding-top: 32px;
    margin-top: 32px;

    .alignnone,
    .size-full,
    .wp-caption {
      background-color: #fff;
      padding: 16px;
      display: block;
      margin-bottom: 32px;

      img {
        display: block;
        padding: 0;
        margin-bottom: 16px;
      }

      &.alignnone {
        max-width: 100%;
      }

      &.aligncenter {
        margin-left: auto;
        margin-right: auto;
      }

      &.alignleft {
        float: left;
        margin-right: 32px;
        width: initial;
      }

      &.alignright {
        float: right;
        margin-left: 32px;
        width: initial;
      }
    }

    .wp-caption {
      p {
        margin-bottom: 0;

        & + p {
          margin-top: 16px;
        }
      }
    }

    p {
      margin-bottom: 32px;
      margin-top: 0;
    }

    a {
      color: $accent;
      position: relative;

      &:hover {
        color: $accent;
      }

      &::after {
        background: rgba($accent, 0.5);
        content: '';
        height: 1px;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 100%;
        transform: translateY(-4px);
        transition: height 0.1s, opacity 0.1s, transform 0.1s;
        width: 100%;
      }

      &:hover,
      &:focus {
        &::after {
          height: 4px;
          opacity: 1;
          transform: translateY(0px);
        }
      }
    }

    img {
      height: auto;
      max-width: 100%;
    }

    > *:first-child {
      margin-top: 0;
    }
  }
}
</style>
