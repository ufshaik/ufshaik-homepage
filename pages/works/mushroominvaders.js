// Heading, Center, UnorderedList
import { Container, Badge, Link, List, ListItem, Heading, Center } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () =>{
  return(
    <Layout title={"Mushroom Invaders"}>
      <Container>
        <Title>
          Mushroom Invaders <Badge> 2019 </Badge>
        </Title>
        <P>
          Help the ninja take down mushrooms, ships and giant mushrooms
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta> Gitlab </Meta>
            <Link href={"https://gitlab.com/ufshaik/mushroom-invaders"}>
              https://gitlab.com/ufshaik/mushroom-invaders <ExternalLinkIcon mx={"2px"} />
            </Link>
          </ListItem>
          <ListItem>
            <Meta> Platform </Meta>
            <span> Windows / Linux (Wine) </span>
          </ListItem>
          <ListItem>
            <Meta> Tech </Meta>
            <span> Lua </span>
          </ListItem>
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <Center> Screenshots </Center>
        </Heading>

        <WorkImage src={"/works/Mushroom-Invaders/Thumb.jpg"} alt={"Mushroom Invaders"}/>

      </Container>
    </Layout>
  )
}

export default Work