import LinkWrapper from "./link-wrapper"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-violet-300 bg-clip-text text-transparent">
                SparkVibe
              </span>
              <span className="text-2xl font-semibold text-white">Digital</span>
            </div>
            <p className="text-slate-300 max-w-xs">
              Igniting digital growth through strategic innovation and creative excellence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Dizengoff St 50</li>
              <li>Tel Aviv-Yafo, 6433222</li>
              <li>Israel</li>
              <li className="pt-2">
                <p className="hover:text-white">
                  +972 52 789 1184
                </p>
              </li>
              <li>info@sparkvibedigital.com</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <LinkWrapper href="/about" className="hover:text-white">
                  About Us
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="/services" className="hover:text-white">
                  Services
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="/blog" className="hover:text-white">
                  Blog
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="/contact" className="hover:text-white">
                  Contact
                </LinkWrapper>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <LinkWrapper href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper href="/cookie-policy" className="hover:text-white">
                  Cookie Policy
                </LinkWrapper>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} SparkVibe Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
