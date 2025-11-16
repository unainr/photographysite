"use client";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "./hover-footer";
import Logo from "./Logo";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
function Footer() {
  // Footer link data
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Portfolio", href: "/photography" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { label: "About", href: "/about us" },
        { label: "Contact", href: "/contact" },
        {
          label: "Event Management",
          href: "/event",
          
        },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#d3803c] dark:text-[#e09043]" />,
      text: "info@dubaifotographer.ae",
      href: "mailto:info@dubaifotographer.ae",
    },
    {
      icon: <Phone size={18} className="text-[#d3803c] dark:text-[#e09043]" />,
      text: "+971522946276",
      href: "tel:+971522946276",
    },
    {
      icon: <MapPin size={18} className="text-[#d3803c] dark:text-[#e09043]" />,
      text: "Dubai, UAE",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
    { icon: <Youtube size={20} />, label: "YouTube", href: "#" },
  ];

  return (
    <><footer className="bg-[#0F0F11]/10 dark:bg-[#0F0F11]/30 relative h-fit rounded-3xl overflow-hidden m-8">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col w-full">
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Professional photography and event management services across Dubai and UAE. Capturing your precious moments with excellence.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-foreground text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-[#d3803c] dark:hover:text-[#e09043] transition-colors"
                    >
                      {link.label}
                    </Link>

                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-foreground text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-[#d3803c] dark:hover:text-[#e09043] transition-colors text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-muted-foreground hover:text-[#d3803c] dark:hover:text-[#e09043] transition-colors text-sm">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-border my-8" />

        {/* Bottom Section with Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dubai Fotographer. All rights reserved.
          </p>
          <div className="flex items-center space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-[#d3803c]/10 dark:bg-[#e09043]/10 hover:bg-[#d3803c] dark:hover:bg-[#e09043] text-[#d3803c] dark:text-[#e09043] hover:text-white flex items-center justify-center transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-120 -mt-52 -mb-36">
        <TextHoverEffect text="DUBAI" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
    <Link
      href="https://wa.me/+971522946276"
      target="_blank"
      className="fixed bottom-8 left-8 z-50 bg-green-500 cursor-pointer p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
        <BsWhatsapp className="text-white text-3xl" />
      </Link></>
  );
}

export default Footer;