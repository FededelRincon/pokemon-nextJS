import { FC } from "react";

import Head from "next/head";
import { Navbar } from '../ui';


interface Props {
    title?: string;
}


export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title || 'PokemonApp'}</title>
                <meta name="author" content="FDR" />
                <meta name="description" content={`Informacion sobre el pokemon ${ title }`} />
                <meta name="keyboards" content={`${ title }, pokemon, pokedex`} />
            </Head>

            {/* Navbar */}
            <Navbar/>


            <main style={{
                padding: '0px 20px'
            }}>
                { children }
            </main>
        </>
    )
}
