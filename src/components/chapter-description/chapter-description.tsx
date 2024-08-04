import { Component } from 'solid-js'
import { ChapterDescriptionProps } from '~/components/chapter-description/chapter-description.interfaces'
import styles from '~/components/chapter-description/chapter-description.module.scss'

const ChapterDescription: Component<ChapterDescriptionProps> = ({ text }) => {
  return (
    <div class={styles.chapterDescription}>
      {text}
    </div>
  )
}

export default ChapterDescription
