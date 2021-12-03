import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1) = go to prev pg
      router.push('/');
    }, 3000);    
  }, [router]);

  return (
    <div className="not-found">
      <h1>Oh damn..</h1>
      <h2>that stuff donno exist man</h2>
      <p>Back to <Link href="/"><a>where you were initially</a></Link></p>
    </div>
  );
}
 
export default NotFound;