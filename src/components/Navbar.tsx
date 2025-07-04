import Button from './Button'

const Navbar = () => {
  return (
    <nav className="bg-gray-100">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <Button text="home" onClick={() => window.location.href = "/"} />
            <Button text="about" onClick={() => window.location.href = "/about"} />
            <Button text="projects" onClick={() => window.location.href = "/projects"} />
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

        <div className="relative ml-3">
            <div className="justify-start text-black text-base font-medium">nabira rashid </div>
        </div>
      </div>
    </div>
  </div>

</nav>

  )
}

export default Navbar