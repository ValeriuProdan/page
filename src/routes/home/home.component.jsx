import { Outlet } from "react-router-dom";
import ValeriuPicture from "../../assets/ValeriuPicture.jpg";
import { HomeContainer, Box, Text } from "./home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <Box>
        <img
          src={ValeriuPicture}
          style={{ width: 300, borderRadius: 20 }}
          alt="Profile"
        />
        <Text>
          <p>
            Hello! I am a software engineer at Google, where I work on the
            YouTube ads team (a.k.a., "the guys flooding you with ads that you
            hate" - unless you have premium, in which case you are not
            contributing to my salary 😞).
          </p>
          <p>
            The point of this webpage is to have a playgroud for implementing
            stuff I learn from tutorials and create a way for people to get to
            know me.
          </p>
        </Text>
      </Box>

      <Outlet />
    </HomeContainer>
  );
};

export default Home;
