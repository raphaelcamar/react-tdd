import Logo from '@/presentation/components/logo/logo'
import React, { useContext } from 'react'
import Spinner from '@/presentation/components/spinner/spinner'
import Styles from './form-status-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context)
  const { isLoading } = state
  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
    {isLoading && <Spinner className={Styles.spinner}/>}
    {errorState.main && <span className={Styles.error}>{errorState.main}</span>}
  </div>
  )
}

export default FormStatus
