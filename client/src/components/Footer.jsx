import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const footerOptions = ["Home", "About", "Services", "Careers", "Contact"];

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-slate-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 py-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-slate-300 text-sm ">
            ResuMine is your go to solution to build interview ready resumes,
            You can make your resume in just 3 steps.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <div className="flex gap-2 mb-2">
            <MapPin />
            <p className="text-sm">Kolkata, India</p>
          </div>
          <div className="flex gap-2 mb-2">
            <Phone />
            <p className="text-sm mt-1">+91 99999 99999</p>
          </div>
          <div className="flex gap-2">
          <Mail />
          <p className="text-sm mt-1">support@resumine.com</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm mb-4 text-slate-300">
            Subscribe to our newsletter for latest updates.
          </p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-2 rounded bg-slate-800 border border-slate-600 text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm text-white font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-slate-700 my-6" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 pb-6 text-sm text-slate-400">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Facebook className="w-5 h-5 hover:text-white transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="w-5 h-5 hover:text-white transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin className="w-5 h-5 hover:text-white transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram className="w-5 h-5 hover:text-white transition" />
          </a>
        </div>

        <div className="text-center md:text-right">
          © 2025 <span className="font-semibold text-white">ResuMine Private Limited</span>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
