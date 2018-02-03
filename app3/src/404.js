import React from 'react'
import styled from 'styled-components'
import logo from './logo.png'

const Container = styled.div`
  text-align: center;
`

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const Image = styled.img`
  height: 80px;
`

const Title = styled.h1`
  font-size: 1.5em;
`

const Text = styled.p`
  font-size: large;
`

const App = () => (
  <Container>
    <Header>
      <Image src={logo} alt="Easynvest" />
      <Title>Page not fount</Title>
    </Header>
    <Text>Page not found <code>404</code></Text>
  </Container>
)

export default App
