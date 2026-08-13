// frontend/src/component/Body/Contact.jsx






import React, { useState } from 'react';
// import axios from 'axios';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  // Custom Modal Popup State
  const [modal, setModal] = useState({
    isOpen: false,
    type: 'success', // 'success' | 'limit' | 'error'
    title: '',
    message: ''
  });


  // ================================ Modal Popup State for Error Handling ======================================
  //   const [modal, setModal] = useState({
  //   isOpen: true, // Forces modal to render immediately on page load
  //   status: 'error',
  //   title: 'Message Delivery Failed ❌',
  //   message: 'Please contact from below contact options.'
  // });

  const closeModal = () => setModal({ ...modal, isOpen: false });


  // ================================ Form Submission Handler for git pull and Resend ======================================
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setSending(true);

  //   try {
  //     // const response = await axios.post('http://localhost:8080/api/contact', formData);
  //     const response = await axios.post('https://portfolio-backend-262i.onrender.com/api/contact', formData);
  //     if (response.data && response.data.success) {
  //       alert(`Thank you, ${formData.name}! Your message has been sent successfully.`);
  //       setFormData({ name: '', email: '', message: '' });
  //     }
  //   } catch (err) {
  //     console.error("Email delivery failed:", err);
  //     alert("Failed to forward your message. Please verify your backend SMTP configurations.");
  //   } finally {
  //     setSending(false);
  //   }
  // };

  // ================================ Form Submission Handler for emailjs ======================================
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.send(
      'service_my2wdzv',
      'template_mubqpb5',
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      'L-AKl1RgCkLKWyFum'
    )
      .then(() => {
        setModal({
          isOpen: true,
          status: 'success',
          title: 'Message Sent Successfully! 🚀',
          message: `Thank you, ${formData.name}! Your message has been sent successfully.`
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setModal({
          isOpen: true,
          status: 'error',
          title: 'Message Delivery Failed ❌',
          message: 'Please contact from below contact options.'
        });
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="px-6 sm:px-10 py-12 max-w-xl mx-auto w-full text-left animate-in fade-in duration-300 flex-grow">
      <div className="mb-6 border-b border-[var(--border)] pb-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--text-h)] tracking-tight">Get In Touch</h2>
        <p className="text-xs text-gray-400 mt-1">Looking to discuss engineering architecture? Leave a message below.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-xs font-bold uppercase tracking-wider text-[var(--text-h)]">
        <div className="space-y-1">
          <label>Your Name</label>
          <input
            required
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-[var(--border)] bg-[var(--bg)] p-3 rounded-xl text-[var(--text-h)] font-normal normal-case focus:border-[var(--accent)] outline-hidden transition shadow-xs"
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-1">
          <label>Email Address</label>
          <input
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border border-[var(--border)] bg-[var(--bg)] p-3 rounded-xl text-[var(--text-h)] font-normal normal-case focus:border-[var(--accent)] outline-hidden transition shadow-xs"
            placeholder="johndoe@example.com"
          />
        </div>

        <div className="space-y-1">
          <label>Message Details</label>
          <textarea
            required
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full border border-[var(--border)] bg-[var(--bg)] p-3 rounded-xl text-[var(--text-h)] font-normal normal-case focus:border-[var(--accent)] outline-hidden transition leading-relaxed resize-none shadow-xs"
            placeholder="Let's build something scalable..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={sending}
          className="w-full bg-[var(--accent)] text-white font-bold py-3 px-4 rounded-xl shadow-xs hover:opacity-95 transition-all active:scale-95 text-center cursor-pointer tracking-widest text-xs uppercase mt-2 disabled:opacity-50"
        >
          {sending ? "Sending message..." : "Send Message"}
        </button>
      </form>
      {/* --- Direct Contact Options Section --- */}
      <div className="mt-8 pt-6 border-t border-[var(--border)] text-xs text-[var(--text-h)]">
        <p className="font-bold uppercase tracking-wider text-gray-400 mb-3 text-center">
          Or Reach Out Directly
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Email Direct Link */}
          <a
            href="mailto:souravayrah1@gmail.com"
            className="flex items-center justify-center gap-2 p-3 border border-[var(--border)] bg-[var(--bg)] rounded-xl font-medium hover:border-[var(--accent)] transition-colors shadow-xs normal-case"
          >
            <span>✉️</span> Email
          </a>

          {/* Phone Call Link */}
          <a
            href="tel:+919883077675"
            className="flex items-center justify-center gap-2 p-3 border border-[var(--border)] bg-[var(--bg)] rounded-xl font-medium hover:border-[var(--accent)] transition-colors shadow-xs normal-case"
          >
            <span>📞</span> Call
          </a>

          {/* WhatsApp Direct Chat Link */}
          <a
            href="https://wa.me/919883077675?text=Hi Sourav, I saw your portfolio!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 border border-[var(--border)] bg-[var(--bg)] rounded-xl font-medium hover:border-[var(--accent)] transition-colors shadow-xs normal-case"
          >
            <span>💬</span> WhatsApp
          </a>
        </div>
      </div>
      {/* ================================ CENTERED POPUP MODAL ====================================== */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[var(--bg)] border border-[var(--border)] text-[var(--text-h)] p-6 rounded-2xl shadow-2xl max-w-sm w-full text-center space-y-4 animate-in zoom-in-95 duration-150">
            <h3 className={`text-base font-bold ${modal.status === 'error' ? 'text-red-500' : 'text-emerald-500'}`}>
              {modal.title}
            </h3>

            <p className="text-xs font-normal text-gray-300 leading-relaxed normal-case">
              {modal.message}
            </p>

            <button
              onClick={closeModal}
              className="w-full bg-[var(--accent)] hover:opacity-90 text-white font-bold py-2.5 px-4 rounded-xl transition text-xs cursor-pointer mt-2"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}








