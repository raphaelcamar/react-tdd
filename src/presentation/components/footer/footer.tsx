import Logo from '@/presentation/components/logo/logo'
import React, { memo } from 'react'
import Styles from './login-footer-styles.scss'

const LoginFooter: React.FC = () => {
  return (
    <footer className={Styles.footer} />
  )
}

export default memo(LoginFooter)
