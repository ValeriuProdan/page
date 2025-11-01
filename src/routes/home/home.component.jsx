import { Outlet } from "react-router-dom";
import ValeriuPicture from "../../assets/ValeriuPicture.jpg";
import { HomeContainer, Box, Text, ProfileImageContainer } from "./home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <Box>
        <ProfileImageContainer>
          <img
            src={ValeriuPicture}
            alt="Valeriu Prodan - Software Engineer"
          />
        </ProfileImageContainer>
        <Text>
          <p>
            Hello! I am a software engineer at Google, where I work on the
            YouTube ads team (a.k.a., "the guys flooding you with ads that you
            hate" - unless you have premium, in which case you are not
            contributing to my salary 😞).
          </p>
          <p>
            The point of this webpage is to have a playground for implementing
            stuff I learn from tutorials and create a way for people to get to
            know me. Here you can explore my work, see some of my photography,
            and learn about my professional journey.
          </p>
        </Text>
      </Box>

      <Outlet />
    </HomeContainer>
  );
};

export default Home;
