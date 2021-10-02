import cn from 'classnames';

import styles from './styles.module.scss'

const Detail = ({ value }) => {

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className={styles.detail}>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          cuota fija por mes
        </p>
        <span>{formatter.format(value)}</span>
      </div>
      <div className={styles.buttonsContainer}>
        <button className={cn(styles.button, styles.greenButton)}>Obtene credito</button>
        <button className={cn(styles.button, styles.blueButton)}>Ver detalles de cuotas</button>
      </div>
    </div>
  )
}

export default Detail
