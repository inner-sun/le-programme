import { Component } from 'solid-js'
import ChannelDetails from '~/components/channel-details/channel-details'
import ChapterEntry from '~/components/chapter-entry/chapter-entry'
import { StreamDetailsProps } from '~/components/stream-details/stream-details.interfaces'
import styles from '~/components/stream-details/stream-details.module.scss'

const StreamDetails: Component<StreamDetailsProps> = (props) => {
  return (
    <div class={styles.streamDetails}>
      <ChannelDetails />
      <ChapterEntry />
    </div>
  )
}

export default StreamDetails
