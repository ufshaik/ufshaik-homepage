import Head from 'next/head';
import {Box, Container} from '@chakra-ui/react';
import Navbar from '../navbar.js'
import PaintDvt from '../paint-dvt'
import NoSsr from '../no-ssr'
import Footer from "../footer"


const Main = ({ children, router }) =>{
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title> Umar Shaik - Homepage </title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
              <NoSsr>
                <PaintDvt />
              </NoSsr>
                {children}
              <Footer />
            </Container>

        </Box>
    )
}

export  default  Main