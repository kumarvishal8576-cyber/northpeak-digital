import { useState } from 'react';
import './ContactForm.css';

const validators = {
  name: (v) => v.trim().length > 1,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
  company: (v) => v.trim().length > 1,
  budget: (v) => v.trim().length > 0,
  message: (v) => v.trim().length >= 20,
};

const initialValues = { name: '', email: '', company: '', budget: '', message: '' };

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: !validators[name](value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: !validators[name](value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    let allValid = true;
    Object.keys(validators).forEach((key) => {
      const ok = validators[key](values[key]);
      newErrors[key] = !ok;
      if (!ok) allValid = false;
    });
    setErrors(newErrors);

    if (!allValid) {
      setStatus('failure');
      return;
    }
    setStatus('success');
    setValues(initialValues);
    setErrors({});
  };

  return (
    <form id="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="form-row two">
        <div className={`field${errors.name ? ' error' : ''}`}>
          <label htmlFor="name">Full name</label>
          <input type="text" id="name" name="name" placeholder="Jordan Lee"
            value={values.name} onChange={handleChange} onBlur={handleBlur} />
          <span className="field-error">Enter your name.</span>
        </div>
        <div className={`field${errors.email ? ' error' : ''}`}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="jordan@company.com"
            value={values.email} onChange={handleChange} onBlur={handleBlur} />
          <span className="field-error">Enter a valid email address.</span>
        </div>
      </div>

      <div className="form-row two">
        <div className={`field${errors.company ? ' error' : ''}`}>
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" placeholder="Company name"
            value={values.company} onChange={handleChange} onBlur={handleBlur} />
          <span className="field-error">Enter your company name.</span>
        </div>
        <div className={`field${errors.budget ? ' error' : ''}`}>
          <label htmlFor="budget">Project budget</label>
          <select id="budget" name="budget" value={values.budget} onChange={handleChange} onBlur={handleBlur}>
            <option value="">Select a range</option>
            <option value="3-8k">$3k – $8k</option>
            <option value="8-15k">$8k – $15k</option>
            <option value="15k+">$15k+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
          <span className="field-error">Select a budget range.</span>
        </div>
      </div>

      <div className={`field${errors.message ? ' error' : ''}`}>
        <label htmlFor="message">Project details</label>
        <textarea id="message" name="message" placeholder="What are you trying to build, and by when?"
          value={values.message} onChange={handleChange} onBlur={handleBlur} />
        <span className="field-error">Add a few details — at least 20 characters.</span>
      </div>

      {status && (
        <div className={`form-status ${status}`} role="status" aria-live="polite">
          {status === 'success'
            ? "Thanks — that's been sent. We'll reply within two business days."
            : 'Please fix the highlighted fields above.'}
        </div>
      )}

      <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
        Send message →
      </button>
    </form>
  );
}