import { ChatWidget } from '@/components/chat-widget/component';
import { Footer } from '@/components/footer/component';
import { ContactForm, NavigationImage } from '@/components/contact-form/component';
import { NavBar } from '@/components/navbar/component';


const Contact: React.FC = () => {
  return (
    <>
      <NavBar></NavBar>
      <NavigationImage></NavigationImage>
      <ContactForm></ContactForm>
      <ChatWidget></ChatWidget>
      <Footer></Footer>
    </>
  );
};

export default Contact;