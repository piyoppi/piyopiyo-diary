<template>
  <div class="timeline-group-by-path-boundary">
    <div v-for="path in pathes" :key="path">
      <h2><span class="title-icon mdi mdi-folder-multiple-outline"></span> {{ path }}</h2>
      <Timeline 
        :value="value"
        @input="$emit('input', $event)"
        :filter-path="path"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Timeline from '@/components/Timeline.vue'
import { TimelineItem } from '@/types/Timeline'
import Vue, { PropOptions } from 'vue'
import { extractGroupByPath } from '@/lib/PiyopiyoPathHelper'

export default Vue.extend({
  components: {
    Timeline
  },
  data: function() {
    return {
    }
  },
  props: {
    value: {
      type: Array,
      required: true,
    } as PropOptions<Array<TimelineItem>>
  },
  computed: {
    pathes: function(): Array<string> {
      const pathes: Array<string> = []
      for( const path of extractGroupByPath(this.value).keys() ) {
        pathes.push(path)
      }
      console.log(pathes)
      return pathes
    }
  },
})
</script>

<style scoped>
.title-icon {
  margin-right: 30px;
  margin-left: 20px;
}
</style>
