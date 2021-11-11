import NextLink from 'next/link'
import {
  Box,
  Heading,
  Container,
  Divider,
  Button, Text
} from '@chakra-ui/react'


const Posts = () =>{
  return(
    <Container>
      <Heading as={"h1"}>
        Page Under Construction
      </Heading>
      <Text> Tororo is building the page, come back in some time !! </Text>
      <Divider my={6} />

      <Box my={6} align={"center"}>
        <NextLink href={"/"}>
          <Button colorScheme={"teal"}> Return to Home </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default Posts