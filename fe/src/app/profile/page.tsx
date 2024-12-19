import { Footer } from '@/components/footer/component';
import { ProfileHeader } from '@/components/profile-header/component';
import { NavBar } from '@/components/navbar/component';

const Login: React.FC = () => {
  return (
    <>
      <NavBar></NavBar>
      <ProfileHeader></ProfileHeader>
      <Footer></Footer>
    </>
  );
};

export default Login;