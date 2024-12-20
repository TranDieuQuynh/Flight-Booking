import { ChatWidget } from '@/components/chat-widget/component';
import { Footer } from '@/components/footer/component';
import { BookingSection } from '@/components/cancel-section/component';
import { NavBar } from '@/components/navbar/component';


const CancelTicket: React.FC = () => {
  return (
    <>
      <NavBar></NavBar>
      <BookingSection></BookingSection>
      <ChatWidget></ChatWidget>
      <Footer></Footer>
    </>
  );
};

export default CancelTicket;