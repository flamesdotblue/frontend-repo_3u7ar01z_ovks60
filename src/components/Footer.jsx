export default function Footer() {
  return (
    <footer id="download" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-white text-xl font-semibold">Ready to hit the grid?</h3>
            <p className="mt-2 text-white/70">
              Download the demo and take your first hot lap today. Compatible with wheel & controller.
            </p>
          </div>
          <div className="md:justify-self-end">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-rose-500/30"
            >
              Download for Windows
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} Yah Racing. All rights reserved.</p>
          <div className="mt-2 sm:mt-0 space-x-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
