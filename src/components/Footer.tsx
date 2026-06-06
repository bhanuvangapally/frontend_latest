import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#f8fafc] pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#082851] to-[#125ab7] flex items-center justify-center">
                <span className="text-white font-bold text-xl leading-none">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#333]">
                Neumage
              </span>
            </Link>
            <p className="text-[#4b5563] text-sm mb-6 max-w-sm font-medium leading-relaxed">
              Our mission is to empower radiologists, hospitals, and diagnostic centers to deliver lightning-fast, accurate diagnoses, revolutionizing patient care worldwide.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600 hover:text-[#125ab7]">
                <span className="sr-only">Twitter</span>
                𝕏
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600 hover:text-[#125ab7]">
                <span className="sr-only">LinkedIn</span>
                in
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-[#333] mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-[#4b5563] font-medium">
              <li><Link href="#how-it-works" className="hover:text-[#125ab7] transition-colors">How it Works</Link></li>
              <li><Link href="#features" className="hover:text-[#125ab7] transition-colors">Features</Link></li>
              <li><Link href="#why-choose-us" className="hover:text-[#125ab7] transition-colors">Why Choose Us</Link></li>
              <li><Link href="#future-plans" className="hover:text-[#125ab7] transition-colors">Future Plans</Link></li>
            </ul>
          </div>
          
          <div className="col-span-2">
            <h4 className="font-bold text-[#333] mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-[#4b5563] font-medium">
              <li className="flex flex-col">
                <span className="text-[#082851] font-bold mb-1">Email</span>
                <a href="mailto:contact@edgeproc.ai" className="hover:text-[#125ab7] transition-colors">contact@edgeproc.ai</a>
              </li>
              <li className="flex flex-col mt-2">
                <span className="text-[#082851] font-bold mb-1">Address</span>
                <span>EdgeProc, Hafeezpet,<br/>Hyderabad, Telangana 500049</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
          <p>© {new Date().getFullYear()} EdgeProc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#125ab7] transition-colors">FAQ</a>
            <a href="#" className="hover:text-[#125ab7] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#125ab7] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
