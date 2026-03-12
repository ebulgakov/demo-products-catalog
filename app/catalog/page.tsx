import Search from "@/app/catalog/search";
import Container from "@/app/components/container";
import CatalogHeader from "@/app/catalog/catalog-header";
import Pagination from "@/app/components/pagination";
import CatalogTable from "@/app/catalog/catalog-table";

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-8 pt-5">
      <Search />

      <Container className="flex-1 rounded-ee-none">
        <CatalogHeader />

        <CatalogTable />

        <Pagination />
      </Container>
    </div>
  );
}
