<template lang="html">
  <div class="container-fluid text-center">
    <div class="row content">
      <div class="col-sm-2 sidenav">
        <p><a href="#">Link</a></p>
        <p><a href="#">Link</a></p>
        <p><a href="#">Link</a></p>
      </div>

      <!-- <router-view></router-view> -->
      <div class="col-sm-8 text-left" >
        <QuestionList v-for="question in questions" v-bind:prop_qlist_question="question" v-bind:key="question._id"/>
      </div>
      <div class="col-sm-2 sidenav">
        <div class="well">
          <p>ADS</p>
        </div>
        <div class="well">
          <p>ADS</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import QuestionList from '@/components/QuestionList'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    QuestionList
  },
  //mengklone state yang ada di store
  computed: {
    ...mapState([
      'questions'
    ])
  },
  // mengklone method yang ada di store
  methods: {
    ...mapActions([
      'getAllQuestion'
    ])
  },
  created () {
    this.getAllQuestion();
  }
}

</script>
