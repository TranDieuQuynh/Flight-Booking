'use client'

import { AddOnServiceList } from '@/components/add-on-services/component';
import { Banner } from '@/components/banner/component';
import { ChatWidget } from '@/components/chat-widget/component';
import { Footer } from '@/components/footer/component';
import { NavBar } from '@/components/navbar/component';
import { Slogan } from '@/components/slogan/component';


const Home: React.FC = () => {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <AddOnServiceList></AddOnServiceList>
      <Slogan></Slogan>
      <ChatWidget></ChatWidget>
      <Footer></Footer>
    </>
  );
};

export default Home;