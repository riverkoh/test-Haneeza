import React, { useState } from 'react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <section id="newsletter-section" className="max-w-[1440px] mx-auto px-6 md:px-16 py-20 md:py-32 text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        <h3 className="font-serif-display text-3xl md:text-5xl font-normal text-[#000000]">
          Join the Narrative
        </h3>
        <p className="text-base text-[#444748] font-normal leading-relaxed">
          Receive exclusive access to new collections, limited editions, and editorial perspectives.
        </p>

        {subscribed ? (
          <div className="p-6 bg-[#f3f3f4] border border-[#c4c7c7] text-[#1a1c1c] text-sm font-medium tracking-wide uppercase transition-all">
            Thank you for joining our narrative. Your private invitation will arrive shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-6">
            <div className="flex items-center border-b border-black pb-2 transition-colors focus-within:border-black">
              <input
                id="newsletter-email-input"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="YOUR EMAIL ADDRESS"
                className="w-full border-none bg-transparent focus:outline-none focus:ring-0 placeholder:text-[#747878] text-sm font-medium tracking-[0.15em] uppercase text-[#1a1c1c] p-0"
              />
              <button
                id="newsletter-signup-button"
                type="submit"
                className="font-medium text-xs tracking-[0.2em] uppercase ml-4 text-[#000000] hover:opacity-60 transition-opacity whitespace-nowrap cursor-pointer"
              >
                SIGN UP
              </button>
            </div>
            {error && (
              <p className="text-left text-xs text-[#ba1a1a] mt-2 font-normal">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};
