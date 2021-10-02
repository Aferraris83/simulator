import { useState } from 'react'

import styles from './styles.module.scss' 

import SimpleSlider from '../slider'
import Detail from '../detail'

const MIN_VALUE = 5000
const MAX_VALUE = 50000
const MIN_MONTHS = 3
const MAX_MONTHS = 24

const Simulator = () => {
  const [value, setValue] = useState(MIN_VALUE)
  const [months, setMonths] = useState(MIN_MONTHS)

  const handleChangeInput = ({ target }) => {
    if (target.value <= MAX_VALUE) {
      setValue(target.value)
    }
  }

  const handleChangeSlider = val => {
    setValue(val)
  }

  const handleChangeMounthsSlider = val => {
    setMonths(val)
  }

  const handleChangeInputMonths = ({ target }) => {
    if (target.value <= MAX_MONTHS) {
      setMonths(target.value)
    }
  }

  return (
    <div className={styles.simulator}>
      <div className={styles.container}>
        <h1 className={styles.title}>Simulá tu crédito</h1>
        <SimpleSlider 
          min={MIN_VALUE} 
          max={MAX_VALUE} 
          value={value}
          title="monto total"
          onChangeInput={handleChangeInput}
          onChangeSlider={handleChangeSlider}
          simbol="$"
          steps={1000}
        />
        <SimpleSlider 
          min={MIN_MONTHS} 
          max={MAX_MONTHS} 
          value={months}
          title="plazo"
          onChangeInput={handleChangeInputMonths}
          onChangeSlider={handleChangeMounthsSlider}
          steps={MIN_MONTHS}
        />
        <Detail value={value/months}/>
      </div>
    </div>
  )
}

export default Simulator
