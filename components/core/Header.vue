<template lang="pug">
header
  div
      nuxt-link.blog-title(to='/', exact='')
        h1 {{metaState.meta.name}}    
      nav
        nuxt-link(to='/', exact='') 最近の投稿      
        nuxt-link(to='/topics') カテゴリー
        nuxt-link(to='/authors') 投稿者
</template>
<style lang="sass" scoped>
header
  font-family: 'Roboto', sans-serif
  left: 0
  position: fixed
  top: 0
  width: 100%
  z-index: 10

  div
    align-items: center
    background-color: #fff
    display: flex
    height: 80px
    margin: 0 auto
    max-width: 100%
    padding: 0 32px
    transition: padding-top 0.5s, padding-bottom 0.5s
    max-width: 1000px
    @media (max-width: 700px)
      height: 60px
      padding: 16px
  .blog-title
    margin-right: 32px
    @media (max-width: 700px)
      margin-right: 16px
    h1
      color: #e03f3f
      cursor: pointer
      font-size: 1.1rem
      font-weight: bold
  nav
    flex-shrink: 0
    @media (max-width: 500px)
      display: none
  a
    border-color: black
    color: #999
    font-size: 0.9rem
    font-weight: 300
    text-decoration: none
    transition: color 0.1s, border-color 0.1s

    &:hover
      color: #555
      border-color: #555
      
    &.nuxt-link-active:not(.blog-title)
      padding-bottom: 6px
      border-bottom: 1px solid #e03f3f

    & + a
      margin-left: 32px;
      @media (max-width: 700px)
        margin-left: 16px
</style>

<script lang="ts">
import {
  Component,
  Vue,
} from "nuxt-property-decorator"

import { State } from 'vuex-class';

import { MetaState } from '~/store/meta/types';


@Component({})
export default class Header extends Vue {
  @State('meta') metaState : MetaState
}
</script lnag="ts">
