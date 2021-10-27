import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbMushroomInvaders from '../public/works/Mushroom-Invaders/Thumb.jpg'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as={'h3'} fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id={'mushroominvaders'} title={'Mushroom Invaders'} thumbnail={thumbMushroomInvaders}>
              True ninja that exists even if defeated by the mushrooms.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id={'mushroominvaders2'} title={'Mushroom Invaders Return'} thumbnail={thumbMushroomInvaders}>
              The ninja didn&apos;t die and has returned to seek vengeance
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.4}>
          <Divider my={6} />
          <Heading as={'h3'} fontSize={20} mb={4}>
            A Sub Cat
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id={'mushroominvaders3'} title={'Mushroom Invaders Revengence'}
                          thumbnail={thumbMushroomInvaders}>
              The ninja was killed by mushrooms. Now his cousins seek vengeance
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id={'mushroominvaders4'} title={'Mushroom Invaders Family'} thumbnail={thumbMushroomInvaders}>
              The ninja family reunites to seek dominance and eradicate all Mushrooms.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works