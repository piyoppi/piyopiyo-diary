<template>
  <div class="home">
    ぴよぴよダイアリー

    <Timeline
      v-model="timelineItems"
      :filter-path="currentPath"
    />
    <div class="bottom-tools">
      <div class="bottom-tools-item">
        <span class="mdi mdi-filter-outline"></span> {{ currentPath || 'all' }}
      </div>
      <PostForm
        @post="addItem"
        @filter="filter"
        @export="exportPosts"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { TimelineItem } from '@/types/Timeline'
import dayjs from 'dayjs'
import { PiyopiyoPostExporter } from '@/lib/PiyopiyoPostExporter'
import PostForm from '@/components/PostForm.vue'
import Timeline from '@/components/Timeline.vue'

let lastId = 0;

export default Vue.extend({
  name: 'Home',

  components: {
    PostForm,
    Timeline
  },

  data: function() {
    return {
      timelineItems: [] as Array<TimelineItem>,
      currentPath: ''
    }
  },

  methods: {
    addItem: function(message: string, path: string) {
      this.timelineItems.push({
        path: this.currentPath || path,
        id: ++lastId,
        date: dayjs().format('HH:mm'),
        message
      })
    },

    filter: function(path: string) {
      this.currentPath = path
    },

    exportPosts: function() {
      const exporter = new PiyopiyoPostExporter(this.timelineItems)
      exporter.download()
    }
  }
})
</script>

<style scoped>
.bottom-tools {
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0;
  width: 100%;
}
.bottom-tools-item {
  padding: 10px;
  font-size: 12pt;
}
</style>
