import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#335346] text-white py-4 text-center">
      <section id="contact" className="py-4">
        <div className="contact-info flex justify-center space-x-8">
          <a href="https://books.google.co.in/books/about/Mahan_Ajivak_Kabir_Raidas_Aur_Gosal.html?id=R8-pDgAAQBAJ&redir_esc=y" target="_blank" rel="noopener noreferrer">
            <i className="ri-git-repository-line text-2xl"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100027993713148" target="_blank" rel="noopener noreferrer">
            <i className="ri-facebook-box-line text-2xl"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-line text-2xl"></i>
          </a>
        </div>
      </section>
      <p className="mt-4">Copyright &copy; 2024 Ajivak.com</p>
    </footer>
  );
};

export default Footer;