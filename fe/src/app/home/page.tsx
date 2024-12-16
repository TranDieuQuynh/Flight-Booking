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
      <Slogan></Slogan>
      <ChatWidget></ChatWidget>
      <Footer></Footer>
    </>
  );
};

export default Home;