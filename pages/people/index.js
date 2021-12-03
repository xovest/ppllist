import styles from '../../styles/Ppl.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      ppl: data
    }
  };
}

const People = ({ ppl }) => {
  return (
    <div>
      <h1>All them ppl</h1>
      { ppl.map(person => (
        <Link href={`/people/${person.id}`} key={person.id}>
          <a className={styles.single}>
            <h3>{ person.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default People;