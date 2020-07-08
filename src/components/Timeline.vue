<template>
  <div>
    <transition-group class="timeline-list" name="timeline-list" tag="ul">
      <li
        class="timeline-listitem"
        v-for="(item, index) in filteredTimeline"
        :class="{'dragging-item': index === dragStartIndex}"
        :key="item.id"
      >
        <div
          class="timeline-listitem-drag-handle"
          draggable
          @dragstart="itemDragStart($event, item)"
          @dragenter="itemDragEnter(item)"
          @dragend="itemDragEnd(item)"
        >
          <span class="mdi mdi-drag-vertical"></span>
        </div>
        <div class="timeline-listitem-content">
          <div class="timeline-listitem-header">
            <div class="timeline-listitem-header-item timeline-listitem-id">
              <a href="#" @click="editPost(item.message, item.id)">#{{ item.id }}</a>
            </div>
            <div class="timeline-listitem-header-item timeline-listitem-path">
              <a href="#" @click="pathSelected(item.path)">{{ item.path }}</a>
            </div>
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
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { TimelineItem } from '@/types/Timeline'

let disableDragEnterIndex = -1

export default Vue.extend({
  name: 'Timeline',

  data: function() {
    return {
      dragStartIndex: -1
    }
  },

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
    },

    pathSelected: function(path: string) {
      this.$emit('selected-path', path)
    },

    editPost: function(message: string, id: number) {
      this.$emit('edit', '', id)
    },

    itemDragStart: function(e: DragEvent, item: TimelineItem) {
      // a workaround for Firefox browser
      e.dataTransfer?.setData('dummy', 'foo')
      this.dragStartIndex = this.value.findIndex(needle => item.id === needle.id)
    },

    itemDragEnter: function(item: TimelineItem) {
      if( disableDragEnterIndex === item.id ) return

      disableDragEnterIndex = item.id

      const swapFrameSource = this.value[this.dragStartIndex]

      const index = this.value.findIndex(needle => item.id === needle.id)
      this.value.splice(this.dragStartIndex, 1)
      this.value.splice(index, 0, swapFrameSource)
      this.dragStartIndex = index

      setTimeout(() => disableDragEnterIndex = -1, 150)
    },

    itemDragEnd: function() {
      this.dragStartIndex = -1;
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
  transition: transform 0.1s ease 0s;
}
.timeline-listitem-delete {
  border: none;
  background: none;
}
.timeline-listitem-header-item {
  font-size: 9pt;
  display: inline-block;
  margin-right: 20px;
}
.timeline-listitem-path {
  color: gray;
}
.timeline-listitem-path > a, .timeline-listitem-path > a:visited {
  color: gray;
  text-decoration: none;
}
.timeline-listitem-path > a:hover {
  text-decoration: underline;
}
.timeline-listitem-id {
  color: gray;
}
.timeline-listitem-id > a, .timeline-listitem-id > a:visited {
  color: gray;
  text-decoration: none;
}
.timeline-listitem-id > a:hover {
  text-decoration: underline;
}
.timeline-listitem-date {
  color: gray;
}
.timeline-listitem-message {
  margin: 5px;
}
.timeline-listitem-drag-handle {
  font-size: 20pt;
  padding: 10px;
  margin-right: 20px;
  cursor: move;
  opacity: 0.3;
}
.timeline-listitem {
  display: flex;
  align-items: center;
}
.dragging-item {
  opacity: 0.3;
}
</style>
