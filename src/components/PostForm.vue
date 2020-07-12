<template>
  <div class="postform-boundary">
    <form @submit.prevent="post">
      <input
        ref="text"
        type="text"
        class="postform-textbox"
        placeholder="やっていることを端的に"
        :value="value"
        @input="textChanged"
      />
      <button class="postform-submit">
        <span class="mdi mdi-send"></span>
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import {
  PiyopiyoCommandParser,
  ParsedType
} from '@/lib/PiyopiyoCommandParser'

const parser = new PiyopiyoCommandParser()

export default Vue.extend({
  data: function() {
    return {
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    } as PropOptions<string>
  },
  methods: {
    post: function() {
      if( this.value === '' ) return;

      const result = parser.parse(this.value)

      switch(result.mode) {
        case ParsedType.PostMessage:
          this.$emit('post', result.data.message, result.data.path)
          break;

        case ParsedType.Edit:
          this.$emit('edit', result.data.message, result.data.id)
          if( result.data.message === '' ) return;
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

        case ParsedType.GroupByPath:
          this.$emit('group-by-path')
          break;

        case ParsedType.SetCalendarKey:
          this.$emit('set-calendar-key', result.data.key)
          break;

        case ParsedType.SetCalendarId:
          this.$emit('set-calendar-id', result.data.key)
          break;

        case ParsedType.Sync:
          this.$emit('sync')
          break;
      }

      this.$emit('input', '')
    },

    textChanged: function(e: InputEvent) {
      if (!(e.target instanceof HTMLInputElement)) return;
      this.$emit('input', e.target.value)
    },

    focus: function() {
      (this.$refs.text as any).focus()
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
