import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import PersonInfo from '@components/PersonPage/PersonInfo/PersonInfo'
import PersonPhoto from '@components/PersonPage/PersonPhoto/PersonPhoto'
import PersonLinkBack from '@components/PersonPage/PersonLinkBack/PersonLinkBack'

import { getApiResource } from '@utils/network'
import { API_PERSON } from '@constants/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi'

import styles from './PersonPage.module.css'

const PersonPage = ({ setErrorApi }) => {
  const [personId, setPersonId] = useState(null)
  const [personInfo, setPersonInfo] = useState(null)
  const [personName, setPersonName] = useState(null)
  const [personPhoto, setPersonPhoto] = useState(null)
  const [personFavorite, setPersonFavorite] = useState(false)

  const storeDate = useSelector(state => state.favoriteReducer)

  const { id } = useParams()

  useEffect(() => {
    ;(async () => {
      setPersonFavorite(!!storeDate[id])
      setPersonId(id)

      const res = await getApiResource(`${API_PERSON}/${id}/`)

      if (res) {
        setPersonInfo([
          { title: 'Status', data: res.status },
          { title: 'Gender', data: res.gender },
          { title: 'Type', data: res.type },
          { title: 'Species', data: res.species },
          { title: 'Location', data: res.location.name },
          { title: 'Origin', data: res.origin.name },
        ])
        setPersonName(res.name)
        setPersonPhoto(res.image)
      }
      setErrorApi(!res)
    })()
  }, [])
  return (
    <>
      <PersonLinkBack />
      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>

        <div className={styles.container}>
          <PersonPhoto
            personId={personId}
            personPhoto={personPhoto}
            personName={personName}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />

          {personInfo && <PersonInfo personInfo={personInfo} />}
        </div>
      </div>
    </>
  )
}

PersonPage.propTypes = {
  setErrorApi: PropTypes.func,
}

export default withErrorApi(PersonPage)
