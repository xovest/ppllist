export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map(person => {
    return {
      params: { id: person.id.toString() }
    };
  });

  return {
    paths,
    fallback: false
  };
}

const Details = () => {
  return (
    <div>
      <h1>Detailz</h1>
    </div>
  );
}
 
export default Details;