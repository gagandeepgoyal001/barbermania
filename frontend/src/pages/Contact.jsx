import React, { useState, useEffect } from "react";
import "../styles/Contact.css";
import { FiCheckCircle } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [language, setLanguage] = useState("en"); // Default to English

  // Punjabi translations
  const translations = {
    en: {
      title: "Contact Us",
      description: "We'd love to hear from you! Please fill out the form below.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send Message",
      success: "Thank you! Your message has been sent.",
      required: "This field is required.",
      invalidEmail: "Please enter a valid email address.",
    },
    pa: {
      title: "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
      description: "ਅਸੀਂ ਤੁਹਾਡੇ ਤੋਂ ਸੁਣਨਾ ਪਸੰਦ ਕਰਾਂਗੇ! ਕਿਰਪਾ ਕਰਕੇ ਹੇਠਾਂ ਦਿੱਤਾ ਫਾਰਮ ਭਰੋ।",
      name: "ਨਾਮ",
      email: "ਈਮੇਲ",
      subject: "ਵਿਸ਼ਾ",
      message: "ਸੁਨੇਹਾ",
      submit: "ਸੁਨੇਹਾ ਭੇਜੋ",
      success: "ਧੰਨਵਾਦ! ਤੁਹਾਡਾ ਸੁਨੇਹਾ ਭੇਜ ਦਿੱਤਾ ਗਿਆ ਹੈ।",
      required: "ਇਹ ਖੇਤਰ ਲੋੜੀਂਦਾ ਹੈ।",
      invalidEmail: "ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਵੈਧ ਈਮੇਲ ਪਤਾ ਦਰਜ ਕਰੋ।",
    },
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = translations[language].required;
    if (!formData.email.trim()) {
      errors.email = translations[language].required;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = translations[language].invalidEmail;
    }
    if (!formData.subject.trim()) errors.subject = translations[language].required;
    if (!formData.message.trim()) errors.message = translations[language].required;
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      // Simulate form submission (e.g., API call)
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 1000);
    } else {
      setErrors(validationErrors);
      setIsSubmitted(false);
    }
  };

  // Clear success message after 5 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  return (
    <section className="contact-container" aria-labelledby="contact-heading">
      <div className="language-toggle">
        <button
          onClick={() => setLanguage(language === "en" ? "pa" : "en")}
          aria-label="Toggle Language"
        >
          {language === "en" ? "ਪੰਜਾਬੀ" : "English"}
        </button>
      </div>
      <h1 id="contact-heading">{translations[language].title}</h1>
      <p>{translations[language].description}</p>
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <div className="form-group">
          <label htmlFor="name">
            {translations[language].name}
            <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={translations[language].name}
            aria-required="true"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="error" role="alert">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">
            {translations[language].email}
            <span aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={translations[language].email}
            aria-required="true"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="error" role="alert">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="subject">
            {translations[language].subject}
            <span aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder={translations[language].subject}
            aria-required="true"
            aria-invalid={!!errors.subject}
          />
          {errors.subject && <p className="error" role="alert">{errors.subject}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">
            {translations[language].message}
            <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder={translations[language].message}
            aria-required="true"
            aria-invalid={!!errors.message}
          ></textarea>
          {errors.message && <p className="error" role="alert">{errors.message}</p>}
        </div>
        <button type="submit" className="submit-btn">
          {translations[language].submit}
        </button>
        {isSubmitted && (
          <p className="success-message" aria-live="polite">
            <FiCheckCircle className="success-icon" /> {translations[language].success}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;