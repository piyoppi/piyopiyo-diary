<template>
  <div class="postform-boundary">
    <form @submit.prevent="post">
      <input
        type="text"
        class="postform-textbox"
        placeholder="やっていることを端的に"
        v-model="text"
      />
      <button class="postform-submit">
        <span class="mdi mdi-send"></span>
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  PiyopiyoCommandParser,
  ParsedType
} from '@/lib/PiyopiyoCommandParser'

const parser = new PiyopiyoCommandParser()

export default Vue.extend({
  data: function() {
    return {
      text: ''
    }
  },
  methods: {
    post: function() {
      if( this.text === '' ) return;

      const result = parser.parse(this.text)

      switch(result.mode) {
        case ParsedType.PostMessage:
          this.$emit('post', result.data.message, result.data.path)
          break;

        case ParsedType.Filter:
          this.$emit('filter', result.data.path)
          break;

        case ParsedType.Export:
          this.$emit('export')
          break;

        case ParsedType.Delete:
          this.$emit('delete-post')
          break;
      }

      this.text = ''
    }
  }
})
</script>

<style scoped>
.postform-boundary {
  background-color: whitesmoke;
  width: 100%;
  padding: 10px;
}
.postform-textbox {
  margin: 10px;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid gainsboro;
  width: calc(100% - 150px);
}
.postform-submit {
  padding: 10px;
  border-width: 1px 1px 3px 1px;
  border-radius: 3px;
}
</style>
