function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Acerca de Nosotros</h3>
            <p className="text-sm">
              Somos desarrolladores dedicados a mejorar mutuamente contigo
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Útiles</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/gelvezz23"
                  className="hover:text-gray-300"
                >
                  github
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@gelvezz23"
                  className="hover:text-gray-300"
                >
                  @gelvezz23
                </a>
              </li>
              <li>
                <a
                  href="https://gelvezz23.github.io/gelvezz23/"
                  className="hover:text-gray-300"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <p className="text-sm">Email: gelvezz223@gmail.com</p>
            <p className="text-sm">Teléfono: +57 3114831157</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} @gelvezz23. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
