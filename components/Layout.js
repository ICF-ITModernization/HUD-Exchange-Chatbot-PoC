import { Link } from '../components';

export default function Layout(props) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header>
        <nav className="font-bold">
          <Link className="inline-block py-2 px-4 hover:underline text-[#30f298]" to="/">
            Home
          </Link>
          <Link className="inline-block py-2 px-4 ml-2 hover:underline text-[#5bcbf5]" to="/service-now">
            ServiceNow
          </Link>
          <Link className="inline-block py-2 px-4 ml-2 hover:underline text-[#ffc628]" to="/one-reach-ai">
            OneReach.ai
          </Link>
          <Link className="inline-block py-2 px-4 ml-2 hover:underline text-[#0785f2]" to="/druid">
            Druid
          </Link>
        </nav>
      </header>
      <main className="container mx-auto p-4 flex-1 flex flex-col">{props.children}</main>
    </div>
  );
}