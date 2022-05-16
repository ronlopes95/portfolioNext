const link = [
  { name: 'Sobre', link: '#sobre' },
  { name: 'Projetos', link: '#projetos' },
  { name: 'Contato', link: '#contato' },
]

export const Navbar = () => (
  <nav className="flex w-full justify-between">
    <h2>Portfólio</h2>
    <ul className="flex items-center gap-20">
      {link.map(({ name, link }) => (
        <li key={name}>
          <a
            href={link}
            className="defaultText text-[1.375rem] leading-[1.6875rem]"
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
)
