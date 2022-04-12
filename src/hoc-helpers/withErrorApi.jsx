import { useState } from 'react'
import ErrorMessage from '@components/ErrorMessage'

export const withErrorApi = View => {
  return props => {
    const [erorApi, setErrorApi] = useState(false)

    return (
      <>
        {erorApi ? (
          <ErrorMessage />
        ) : (
          <View setErrorApi={setErrorApi} {...props} />
        )}
      </>
    )
  }
}
