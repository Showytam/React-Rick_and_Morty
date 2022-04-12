import PropTypes from 'prop-types'
import img from './img/home.jpg'

import styles from './Sense.module.css'

const Sense = () => {
    return (
      <>
        <p className={styles.text}>
          Rick and Morty becomes more than just your standard comedy. It fuses
          moments of real darkness with moments of hilarity, and it works –
          seamlessly. This is a nuanced, brilliant, and totally irreverent
          commentary on our world. And it is absolutely mad. Rick and Morty
          becomes more than just your standard comedy. It fuses moments of real
          darkness with moments of hilarity, and it works – seamlessly. This is
          a nuanced, brilliant, and totally irreverent commentary on our world.
          And it is absolutely mad.
        </p>
        <img className={styles.home} src={img} alt='home-img' />
        <p className={styles.main_text}>
          Rick and Morty is not just a pretty fa- show. Creators Justin Roiland
          and Dan Harmon imbue their comedy with profound philosophy and
          meditations on life. Primarily, this revolves around the question of
          meaning – or perhaps, more fittingly, meaninglessness. I’ll use the
          follow up episode to the prior mentioned ‘Rick Potions #9’ as an
          example. After Morty’s sister Summer discovers how much of an unwanted
          pregnancy she was, Morty uses the harrowing self-burying experience as
          a piece of life advice. He exclaims: “Nobody exists on purpose. Nobody
          belongs anywhere. Everybody’s gonna die. Come watch TV?” In this short
          bout of dialogue we witness Rick and Morty’s entire philosophy. If
          you’re looking for some greater purpose, forget it. We’re all going to
          die. So why don’t we stop worrying and enjoy what makes us happy, like
          spending time with family? The bulk of this existential exploration is
          embodied in Rick. Rick is very aware that life has no greater meaning,
          and, a dribbling alcoholic, is arguably depressed because of it. But
          as a result, Rick structures his life around what makes him happy:
          Scientific exploration and his family. In one episode, Bird Person
          (classic) explains to Morty that Rick’s catchphrase, “Wubba lubba dub
          dub”, actually translates to “I am in great pain, please help me”.
          Later in the episode, Rick freezes time to clean the house from their
          massive intergalactic house party. But instead of cleaning, Rick
          spends most of the time having fun with Summer and Morty. When Morty
          asks why Rick doesn’t say “Wubba lubba dub dub” anymore, Rick responds
          that he has a new catchphrase: “I love my grandkids”. Rick chose to
          freeze time for six months, just so he could maximise time spent with
          the people who give him the most happiness: his family. The lesson is
          fairly simple. Like Rick, we need to embrace life. We should stop
          taking things so seriously and stop searching for a greater purpose.
          Because once we can accept that life is about nothing, we will be free
          to actually live it.
        </p>
      </>
    )
}

// SearchSense.propTypes = {
//     text: PropTypes.func
// }

export default Sense