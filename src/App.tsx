import type { Component } from 'solid-js'
import '~/styles/reset.scss'
import '~/styles/fonts.scss'
import '~/styles/app.scss'
import Program from '~/components/program/program'
import Layout from '~/components/layout/layout'
import ExportForm from '~/components/export-form/export-form'

const App: Component = () => {
  return (
    <Layout>
      <Program />
      <ExportForm />
    </Layout>
  )
}

export default App
