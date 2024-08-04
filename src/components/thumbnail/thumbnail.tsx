import { Component } from 'solid-js'
import { ThumbnailProps } from '~/components/thumbnail/thumbnail.interfaces'
import styles from '~/components/thumbnail/thumbnail.module.scss'

const Thumbnail: Component<ThumbnailProps> = (props) => {
  return (
    <img
      class={styles.thumbnail}
      src='/src/assets/images/test.jpg'
    />
  )
}

export default Thumbnail
