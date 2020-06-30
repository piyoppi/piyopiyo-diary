<template>
  <div>
    <ul class="timeline-list">
      <li v-for="item in filteredTimeline" :key="item.id">
        <div class="timeline-listitem-header">
          <div class="timeline-listitem-header-item timeline-listitem-path">{{ item.path }}</div>
          <div class="timeline-listitem-header-item timeline-listitem-date">{{ item.date }}</div>
          <div class="timeline-listitem-header-item">
            <button class="timeline-listitem-delete" @click="remove(item)">
              <span class="mdi mdi-delete-outline"></span>
            </button>
          </div>
        </div>
        <div class="timeline-listitem-message">
          {{ item.message }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { TimelineItem } from '@/types/Timeline'

export default Vue.extend({
  name: 'Timeline',

  props: {
    value: {
      type: Array,
      required: true
    } as PropOptions<Array<TimelineItem>>,
    filterPath: {
      type: String,
      default: ''
    } as PropOptions<string>
  },

  computed: {
    filteredTimeline: function(): Array<TimelineItem> {
      console.log(this.filterPath)
      if( !this.filterPath ) {
        return this.value
      }

      return this.value.filter((item: TimelineItem) => item.path === this.filterPath)
    }
  },

  methods: {
    remove: function(item: TimelineItem) {
      const index = this.value.indexOf(item)
      const changedTimeline = [...this.value.slice(0, index), ...this.value.slice(index + 1, this.value.length)]
      this.$emit('input', changedTimeline)
    }
  }
})
</script>

<style scoped>
.timeline-list {
  list-style-type: none;
  padding: 0;
}
.timeline-list li {
  padding: 5px;
  margin: 0;
  border-style: dotted;
  border-width: 0 0 1px 0;
  border-color: gainsboro;
}
.timeline-listitem-delete {
  border: none;
  background: none;
}
.timeline-listitem-header-item {
  font-size: 9pt;
  display: inline-block;
}
.timeline-listitem-path {
  color: gray;
  margin: 5px;
}
.timeline-listitem-date {
  color: gray;
  margin: 5px;
}
.timeline-listitem-message {
  margin: 5px;
}
</style>
