'use client'

import React from 'react'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import DeleteUser from '@/components/DeleteUser'

export default function Home() {
  const { data: session, status } = useSession()

  return (
    <>
      <Head>
        <title>next-rails-google-auth</title>
      </Head>
      <div>
        <h1>next-rails-google-auth</h1>

        {status === 'authenticated' ? (
          <div>
            <p>セッションの期限：{session.expires}</p>
            <p>ようこそ、{session.user?.name}さん</p>
            <div>
              <Logout />
            </div>
            <div>
            <DeleteUser />
            </div>
          </div>
        ) : (
          <Login />
        )}
      </div>
    </>
  )
}
