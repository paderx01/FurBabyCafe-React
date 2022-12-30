import { Container } from "reactstrap";
import DisplayList from "../features/display/DisplayList";

const HomePage = () => {
  return (
    <Container>
      <SubHeader current="Home" />
      <DisplayList />
    </Container>
  );
};

export default HomePage;
