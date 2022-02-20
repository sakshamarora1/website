import Link from "next/link"

function SideNav() {
  return (
    <div className="flex h-screen items-center w-min absolute z-10">
      <div className="right-0 fixed bg-orange-400">
          <nav className="relative">
            <ul>
              <li><a href="#maintained">Maintined</a></li>
              <li><a href="#affiliated">Affiliated</a></li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default SideNav