import { ChatWidget } from '@/components/chat-widget/component';
import { Footer } from '@/components/footer/component';
import { LoginForm } from '@/components/login-form/component';
import { NavBar } from '@/components/navbar/component';


const Login: React.FC = () => {
  return (
    <>
      <NavBar></NavBar>
      <LoginForm></LoginForm>
      <ChatWidget></ChatWidget>
      <Footer></Footer>
    </>
  );
};

export default Login;