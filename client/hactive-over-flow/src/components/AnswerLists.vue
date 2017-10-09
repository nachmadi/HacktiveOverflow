<template lang="html">

<div class="list-group">
    <a href="#" class="list-group-item">
      <h4 class="list-group-item-heading">{{question.caption}}</h4>
      <p class="list-group-item-text">{{question.question}}</p>
    </a>
    <div v-for = "answer in answers" class="">
          {{answer.answer}}
    </div>
</div>
</template>

<script>
import axios from "axios"
export default {
  props: ['_id'],
  data () {
    return {
      answers: [],
      question: {},
      id_question: ""
    }
  },
  methods: {
    getQuestion () {
      axios.get(`http://localhost:3000/questions/${this._id}`)
      .then(data => {
        this.question = data
        this.id_question = data._id
      })
      .catch(err => {
        console.log(err)
      })
    },
    getAnswer () {
      axios.get(`http://localhost:3000/answers/${this.id_question}`)
      .then(data => {
          this.answer=data
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getData()
    this.getAnswer()
  }
}
</script>
