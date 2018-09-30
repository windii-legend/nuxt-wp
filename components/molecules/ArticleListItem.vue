<template lang="pug">
article
  .date
    span(v-html='article.date')
    span.topics
      nuxt-link.topic.fancy(v-for="topic in article._embedded['wp:term'][0]", :to='`/topics/${topic.slug}`', :key='topic.id', v-html='topic.name')
  nuxt-link.row(:to='`/${article.slug}`')
    .col
      .lazy.thumbnail(v-if="article._embedded['wp:featuredmedia']")
        img(v-lazy="article._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url")
      .lazy.medium(v-if="article._embedded['wp:featuredmedia']")
        img(v-lazy="article._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url")
    .col
      h2(v-html='article.title.rendered')
      .excerpt(v-html='article.excerpt.rendered')
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"

import { Article } from '~/models/article'

@Component({})
export default class ArticleListItem extends Vue {
  @Prop() article: Article
}
</script>
<style lang="scss" scoped>
@import '~assets/css/vars.scss';

  article + article {
    border-top: 1px dotted lighten($primary, 20%);
    margin-top: 32px;
    padding-top: 32px;
  }

  .row {
    display: flex;

    @media (max-width: 700px) {
      flex-direction: column;
    }

    & + .row {
      margin-top: 16px;
    }

    .col {
      display: flex;
      flex-direction: column;

      @media (max-width: 700px) {
        & + .col {
          margin-top: 16px;
        }
      }
    }
  }

  .date {
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    margin-bottom: 12px;
    text-transform: uppercase;

    .topic {
      & + .topic {
        margin-left: 8px;

        &::before {
          content: ', ';
          color: $primary;
          left: -7px;
          position: absolute;
        }
      }
    }

    a:hover {
      color: $accent;
    }
  }

  h2 {
    color: #111;
    font-size: 1.2rem;
    margin-bottom: 8px;
    margin-top: -6px;
  }

  .excerpt {
    @media (max-width: 500px) {
      // display: none;
    }
  }

  .lazy {
    margin: 0 22px 0 0;

     &.thumbnail {
      display: block;
    }

    &.medium {
      display: none;
    }

    @media (max-width: 700px) {
      margin: 0;

      &.thumbnail {
        display: none;
      }

      &.medium {
        display: block;
      }
    }

    img {
      display: block;
      height: 144px;
      width: 144px;

      @media (max-width: 1200px) {
        height: 96px;
        width: 96px;
      }

      @media (max-width: 700px) {
        height: 200px;
        object-fit: cover;
        width: 100%;
      }
    }
  }

  a {
    color: $primary;
    transition: 0.2s;
    text-decoration: none;

    &:hover {
      color: #000;
      transform: translateX(4px);
    }
  }

  p {
    margin: 0;
  }
</style>
