<template>
  <div class="suggestions-boundary">
    <ul class="suggestions-list">
      <li v-for="suggestion in filteredSuggestions" :key="suggestion.id">{{ suggestion.id }} | {{ suggestion.text }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

export interface Suggestion {
  id: number;
  text: string;
  value: string;
}

export default Vue.extend({
  data: function() {
    return {
    }
  },
  computed: {
    filteredSuggestions: function(): Array<Suggestion> {
      if( this.text === "" ) return []
      return this.suggestions.filter((suggestion: Suggestion) => suggestion.value.indexOf(this.text) === 0)
    }
  },
  props: {
    suggestions: {
      type: Array,
      required: true
    } as PropOptions<Array<Suggestion>>,

    text: {
      type: String,
      required: true
    } as PropOptions<string>
  },
  mounted: function() {
    window.addEventListener('keypress', (e: KeyboardEvent) => {
      if( this.filteredSuggestions.length > 0 && e.keyCode >= 49 && e.keyCode <= 56 ) {
        const index = e.keyCode - 49
        if( this.filteredSuggestions.length <= index ) return

        e.preventDefault()
        this.$emit('accepted', this.filteredSuggestions[index].value)
      }
    })
  },
  methods: {
  }
})
</script>

<style scoped>
.suggestions-boundary {
  width: 100%;
  padding: 10px;
}
.suggestions-list {
  list-style-type: none;
  font-size: 10pt;
}
</style>
