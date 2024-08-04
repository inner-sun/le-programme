import { Component } from 'solid-js'
import { DayEntryProps } from '~/components/day-entry/day-entry.interfaces'
import styles from '~/components/day-entry/day-entry.module.scss'
import StreamDetails from '~/components/stream-details/stream-details'
import Thumbnail from '~/components/thumbnail/thumbnail'

const DayEntry: Component<DayEntryProps> = (props) => {
  return (
    <div class={styles.dayEntry}>
      <Thumbnail />
      <StreamDetails />
    </div>
  )
}

export default DayEntry
