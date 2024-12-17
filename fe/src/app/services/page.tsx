import { ChatWidget } from '@/components/chat-widget/component';
import { Footer } from '@/components/footer/component';
import { NavBar } from '@/components/navbar/component';
import { ServiceList } from '@/components/services/component';
import { SpecialOfferList } from '@/components/special-offers/component';

const Services: React.FC = () => {
  return (
    <>
      <NavBar></NavBar>
      <ServiceList></ServiceList>
      <ChatWidget></ChatWidget>
      <SpecialOfferList></SpecialOfferList>
      <Footer></Footer>
    </>
  );
};

export default Services;