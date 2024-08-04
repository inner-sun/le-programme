import type { Component } from 'solid-js'
import '~/styles/reset.scss'
import '~/styles/fonts.scss'
import '~/styles/app.scss'
import Program from '~/components/program/program'
import Layout from '~/components/layout/layout'

const App: Component = () => {
  return (
    <Layout>
      <Program />
    </Layout>
  )
}

export default App
