'use client';

import FadeInOnScroll from '@/components/fadeInOnScroll';
import Section from '@/components/section';
import ContactForm from './components/contactForm';

export default function CTA() {
  return (
    <Section>
      <FadeInOnScroll>
        <div className="max-w-4xl mx-auto flex-col items-center py-32">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center md:items-start w-full md:flex-row gap-4 md:gap-12">
              <h1 className="w-fit text-left max-w-sm md:text-right text-4xl md:text-5xl lg:text-7xl">
                Got Some Inquiries For Us?
              </h1>
              <ContactForm />
            </div>
          </div>
        </div>
      </FadeInOnScroll>
    </Section>
  );
}
