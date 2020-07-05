import { TimelineItem } from '@/types/Timeline'
import { extractGroupByPath } from '@/lib/PiyopiyoPathHelper'

export class PiyopiyoPostExporter {
  private posts: Array<TimelineItem> = []

  constructor(posts: Array<TimelineItem>) {
    this.posts = posts
  }

  _toTextTimeline(posts: Array<TimelineItem>): string {
    return posts.reduce((acc: string, item: TimelineItem) => acc + `- ${item.date} ${item.message} \n`, '')
  }

  _toTextGroupBy(): string {
    const groupsByPath = extractGroupByPath(this.posts)

    let timelineEachGroup = ''
    groupsByPath.forEach((value, key) => {
      timelineEachGroup += `## ${key} \n`
      timelineEachGroup += this._toTextTimeline(value)
      timelineEachGroup += '\n'
    });

    return timelineEachGroup
  }

  toText(): string {
    const timeline = this._toTextTimeline(this.posts)
    const timelineGroupByPath = this._toTextGroupBy()
    const meta = `
<details>
  <summary>piyopiyo-diary metadata</summary>

  ${JSON.stringify(this.posts)}

</details>
    `

    return `
# Timeline
${timeline}

# Timeline Group
${timelineGroupByPath}

# MetaData
${meta}
    `
  }

  toBlob() {
    return new Blob([this.toText()], {type: 'text/plain'});
  }

  download() {
    const downloadDummyAnchor = document.createElement("a");

    if( typeof downloadDummyAnchor.download !== "undefined" ) {
      downloadDummyAnchor.href = URL.createObjectURL(this.toBlob());
      downloadDummyAnchor.download = "text.md";
      const evt = document.createEvent('MouseEvent');
      evt.initEvent("click", true, false);
      downloadDummyAnchor.dispatchEvent( evt );
    }
  }
}
