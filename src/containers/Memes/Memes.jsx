import { Carousel} from './Carousel/Carousel.js'

import meme1 from './image/meme1.jpg'
import meme2 from './image/meme2.jpg'
import meme3 from './image/meme3.jpg'
import meme4 from './image/meme4.jpg'
import meme5 from './image/meme5.jpg'
import meme6 from './image/meme6.jpg'

import styles from './Memes.module.css'

const Memes = () => {
  return (
    <>
      <div className={styles.container}>
        <Carousel>
           <img className={styles.item} src={meme1} alt='Meme' />
           <img className={styles.item} src={meme2} alt='Meme' />
           <img className={styles.item} src={meme3} alt='Meme' />
           <img className={styles.item} src={meme4} alt='Meme' />
           <img className={styles.item} src={meme5} alt='Meme' />
           <img className={styles.item} src={meme6} alt='Meme' />
        </Carousel>
      </div>
    </>
  )
}

export default Memes
