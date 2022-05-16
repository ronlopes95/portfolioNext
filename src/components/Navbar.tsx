const link = ['Sobre', 'Projetos', 'Contato']

export const Navbar = () => (
  <nav className="flex w-full justify-between border-b-[0.5px] pb-3">
    <h2>Portfólio</h2>
    <ul className="flex items-center gap-32">
      {link.map((link) => (
        <li key={link}>
          <a
            href=""
            className="defaultText text-[1.375rem] leading-[1.6875rem] duration-500 ease-in-out hover:text-indigo-600"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)
