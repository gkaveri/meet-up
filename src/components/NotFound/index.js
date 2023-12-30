import {Container, Heading, Para, Img} from './styledComponents'

const NotFound = () => (
  <Container>
    <Img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <Heading>Page not Found</Heading>
    <Para>We are sorry, the page you requested could not be found.</Para>
  </Container>
)

export default NotFound
