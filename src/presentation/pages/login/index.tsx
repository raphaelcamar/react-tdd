import LoginHeader from '@/presentation/components/login-header/login-header'
import Spinner from '@/presentation/components/spinner/spinner'
import React from 'react'
import Styles from './login-styles.scss'
import LoginFooter from '@/presentation/components/footer/footer'
import Input from '@/presentation/components/input/input'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
     <LoginHeader />
      <form className={Styles.form} action="">
        <h2>Login</h2>
        <Input type="email" name="email" placeholder='Digite seu Email' />
        <Input type="email" name="email" placeholder='Digite seu Email' />

        <button className={Styles.submit} type='submit'>Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner}/>
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <LoginFooter />
    </div>
  )
}

export default Login
