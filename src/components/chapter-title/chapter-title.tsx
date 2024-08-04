import { Component } from 'solid-js'
import { ChapterTitleProps } from '~/components/chapter-title/chapter-title.interfaces'
import styles from '~/components/chapter-title/chapter-title.module.scss'

const ChapterTitle: Component<ChapterTitleProps> = ({ text }) => {
  return (
    <div class={styles.chapterTitle}>
      {text}
    </div>
  )
}

export default ChapterTitle
