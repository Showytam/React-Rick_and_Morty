// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './PeopleNavigation.module.css'
import Button from '../../Button/Button'

const PeopleNavigation = ({ getResponse, prevPage, nextPage, counterPage }) => {
  const handleChangeNext = () => getResponse(nextPage)
  const handleChangePrev = () => getResponse(prevPage)

  return (
    <div className={styles.container}>
      <Link
        to={`/character/?page=${counterPage - 1}`}
        className={styles.buttons}
      >
        <Button
          text='Previous'
          onClick={handleChangePrev}
          disabled={counterPage===1}
        />
      </Link>
      <Link
        to={`/character/?page=${counterPage + 1}`}
        className={styles.buttons}
      >
        <Button
          text='Next'
          onClick={handleChangeNext}
          disabled={counterPage===42}
        />
      </Link>
    </div>
  )
}

// PeopleNavigation.propTypes = {
//   getResponse: PropTypes.func,
//   prevPage: PropTypes.string,
//   nextPage: PropTypes.string,
//   counterPage: PropTypes.number,
// }

export default PeopleNavigation
