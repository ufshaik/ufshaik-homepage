import {Container, Box, Heading} from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
        <Box borderRadius="lg" bg={"red"} p={3} mb={6} align={"center"}>
            Hello, I&apos;m a software developer based in Canada!
        </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as={"h2"} variant={"page-title"}>
                        Umar Shaik
                    </Heading>
                    <p> Basic Geek ( Developer / Gamer / Modder )</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page