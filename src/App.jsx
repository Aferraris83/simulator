import React from 'react'
import styles from './styles.module.scss'

import Simulator from './components/simulator'

function App () {
  return (
    <div className={styles.app}>
      <Simulator />
    </div>
  )
}

export default App
