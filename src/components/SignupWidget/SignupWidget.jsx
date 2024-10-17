'use client';
import './SignupWidget.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Image from 'next/image';

const SignupWidget = ({ title, content, simulateNetworkRequestTime }) => {
  // State to manage the email input and messages
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setBusy(true);
      // Wait 2 seconds (simulating a network request)
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime = 2000));
      setMessage(`Thanks for subscribing, ${email}!`);
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form data-testid={'signupWidget'} className={'signup-widget widget'} onSubmit={handleSubmit} autoComplete={'false'}>
      <h2 data-testid={'signupWidgetTitle'}><Image src='/SignupWidget/icon.svg' width={19.5} height={15} alt='Signup Widget icon'/>{title}</h2>
      {isSubscribed ? (
        <p data-testid={'signupWidgetMessage'} className={'message'}>
          {message}
        </p>
      ) : (
        <>
          <p data-testid={'signupWidgetContent'}>{content}</p>
          <div className={'input-row'}>
            {
              <input
                data-testid={'signupWidgetInput'}
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={busy}
              />
            }
            {
              <button data-testid={'signupWidgetButton'} type="submit" disabled={busy}>
                {busy ? 'Joining...' : 'Join'}
              </button>
            }
          </div>
        </>
      )}
    </form>
  );
};

SignupWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  simulateNetworkRequestTime: PropTypes.number,
};

export default SignupWidget;
