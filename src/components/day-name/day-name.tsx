import { Component } from 'solid-js'
import { DayNameProps } from '~/components/day-name/day-name.interfaces'
import styles from '~/components/day-name/day-name.module.scss'

const DayName: Component<DayNameProps> = ({ day }) => {
  return (
    <div class={styles.dayName}>
      {day}
    </div>
  )
}

export default DayName
