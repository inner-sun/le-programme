import { Component } from 'solid-js'
import { ChannelDetailsProps } from '~/components/channel-details/channel-details.interfaces'
import styles from '~/components/channel-details/channel-details.module.scss'

const ChannelDetails: Component<ChannelDetailsProps> = (props) => {
  return (
    <div class={styles.channelDetails}>
      Content
    </div>
  )
}

export default ChannelDetails
