import NextLink from 'next/link'
import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Link, Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'


const Page = () => {
    return (
        <Container>
        <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} mb={6} align={"center"}>
            Hello, I&apos;m a software developer based in Canada!
        </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as={"h2"} variant={"page-title"}>
                        Umar Shaik
                    </Heading>
                    <p> Basic Geek ( Developer / Gamer / Modder )</p>
                </Box>
                <Box flexShrink={0} mt={{base:4, md:0}} ml={{md: 6}} align={"center"}>
                    <Image
                      borderColor={"whiteAlpha.800"}
                      borderWidth={2}
                      borderStyle={"solid"}
                      maxWidth={"100px"}
                      display={"inline-block"}
                      borderRadius={"full"}
                      alt={"Profile Photo"}
                      src={"umar.jpg"}/>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as={"h3"} variant={"section-title"}>
                    Work
                </Heading>
                <Paragraph>
                    Umar is a Software Developer based in St. John&apos;s with a passion for building strange stuff. He has a knack for all things, from planning and designing all the way
                    to solving real-life problems. When not coding, he loves to play video games (currently striving for platinum in {' '}
                        <Link href={"https://www.ubisoft.com/en-ca/game/far-cry/far-cry-6"} target={"_blank"}> Far Cry 6 </Link>
                    ).
                </Paragraph>
                <Box align={"center"} my={4}>
                    <NextLink href={"/works"}>
                        <Button rightIcon={<ChevronRightIcon />} colorScheme={"teal"}>
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as={"h3"} variant={"section-title"}>
                    Bio
                </Heading>
                <BioSection>
                    <BioYear> 2019 to present </BioYear>
                    Working with {' '}
                    <Link href={"https://www.linkedin.com/company/skillshawks/"} target={"_blank"}> Creatros Technologies Inc </Link>, Canada
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Completed Master&apos;s in Computer Science from Memorial University of Newfoundland, Canada
                </BioSection>
                <BioSection>
                    <BioYear>2018</BioYear>
                    Worked at {' '}
                    <Link href={"https://www.linkedin.com/company/metrics-flow/"} target={"_blank"}> MetricsFlow</Link>, Canada.
                </BioSection>
                <BioSection>
                    <BioYear>1994</BioYear>
                    Born in Tirupathi (తిరుపతి), India.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as={"h3"} variant={"section-title"}>
                    I ❤
                </Heading>
                <Paragraph>
                    Gaming, Movies, Anime, Music, Art, Custom Mods & Maintenance, Machine Learning
                </Paragraph>
            </Section>

        </Container>
    )
}

export default Page