import { Navbar5 } from "../components/Navbar5";
import { Header102 } from "../components/Header102";
import { Portfolio8 } from "../components/Portfolio8";
import { Layout504 } from "../components/Layout504";
import { Layout401 } from "../components/Layout401";
import { Layout375 } from "../components/Layout375";
import { Contact6 } from "../components/Contact6";
import { Footer6 } from "../components/Footer6";
import ServiceAreasSection from "../components/ServiceAreas";
import CustomerReviewsSect from "../components/CustomerReviews";

function HomePage() {
  return (
    <>
      <Navbar5 />
      <Header102 />
      <Portfolio8 />
      <Layout504 />
      <Layout401 />
      <Layout375 />
      <CustomerReviewsSect />
      <ServiceAreasSection />
      <Contact6 />
      <Footer6 />
    </>
  );
}

export default function Home() {
    return (
        <HomePage />
    )
}