import { useState } from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    lookingFor: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      service: '',
      lookingFor: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="bg-blue-700 py-20 px-4 md:py-32">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="text-white">
          <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6">Connect With Us</h2>
          <p className="text-lg opacity-90 mb-8">
            Have a question, a project in mind, or just exploring options? We're here
            to help you make smarter digital marketing decisions.
          </p>

          <div className="flex gap-4 mb-12">
            <div className="w-12 h-12 bg-transparent bg-opacity-20 border border-white border-opacity-30 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition cursor-pointer">
              <Mail size={20} className="text-white" />
            </div>
            <div className="w-12 h-12 bg-transparent bg-opacity-20 border border-white border-opacity-30 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition cursor-pointer">
              <Phone size={20} className="text-white" />
            </div>
            <div className="w-12 h-12 bg-transparent bg-opacity-20 border border-white border-opacity-30 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition cursor-pointer">
              <MessageCircle size={20} className="text-white" />
            </div>
          </div>

          <img
            src="/Images/landing%20Page/contact.png"
            alt="Our team"
            className="w-full rounded-2xl"
          />
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit}>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h3>
            <p className="text-gray-600 mb-6">You can reach it anytime</p>

            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700"
                required
              />
            </div>

            <div className="mb-4">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 bg-white"
                required
              >
                <option value="">Select Service</option>
                <option value="website">Website Design</option>
                <option value="mobile">Mobile App</option>
                <option value="branding">Branding & Logo</option>
                <option value="content">Content Creation</option>
                <option value="seo">SEO</option>
                <option value="marketing">Digital Marketing</option>
              </select>
            </div>

            <div className="mb-4">
              <select
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 bg-white"
                required
              >
                <option value="">Looking for</option>
                <option value="consultation">Free Consultation</option>
                <option value="quote">Get a Quote</option>
                <option value="support">Support</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>

            <div className="mb-4 grid grid-cols-4 gap-2">
              <select className="col-span-1 px-3 py-3 border border-gray-300 rounded-lg bg-white text-sm">
                <option value="+91">+91</option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className="col-span-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700"
                required
              />
            </div>

            <div className="mb-6 relative">
              <textarea
                name="message"
                placeholder="How can we help?"
                value={formData.message}
                onChange={handleChange}
                maxLength="200"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700 resize-none"
                required
              ></textarea>
              <span className="absolute bottom-3 right-3 text-gray-500 text-sm">{formData.message.length}/200</span>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition transform hover:-translate-y-1"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;