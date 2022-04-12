import PropTypes from 'prop-types'

import styles from './Button.module.css'

const Button = ({ text, onClick, disabled}) => (
  <button
    onClick={onClick}
    className={styles.button}
    disabled={disabled}
  >
    {text}
  </button>
)

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

export default Button
