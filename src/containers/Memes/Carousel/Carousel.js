
import { useEffect, useState, Children, cloneElement } from 'react'
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa'

import styles from './Carousel.module.css'

const PAGE_WIDTH = 600;

export const Carousel = ({children}) => {
const [pages, setPages] = useState([]);
const [offset, setOffset] = useState(0);

const handleLeftArrowClick = () => {
setOffset(currentOffset => {

     const newOffset = currentOffset + PAGE_WIDTH

return Math.min(newOffset,0);
    })
}

const handleRightArrowClick = () => {

    setOffset((currentOffset) => {

        const newOffset = currentOffset - PAGE_WIDTH;

const maxOffset = -(PAGE_WIDTH * (pages.length -1))

        return Math.max(newOffset, maxOffset)
    })
}


useEffect (() => {
    setPages(
Children.map(children, child => {
    return cloneElement(child, {
      style: {
        height: '100%',
        minWidth: `${PAGE_WIDTH}px`,
        maxWidth: `${PAGE_WIDTH}px`,
      },
    })
})
    )
}, [])



    return (
      <>
        <FaChevronLeft
          className={styles.arrow}
          onClick={handleLeftArrowClick}
        />
        <div className={styles.main_container}>
          <div className={styles.window}>
            <div
              className={styles.all_pages_container}
              style={{
                transform: `translateX(${offset}px)`,
              }}
            >
              {pages}
            </div>
          </div>
        </div>
        <FaChevronRight
          className={styles.arrow}
          onClick={handleRightArrowClick}
        />
      </>
    )
}