import { Component } from 'solid-js'
import DayGroup from '~/components/day-group/day-group'
import Header from '~/components/header/header'
import { ProgramProps } from '~/components/program/program.interfaces'
import styles from '~/components/program/program.module.scss'

const Program: Component<ProgramProps> = (props) => {
  return (
    <div class={styles.program} id='le-programme'>
      <Header />
      <div class={styles.dayList}>
        <DayGroup
          day='Mardi'
        />
        <DayGroup
          day='Mercredi'
        />
        <DayGroup
          day='Jeudi'
        />
      </div>
    </div>
  )
}

export default Program
