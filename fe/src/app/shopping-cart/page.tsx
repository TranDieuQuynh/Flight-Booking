'use client'

import { ChatWidget } from '@/components/chat-widget/component';
import { Footer } from '@/components/footer/component';
import { NavBar } from '@/components/navbar/component';
import { CartSection } from '@/components/cart/component';

const Services: React.FC = () => {
  return (
    <>
      <NavBar></NavBar>
      <CartSection></CartSection>
      <ChatWidget></ChatWidget>
      <Footer></Footer>
    </>
  );
};

export default Services;