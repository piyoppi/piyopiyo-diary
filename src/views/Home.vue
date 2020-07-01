<template>
  <div class="home">
    <div ref="timelineOuter" class="timeline-boundary">
      <Timeline
        ref="timeline"
        v-model="timelineItems"
        @selected-path="filter"
        :filter-path="currentPath"
      />
    </div>
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
    addItem: async function(message: string, path: string) {
      this.timelineItems.push({
        path: this.currentPath || path,
        id: ++lastId,
        date: dayjs().format('HH:mm'),
        message
      })

      await this.$nextTick()

      const timelineElement: Element = (this.$refs.timeline as any).$el as Element
      const timelineOuterElement: Element = this.$refs.timelineOuter as Element
      const timelineBoundary = timelineElement.getBoundingClientRect()
      const scrollValue = timelineBoundary.height
      timelineOuterElement.scrollTo(0, scrollValue)
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
.timeline-boundary {
  height: calc(100vh - 100px);
  overflow-y: scroll;
}
</style>
