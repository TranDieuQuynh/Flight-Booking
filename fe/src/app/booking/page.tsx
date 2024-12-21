'use client'

import { ChatWidget } from '@/components/chat-widget/component';
import { Footer } from '@/components/footer/component';
import { NavBar } from '@/components/navbar/component';
import { BookingBanner } from '@/components/booking-banner/component';
import { BookingSection } from '@/components/booking-section/component';

const Contact: React.FC = () => {
  return (
    <>
      <NavBar></NavBar>
      <BookingBanner></BookingBanner>
      <BookingSection></BookingSection>
      <ChatWidget></ChatWidget>
      <Footer></Footer>
    </>
  );
};

export default Contact;