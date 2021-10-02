import Slider from 'rc-slider'

import styles from './styles.module.scss'
import 'rc-slider/assets/index.css'

const SimpleSlider = ({ title, value, onChangeInput, min, max, onChangeSlider, simbol='', steps }) => {
  return(
    <div className={styles.slider}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{title}</p>
        <div className={styles.inputContainer}>
          {simbol}
          <input 
            className={styles.input} 
            type="number"
            value={value}
            onChange={onChangeInput}
            min={min}
            max={max}
          />
        </div>
      </div>
      <Slider value={value} onChange={onChangeSlider} min={min} max={max} step={steps}/>
      <div className={styles.price}>
        <span>{`${simbol} ${min}`}</span>
        <span>{`${simbol} ${max}`}</span>
      </div>
    </div>
  )
}

export default SimpleSlider
