'use client';
import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    language: '',
    mode: '',
    datetime: '',
    reason: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent('New Session Booking Request');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPreferred Language: ${formData.language}\nMode: ${formData.mode}\nPreferred Date/Time: ${formData.datetime}\n\nReason for Consultation:\n${formData.reason}`
    );
    
    window.location.href = `mailto:lathavasantha49@gmail.com?subject=${subject}&body=${body}`;
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', language: '', mode: '', datetime: '', reason: '' });
  };

  return (
    <>
      <form className="booking-form-card reveal-right" onSubmit={handleSubmit} id="booking-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Full Name <span>*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address <span>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number <span>*</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+91 6280835389"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="language">Preferred Language</label>
            <select id="language" name="language" value={formData.language} onChange={handleChange}>
              <option value="">Select language</option>
              <option value="English">English</option>
              <option value="Telugu">Telugu</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="mode">Session Mode</label>
            <select id="mode" name="mode" value={formData.mode} onChange={handleChange}>
              <option value="">Select mode</option>
              <option value="Online (Google Meet)">Online (Google Meet)</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="datetime">Preferred Date &amp; Time</label>
            <input
              type="datetime-local"
              id="datetime"
              name="datetime"
              value={formData.datetime}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="reason">Reason for Consultation</label>
            <textarea
              id="reason"
              name="reason"
              placeholder="Briefly describe what you'd like to discuss (optional)"
              rows={4}
              value={formData.reason}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width form-submit">
            <button type="submit" className="btn btn-primary">
              📅 Book Your Session
            </button>
          </div>
        </div>
      </form>

      {submitted && (
        <div className="toast">
          ✅ Your booking request has been sent! We&apos;ll get back to you soon.
        </div>
      )}
    </>
  );
}
