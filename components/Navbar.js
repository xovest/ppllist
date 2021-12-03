import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/obama.png" alt="image" width={270} height={200} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/people"><a>Person Listing</a></Link>
    </nav>
  );
}
 
export default Navbar;