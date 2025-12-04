import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!/^[0-9]{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✉️ Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project? Tell us about your vision and we'll help bring it to life.
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-8 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 rounded-lg shadow-md flex items-center">
            <span className="text-2xl mr-3">✓</span>
            <div>
              <p className="font-semibold">Message sent successfully!</p>
              <p className="text-sm">We'll get back to you within 24 hours.</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-dark mb-3">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-5 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-medium ${
                  errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-sm font-semibold mt-2">⚠️ {errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-dark mb-3">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-5 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-medium ${
                  errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-500 text-sm font-semibold mt-2">⚠️ {errors.email}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-dark mb-3">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-5 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-medium ${
                  errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder="+1 (555) 000-0000"
              />
              {errors.phone && <p className="text-red-500 text-sm font-semibold mt-2">⚠️ {errors.phone}</p>}
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="block text-sm font-bold text-dark mb-3">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-5 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-medium ${
                  errors.subject ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder="Project Inquiry"
              />
              {errors.subject && <p className="text-red-500 text-sm font-semibold mt-2">⚠️ {errors.subject}</p>}
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-bold text-dark mb-3">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className={`w-full px-5 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 font-medium resize-none ${
                errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
              }`}
              placeholder="Tell us about your project and goals..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm font-semibold mt-2">⚠️ {errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            🚀 Send Message
          </button>

          <p className="text-center text-gray-500 text-sm mt-6">
            We'll respond to your inquiry within 24 hours.
          </p>
        </form>
      </div>
    </section>
  )
}
