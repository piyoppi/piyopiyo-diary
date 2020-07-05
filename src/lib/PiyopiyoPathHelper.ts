import { TimelineItem } from '@/types/Timeline'

export function extractGroupByPath(timelineItems: Array<TimelineItem>): Map<string, Array<TimelineItem>> {
  const groupsByPath = new Map<string, Array<TimelineItem>>();

  timelineItems.forEach( post => {
    if( !groupsByPath.has(post.path) ) groupsByPath.set(post.path, [])
    groupsByPath.get(post.path)?.push(post)
  })

  console.log(groupsByPath);
  return groupsByPath
}
