import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";

const AboutPage = () => {
  return (
    <Container>
      <Row className="row-content">
        <Col sm="6">
          <h3>Our mission</h3>
          <h2>Creating connections between human and fur babies</h2>
          <p>
            We further our mission by placing our fur babies into nuturing homes
            by working with both cat and dog rescues and providing resources to
            organizations that have the same dedication as us in improving the
            lives of cats and dogs. We hope to open more cafes around the
            country to provide more comfortable places where fur babies can meet
            humans in a casual environment. For every sale, we donate a portion
            to a shelter, rescure, or other charitable organization that is
            focused on helping fur babies. In our lounges, we inspire to create
            a safe and calm atmospher for both our humans and fur babies to
            create precious interactions and memories with the hope to inspire
            them to adopt or donate to donate a fur baby in need. At the end of
            the day, we want our visitors to have a smile on their faces and
            love in their hearts.
          </p>
        </Col>

        <Col sm="6">
          <Card>
            <CardHeader className="bg-dark text-white">
              <h3>Facts at a Glance</h3>
            </CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Founded</dt>
                <dd className="col-6">November 1, 2021</dd>
                <dt className="col-6">No. of location</dt>
                <dd className="col-6">2</dd>
                <dt className="col-6">No. of adoption</dt>
                <dd className="col-6">364</dd>
                <dt className="col-6">No. of baby available</dt>
                <dd className="col-6">10</dd>
              </dl>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card className="bg-light mt-3">
            <CardBody>
              <blockquote className="blockquote">
                <p>
                  It is amazing how much love and laughter they bring into our
                  lives and even how much closer we become with each other
                  because of them.
                </p>
                <footer className="blockquote-footer">
                  John Grogan,{" "}
                  <cite title="Source Title">author of Marley & Me</cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
