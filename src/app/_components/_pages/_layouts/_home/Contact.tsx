/* src/app/_components/_pages/_layouts/_home/Contact.tsx */
'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import { Button, FloatingLabelInput, FloatingLabelTextarea } from '@/_components/_ui';
import Icon from '@/_components/_icons/Icons';
import StickyHeader from '@/_components/_shared/StickyHeader';
import XContainer from '@/_components/_containers/XContainer';
import YMContainer from '@/_components/_containers/YMContainer';
import TranslateInOut from '@/_components/_gsap/TranslateInOut';
import Swal, { SweetAlertOptions } from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([fieldName, value]) => {
      formDataToSend.append(fieldName, value);
    });

    try {
      await emailjs.sendForm('service_444n5xn', 'template_f17rigd', e.currentTarget, 'KeoHGwXEWYoD85Sze');
      handleSuccess();
    } catch (error) {
      handleError();
      console.error('Email failed to send:', error);
      setErrorMessage('Failed to send email. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const successAlertOptions: SweetAlertOptions & {
    customClass: {
      popup: string;
      title: string;
      content: string;
      confirmButton: string;
      icon: string;
      text: string;
    };
    buttonsStyling: boolean;
  } = {
    icon: 'success',
    title: 'Success!',
    text: 'Thank you for your interest in my work! Your message has been received successfully. I will get back to you as soon as possible. Thanks again!!',
    customClass: {
      popup: 'bg-black text-white border-solid border-2 border-white',
      title: 'text-orange',
      content: 'text-white',
      confirmButton: 'bg-black text-orange font-bold px-3 py-1 border-solid border-2 border-orange hover:bg-black_a',
      icon: 'bg-black_a text-white',
      text: 'text-base',
    },
    buttonsStyling: false,
  };
  const errorAlertOptions: SweetAlertOptions & {
    customClass: {
      popup: string;
      title: string;
      content: string;
      confirmButton: string;
      icon: string;
    };
  } = {
    icon: 'error',
    title: 'Error!',
    text: 'Failed to send email. Please try again later.',
    customClass: {
      popup: 'bg-black text-white border-solid border-2 border-white',
      title: 'text-red',
      content: 'text-white',
      confirmButton: 'bg-black text-orange font-bold px-3 py-1 border-solid border-2 border-orange hover:bg-black_a',
      icon: 'bg-black_a text-white',
    },
    buttonsStyling: false,
  };

  const handleSuccess = () => {
    Swal.fire(successAlertOptions);
    setSuccessMessage('Email sent successfully!');
  };

  const handleError = () => {
    Swal.fire(errorAlertOptions);
    setErrorMessage('Failed to send email. Please try again later.');
  };

  return (
    <YMContainer>
      <section id="contact" className="bg-black_a">
        <StickyHeader customTextLeft="contact" customIcon="contact" />
        <XContainer>
          <div className="flex h-[calc(100svh_-77px)] md:justify-center">
            <div className="flex h-full w-full flex-col justify-center lg:w-1/2">
              <TranslateInOut overflowHidden delay={0.2} y={100} start="-100% bottom" end="top top" watch>
                <Link href="mailto:lisandrojm@gmail.com">
                  <div className="mb-3 flex text-2xl text-orange md:text-3xl">
                    <span className="me-2 text-3xl">
                      <Icon kind="lightbulb" />
                    </span>
                    <h2 className="font-regular cursor-scale small underline-hover text-3xl uppercase italic text-orange md:text-4xl">
                      Are you minding
                      <br />a project?
                    </h2>
                  </div>
                </Link>
              </TranslateInOut>
              <form id="contactForm" action="#" method="POST" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-y-4">
                  <div className="cursor-scale smallbg-black_a sm:col-span-3">
                    <TranslateInOut overflowHidden delay={0.3} y={100} start="-100% bottom" end="top top" watch>
                      <FloatingLabelInput id="name" label="Name" type="text" name="from_name" autoComplete="name" onChange={handleChange} />
                    </TranslateInOut>
                  </div>
                  <div className="cursor-scale small bg-black_a sm:col-span-2">
                    <TranslateInOut overflowHidden delay={0.4} y={100} start="-100% bottom" end="top top" watch>
                      <FloatingLabelInput id="email" label="Email" type="email" name="from_email" autoComplete="email" required onChange={handleChange} />
                    </TranslateInOut>
                  </div>
                  <div className="cursor-scale small bg-black_a sm:col-span-2">
                    <TranslateInOut overflowHidden delay={0.5} y={100} start="-100% bottom" end="top top" watch>
                      <FloatingLabelTextarea id="message" label="Message" name="message" autoComplete="message" rows={4} defaultValue={''} onChange={handleChange} required />
                    </TranslateInOut>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <TranslateInOut overflowHidden delay={0.4} y={100} start="-100% bottom" end="top top" watch>
                    <div className="text-start">
                      <Button type="submit">Send</Button>
                    </div>
                  </TranslateInOut>
                  <TranslateInOut overflowHidden delay={0.5} y={100} start="-100% bottom" end="top top" watch>
                    <Link href="mailto:lisandrojm@gmail.com">
                      <p className="text-serif cursor-scale small underline-hover flex items-center text-sm italic text-white">
                        I
                        <span className="px-2 text-orange">
                          <Icon kind="heart" />
                        </span>
                        challenges...
                      </p>
                    </Link>
                  </TranslateInOut>
                </div>
              </form>
            </div>
          </div>
        </XContainer>
      </section>
    </YMContainer>
  );
};

export default Contact;
