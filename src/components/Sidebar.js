import Link from 'next/link';

const Sidebar = () => {
  return (
    <div>
 <Link href="/about">About</Link>
 <Link href="/team">Meet the Team</Link>
    </div>
  );
};

export default Sidebar;