import { Outlet } from "react-router-dom";
import ValeriuPicture from "../../assets/ValeriuPicture.jpg";
import { HomeContainer, HeroSection, Box, Text, ProfileImageContainer, Tagline } from "./home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <Box>
          <ProfileImageContainer>
            <img
              src={ValeriuPicture}
              alt="Valeriu Prodan - AI/ML Engineer"
            />
          </ProfileImageContainer>
          <Text>
            <Tagline>
              I help companies transform ideas into successful products.
            </Tagline>
            <p>
              Hello! I'm an AI/ML Engineer at Google, where I work on Search Shopping, 
              building innovative solutions that enhance user experiences. Previously, I worked 
              on YouTube Ads, developing features that generated significant business impact.
            </p>
            <p>
              This webpage serves as a playground for exploring new technologies and a way 
              for people to get to know me. Here you can explore my professional journey, 
              see some of my photography, and learn about the projects I've worked on.
            </p>
          </Text>
        </Box>
      </HeroSection>

      <Outlet />
    </HomeContainer>
  );
};

export default Home;
