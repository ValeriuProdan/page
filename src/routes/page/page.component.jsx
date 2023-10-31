import Footer from "../../components/footer/footer.component";
import Navigation from "../../components/navigation/navigation.component";
import { PageContainer } from "./page.styles";

const Page = () => {
  return (
    <PageContainer>
      <Navigation />
      <Footer />
    </PageContainer>
  );
};

export default Page;
