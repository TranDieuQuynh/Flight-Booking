'use client'

import { ChatWidget } from '@/components/chat-widget/component';
import { Footer } from '@/components/footer/component';
import { NavBar } from '@/components/navbar/component';
import { RegisterForm } from '@/components/register-form/component';

const Register: React.FC = () => {
  return (
    <>
      <NavBar></NavBar>
      <RegisterForm></RegisterForm>
      <ChatWidget></ChatWidget>
      <Footer></Footer>
    </>
  );
};

export default Register;