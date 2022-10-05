const link = [
  { name: 'About', link: '#sobre' },
  { name: 'Projects', link: '#projetos' },
  { name: 'Contact', link: '#contato' },
]

export const Navbar = () => (
  <header className="flex w-full justify-between">
    <h2>Portfolio</h2>
    <nav className="hidden sm:block">
      <ul className="flex items-center gap-20 border-b-2">
        {link.map(({ name, link }) => (
          <li key={name}>
            <a
              href={link}
              className="defaultText text-[1.375rem] leading-[1.6875rem] duration-500 ease-in-out hover:text-indigo-600"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </nav>

    {/* <button className="text-custom-white-100">X</button>  */}
  </header>
)
