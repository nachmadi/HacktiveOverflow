<template>
  <div>
    <h1>{{msg}}</h1>
    <HeaderBlog></HeaderBlog>
    <ContentBlog></ContentBlog>
    <FooterBlog></FooterBlog>
  </div>
</template>

<script>
import HeaderBlog from '@/components/HeaderBlog'
import ContentBlog from '@/components/ContentBlog'
import FooterBlog from '@/components/FooterBlog'
export default {
  name: 'hello',
  components: {
    HeaderBlog,
    ContentBlog,
    FooterBlog
  },
  data () {
    return {
      msg: 'Selamat datang di....'
    }
  }
}
</script>
