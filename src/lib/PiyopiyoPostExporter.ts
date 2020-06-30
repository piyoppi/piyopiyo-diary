import { TimelineItem } from '@/types/Timeline'

export class PiyopiyoPostExporter {
  toText(posts: Array<TimelineItem>): string {
    const text = posts.reduce((acc: string, item: TimelineItem) => acc + `${item.date} ${item.message} \n`, '')

    return text
  }
}
