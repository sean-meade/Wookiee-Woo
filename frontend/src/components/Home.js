
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h1>Welcome to the Home Page</h1>
          <p>This is a placeholder for the home page content. You can add more components and content here as needed for development purposes.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula urna at felis suscipit, in aliquam arcu vestibulum. Integer nec nulla non nulla varius aliquam. Integer a diam in orci finibus varius. Vivamus at dui a tortor ullamcorper aliquam et ac velit. Quisque sit amet lectus ligula. Praesent eu ex at odio varius luctus. Nulla facilisi.</p>
          <p>Nam mollis, leo eget interdum tincidunt, nisl dui tristique nisl, a aliquam purus metus non urna. Aliquam erat volutpat. Suspendisse potenti. Fusce et sapien vel magna vestibulum volutpat. In dignissim urna at sem bibendum, vel tincidunt arcu efficitur. Duis vel felis non libero sagittis volutpat. In hac habitasse platea dictumst. Nulla facilisi.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
