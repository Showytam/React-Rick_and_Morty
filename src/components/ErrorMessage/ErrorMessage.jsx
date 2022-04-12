import styles from './ErrorMessage.module.css'
import imgError from './img/error.jpg'
const ErrorMessage = () => {
    return (
      <>
      <img className={styles.error} src={imgError} alt='Error'/>
        <p className={styles.text}>
          We cannot display data.
          <br />
          Come back when we fix everything.
        </p>
      </>
    )
}

export default ErrorMessage
