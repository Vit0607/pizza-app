import { useLoaderData } from 'react-router-dom';
import { Product as Pr } from '../../interfaces/product.interface';

export function Product() {
  const data = useLoaderData() as Pr;
  console.log(data);

  return <>Product - {data.name}</>;
}
