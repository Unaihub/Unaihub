import React, { useState } from "react";

interface Props {
  closeModal: () => void;
}

const ChatModal: React.FC<Props> = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement email functionality
    // You can use a service like EmailJS or a custom back-end to send the email
    console.log("Email sent:", { email, message });
    closeModal();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <button onClick={closeModal}>Close</button>
    </div>
  );
};

export default ChatModal;
