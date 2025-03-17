import { Metadata } from 'next';
import { Contact } from '../pages/Contact';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Pablo Jesus Acosta.',
};

export default function ContactPage() {
  return <Contact />;
}
