import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import AnswerLists from '@/components/AnswerLists'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [
        {
          path: ':_id',
          name: 'Answer_by_id_question',
          component: AnswerLists,
          props: true
        }
      ]
    }
  ]
})
