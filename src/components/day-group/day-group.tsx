import { Component } from 'solid-js'
import DayEntry from '~/components/day-entry/day-entry'
import { DayGroupProps } from '~/components/day-group/day-group.interfaces'
import styles from '~/components/day-group/day-group.module.scss'
import DayName from '~/components/day-name/day-name'

const DayGroup: Component<DayGroupProps> = ({ day, entries }) => {
  return (
    <div class={styles.dayGroup}>
      <DayName day={day} />
      <DayEntry />
    </div>
  )
}

export default DayGroup
