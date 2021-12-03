import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oh damn..</h1>
      <h2>that stuff donno exist man</h2>
      <p>Back to <Link href="/"><a>where you were initially</a></Link></p>
    </div>
  );
}
 
export default NotFound;