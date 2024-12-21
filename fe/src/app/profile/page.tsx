'use client'

import { redirect } from 'next/navigation';

const Profile: React.FC = () => {
  redirect("/profile/personal-info");
};

export default Profile;