import Footer from "../../components/footer/footer.component";
import Navigation from "../../components/navigation/navigation.component";
import { PageContainer } from "./page.styles";

const Body = () => {
  return (
    <PageContainer>
      <Navigation />
      <Footer />
    </PageContainer>
  );
};

export default Body;
