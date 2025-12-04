export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Roadmap'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Resources: ['Documentation', 'Help Center', 'Community', 'API'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy', 'License']
  }

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'GitHub', icon: '🐙', url: '#' },
    { name: 'Facebook', icon: 'f', url: '#' }
  ]

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20 grid md:grid-cols-5 gap-12 mb-12 border-b border-gray-700">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-black bg-gradient-to-r from-accent to-blue-300 bg-clip-text text-transparent">
                Pinak
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mt-3">
                Transforming ideas into innovative digital solutions that drive growth and success.
              </p>
            </div>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 transform hover:scale-110 text-white font-semibold"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-bold mb-6 text-white">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm font-medium"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="py-12 mb-12 border-b border-gray-700">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-3">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-2xl mr-3">✉️</span>
                Email
              </h5>
              <a href="mailto:hello@pinak.com" className="text-gray-400 hover:text-accent transition-colors duration-300 font-medium">
                hello@pinak.com
              </a>
            </div>
            <div className="space-y-3">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-2xl mr-3">📞</span>
                Phone
              </h5>
              <a href="tel:+1234567890" className="text-gray-400 hover:text-accent transition-colors duration-300 font-medium">
                +1 (234) 567-8900
              </a>
            </div>
            <div className="space-y-3">
              <h5 className="font-bold text-lg flex items-center">
                <span className="text-2xl mr-3">📍</span>
                Location
              </h5>
              <p className="text-gray-400 font-medium">
                123 Business Street<br />
                Tech City, TC 12345
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm space-y-4 md:space-y-0">
            <p className="font-medium">&copy; {currentYear} Pinak. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-accent transition-colors duration-300 font-medium">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300 font-medium">
                Terms of Service
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300 font-medium">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
