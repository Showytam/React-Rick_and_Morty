
import { useLocation } from 'react-router-dom'
import img from './img/not-found2.png'
import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
  let location = useLocation()

  return (
    <>
      <img className={styles.img} src={img} alt='Not Found' />
      <p className={styles.text}>
        Looks like we found a 404 page Morty. <br />
         No match for <u>{location.pathname}</u>
      </p>
    </>
  )
}

export default NotFoundPage
