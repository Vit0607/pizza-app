import { Await, useLoaderData } from 'react-router-dom';
import { Product as Pr } from '../../interfaces/product.interface';
import { Suspense } from 'react';

export function Product() {
  const data = useLoaderData() as { data: Pr };

  return (
    <>
      <Suspense fallback={'Загружаю...'}>
        <Await resolve={data.data}>
          {({ data }: { data: Pr }) => <>Product - {data.name}</>}
        </Await>
      </Suspense>
    </>
  );
}
