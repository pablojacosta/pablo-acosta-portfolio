import { Metadata } from 'next';
import { Contact } from '../pages/Contact';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Pablo Jesus Acosta.',
  openGraph: {
    title: 'Contact | Pablo Jesus Acosta',
    description:
      'Get in touch with Pablo Jesus Acosta for collaborations, opportunities, or just to say hello.',
    url: 'https://pablo-acosta-portfolio.netlify.app/contact',
  },
  twitter: {
    title: 'Contact | Pablo Jesus Acosta',
    description:
      'Get in touch with Pablo Jesus Acosta for collaborations, opportunities, or just to say hello.',
  },
};

export default function ContactPage() {
  return <Contact />;
}
