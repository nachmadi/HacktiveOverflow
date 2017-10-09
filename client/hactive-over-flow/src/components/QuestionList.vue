<template lang="html">
  <div class="list-group">
    <router-link :to="{name: 'Answer_by_id_question', params:{_id: prop_qlist_question._id}}">
      <ul>
        {{prop_qlist_question.caption}}
        {{prop_qlist_question.question}}
      </ul>
    </router-link>

  </div>
</template>

<script>

export default {
  props: ['prop_qlist_question'],
}
</script>
