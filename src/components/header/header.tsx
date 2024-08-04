import { Component } from 'solid-js'
import styles from '~/components/header/header.module.scss'

const Header: Component = () => {
  return (
    <img
      class={styles.header}
      src='src/assets/images/header.png'
    />
  )
}

export default Header
