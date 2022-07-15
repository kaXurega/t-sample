import Image from 'next/image';
import React from 'react';

const Icon = (imagePath: string, alt: string) => {
  return <Image src={imagePath} alt={alt} width="20" height="20" />;
};

export const HomeIcon = () => {
  return Icon('/icons/Home.svg', 'Home');
};

export const DashboradIcon = () => {
  return Icon('/icons/Dashboard.svg', 'Dashboard');
};

export const MyPageIcon = () => {
  return Icon('/icons/MyPage.svg', 'MyPage');
};

export const PredictIcon = () => {
  return Icon('/icons/Predict.svg', 'Predict');
};

export const ContactIcon = () => {
  return Icon('/icons/Contact.svg', 'Contact');
};

export const LogoutIcon = () => {
  return Icon('/icons/Logout.svg', 'Logout');
};
