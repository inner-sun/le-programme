import { Component } from 'solid-js'
import { ChannelDetailsProps } from '~/components/channel-details/channel-details.interfaces'
import styles from '~/components/channel-details/channel-details.module.scss'
import Channel from '~/components/channel/channel'

const ChannelDetails: Component<ChannelDetailsProps> = (props) => {
  return (
    <div class={styles.channelDetails}>
      <Channel name='lasainte' />
      <div class={styles.time}>
        Soir
      </div>
    </div>
  )
}

export default ChannelDetails
