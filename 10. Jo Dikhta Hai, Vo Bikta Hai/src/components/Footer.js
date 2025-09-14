const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>Follow us on:</p>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Instagram
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Namaste Food Court. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
