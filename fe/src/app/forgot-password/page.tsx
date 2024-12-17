import { ChatWidget } from '@/components/chat-widget/component';
import { Footer } from '@/components/footer/component';
import { ForgotPasswordForm } from '@/components/forgot-password-form/component';
import { NavBar } from '@/components/navbar/component';


const Login: React.FC = () => {
  return (
    <>
      <NavBar></NavBar>
      <ForgotPasswordForm></ForgotPasswordForm>
      <ChatWidget></ChatWidget>
      <Footer></Footer>
    </>
  );
};

export default Login;