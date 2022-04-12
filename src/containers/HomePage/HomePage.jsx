import YouTube from 'react-youtube'

import styles from './HomePage.module.css'

const HomePage = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
      origin: window.location.href,
    },
  }
  function onReady(e) {
    e.target.pauseVideo()
  }
  return (
    <div className={styles.container}>
      <YouTube videoId='zQufKI9uLj4' opts={opts} onReady={onReady} />
    </div>
  )
}

export default HomePage
