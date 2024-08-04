import { Component } from 'solid-js'
import ChapterDescription from '~/components/chapter-description/chapter-description'
import { ChapterEntryProps } from '~/components/chapter-entry/chapter-entry.interfaces'
import styles from '~/components/chapter-entry/chapter-entry.module.scss'
import ChapterTitle from '~/components/chapter-title/chapter-title'

const ChapterEntry: Component<ChapterEntryProps> = (props) => {
  return (
    <div class={styles.chapterEntry}>
      <ChapterTitle text='Amour et OnlyFans' />
      <ChapterDescription text='React & Débats' />
    </div>
  )
}

export default ChapterEntry
