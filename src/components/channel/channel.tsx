import { Component } from 'solid-js'
import { ChannelProps } from '~/components/channel/channel.interfaces'
import styles from '~/components/channel/channel.module.scss'

const Channel: Component<ChannelProps> = ({ name }) => {
  const channelClasses = {
    [styles.channel]: true,
    [styles[name]]: true
  }

  return (
    <div classList={channelClasses}>
      {name}
    </div>
  )
}

export default Channel
