import React from "react";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-24 py-8 px-4 md:px-8 relative z-10 bg-background/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-bold text-xl tracking-tighter text-white">
          NISCHAY.<span className="text-blue-500">dev</span>
        </div>
        
        <p className="text-white/40 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Nischay. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-sm text-white/40">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
