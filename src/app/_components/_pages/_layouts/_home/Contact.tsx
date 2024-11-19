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
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false); // Estado para controlar el spinner

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true); // Mostrar el spinner

    try {
      await emailjs.sendForm('service_444n5xn', 'template_f17rigd', e.currentTarget, 'KeoHGwXEWYoD85Sze');
      handleSuccess();
      setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
    } catch (error) {
      handleError();
      console.error('Error al enviar el correo:', error);
    } finally {
      setIsSending(false); // Ocultar el spinner
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const successAlertOptions: SweetAlertOptions = {
    icon: 'success',
    title: 'Success!',
    text: 'Thank you for your interest in my work! Your message has been received successfully. I will get back to you as soon as possible.',
    customClass: {
      popup: 'bg-black text-white border-solid border-2 border-white',
      title: 'text-orange',
      confirmButton: 'bg-black text-orange font-bold px-3 py-1 border-solid border-2 border-orange hover:bg-black_a',
      icon: 'bg-black_a text-white',
    },
    buttonsStyling: false,
  };

  const errorAlertOptions: SweetAlertOptions = {
    icon: 'error',
    title: 'Error!',
    text: 'Failed to send email. Please try again later.',
    customClass: {
      popup: 'bg-black text-white border-solid border-2 border-white',
      title: 'text-red',
      confirmButton: 'bg-black text-orange font-bold px-3 py-1 border-solid border-2 border-orange hover:bg-black_a',
      icon: 'bg-black_a text-white',
    },
    buttonsStyling: false,
  };

  const handleSuccess = () => {
    Swal.fire(successAlertOptions).then(() => {
      setFormSubmitted(true); // Cambiar a vista de "mensaje enviado"
    });
  };

  const handleError = () => {
    Swal.fire(errorAlertOptions);
  };

  return (
    <YMContainer>
      <section id="contact" className="bg-black_a">
        <StickyHeader customTextLeft="contact" customIcon="contact" />
        <XContainer>
          <div className="flex h-[calc(100svh_-77px)] md:justify-center">
            <div className="flex h-full w-full flex-col justify-center lg:w-1/2">
              {!formSubmitted ? (
                <>
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
                      <TranslateInOut overflowHidden delay={0.3} y={100} start="-100% bottom" end="top top" watch>
                        <FloatingLabelInput id="name" label="Name" type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} />
                      </TranslateInOut>
                      <TranslateInOut overflowHidden delay={0.4} y={100} start="-100% bottom" end="top top" watch>
                        <FloatingLabelInput id="email" label="Email" type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required />
                      </TranslateInOut>
                      <TranslateInOut overflowHidden delay={0.5} y={100} start="-100% bottom" end="top top" watch>
                        <FloatingLabelTextarea id="message" label="Message" name="message" autoComplete="message" rows={4} value={formData.message} onChange={handleChange} required />
                      </TranslateInOut>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      {!isSending ? (
                        <Button type="submit">Send</Button>
                      ) : (
                        <div className="flex items-center gap-2">
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-t-2 border-orange"></div>
                          <span className="text-white">Sending...</span>
                        </div>
                      )}
                    </div>
                  </form>
                </>
              ) : (
                <div>
                  <h2 className="text-2xl text-orange md:text-3xl">Your email has already been sent!</h2>
                  <p className="mt-4 text-lg text-white">I will get in touch with you as soon as possible.</p>
                </div>
              )}
            </div>
          </div>
        </XContainer>
      </section>
    </YMContainer>
  );
};

export default Contact;
