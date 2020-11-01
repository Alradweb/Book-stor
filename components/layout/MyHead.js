import React from 'react'
import Head from 'next/head'

export default function MyHead({title}) {
    return (
        <Head>
            <title>{title}</title>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <link rel="apple-touch-icon" sizes="180x180" href="../../public/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="../../public/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="../../public/favicon-16x16.png"/>
            {/*<link rel="manifest" href="../../public/site.webmanifest"/>*/}
            <link rel="mask-icon" href="../../public/safari-pinned-tab.svg" color="#5bbad5"/>
        </Head>
    )
}

