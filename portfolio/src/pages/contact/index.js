import React from 'react'
import Head from 'next/head'
import Header from '../../components/Header'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import Contact from '../../components/Contact'


function index() {
    return (
        <div className="flex flex-col min-h-screen">
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="overflow-y-hidden flex-grow container mx-auto">
                <Header />
                <div className="absolute z-10 right-0 xl:right-0 xl:top-40 lg:top-40 -bottom-52 xl:bottom-0 lg:w-fit w-full">
                    <aside className="transform translate-y-40 container-width mx-auto p-4">
                        <Navigation />
                    </aside>
                </div>
                <Contact/>
            </main>
        </div>
    )
}

export default index