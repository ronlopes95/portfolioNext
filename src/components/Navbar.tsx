const link = ['Sobre', 'Projetos', 'Contato']

export const Navbar = () => (
  <nav className="flex w-full justify-between">
    <h2>Portfólio</h2>
    <ul className="flex items-center gap-20">
      {link.map((link) => (
        <li key={link}>
          <a
            href=""
            className="defaultText text-[1.375rem] leading-[1.6875rem]"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)
