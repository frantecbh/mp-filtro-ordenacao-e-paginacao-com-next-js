import FilterDropdown from '@/components/filter-dropdown';
import OrdersTable from '@/components/orders-table';
import Pagination from '@/components/pagination';
import SearchInput from '@/components/search-input';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default async function Component() {

  const response = await fetch('https://apis.codante.io/api/orders-api/orders')
  const data = await response.json()

  console.log(data.data)

  return (
    <main className="container px-1 py-10 md:p-10">
      <Card>
        <CardHeader className="px-7">
          <CardTitle>Pedidos</CardTitle>
          <CardDescription>
            Uma listagem de pedidos do seu negócio.
          </CardDescription>
          <div className="flex pt-10 gap-4">
            <SearchInput />
            <FilterDropdown />
          </div>
        </CardHeader>
        <CardContent>
          <OrdersTable data={data.data} />
          <div className="mt-8">
            <Pagination />
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
