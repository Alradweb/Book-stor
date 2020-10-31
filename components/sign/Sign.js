import React from 'react'
import {signIn, signOut, useSession} from 'next-auth/client'
import In from '../icons/In'
import Out from '../icons/Out'
import styles from './sign.module.scss'


function Sign() {
    const [session] = useSession()
    const entrance = (
        <a style={{color: 'white'}}
           onClick={(e) => {
               e.preventDefault()
               signIn('auth0')
           }}
        >
            <In/>
        </a>
    )
    const exit = (
        <a href={`/api/auth/signout`}
           onClick={(e) => {
               e.preventDefault()
               signOut()
           }}
        >
            <Out/>
        </a>
    )
    return (
        <div className={styles.sign}>
            <span className={styles.sign_user_status}>{session ? session.user.name : `Вы не вошли в аккаунт`}</span>
            {
                session ? exit : entrance
            }
        </div>
    )
}


export default Sign