import NextLink from 'next/link'
import {
  Box,
  Heading,
  Container,
  Divider,
  Button, Text
} from '@chakra-ui/react'


const NotFound = () =>{
  return(
    <Container>
      <Heading as={"h1"}>
        Whoooosh
      </Heading>
      <Text> The page you are looking for has disappeared !! </Text>
      <Divider my={6} />

      <Box my={6} align={"center"}>
        <NextLink href={"/"}>
          <Button colorScheme={"teal"}> Return to Home </Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound