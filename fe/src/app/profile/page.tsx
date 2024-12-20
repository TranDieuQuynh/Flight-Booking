import { Footer } from '@/components/footer/component';
import { ProfileHeader } from '@/components/profile-header/component';
import { NavBar } from '@/components/navbar/component';
import { redirect } from 'next/navigation';

const Profile: React.FC = () => {
  redirect("/profile/personal-info");
};

export default Profile;