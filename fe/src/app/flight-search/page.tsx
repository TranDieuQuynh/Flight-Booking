import { ChatWidget } from '@/components/chat-widget/component';
import { Footer } from '@/components/footer/component';
import { NavBar } from '@/components/navbar/component';
import { FlightSearchSection } from '@/components/flight-search/component';

const FlightSearch: React.FC = () => {
  return (
    <>
      <NavBar></NavBar>
      <FlightSearchSection></FlightSearchSection>
      <ChatWidget></ChatWidget>
      <Footer></Footer>
    </>
  );
};

export default FlightSearch;