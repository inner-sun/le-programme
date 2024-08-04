import { toJpeg } from 'html-to-image'
import { Component } from 'solid-js'
import styles from '~/components/export-form/export-form.module.scss'

const ExportForm: Component = () => {
  const onExport = async () => {
    const targetNode = document.getElementById('le-programme')
    const filename = `le-programme-${Math.random().toString().split('.')[1]}.jpg`

    if(targetNode){
      const fileUrl = await toJpeg(targetNode, { quality: 0.95 })
      const link = document.createElement('a')
      link.download = filename
      link.href = fileUrl
      link.click()
    }
  }

  return (
    <div class={styles.exportForm}>
      <button class={styles.exportButton} onClick={onExport}>
        Exporter le programme
      </button>
    </div>
  )
}

export default ExportForm
