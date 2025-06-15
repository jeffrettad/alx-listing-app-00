
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-10">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} StayFinder. All rights reserved.</p>
        <div className="mt-2">
          <a href="/terms" className="hover:underline mx-2">Terms</a>
          <a href="/privacy" className="hover:underline mx-2">Privacy</a>
          <a href="/contact" className="hover:underline mx-2">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
