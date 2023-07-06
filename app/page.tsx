import MilkHistogram from './histogram';


export default async function IndexPage({}: {
  searchParams: { q: string };
}) {

  return (
    <MilkHistogram />
  );
}
