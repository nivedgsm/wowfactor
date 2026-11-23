import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import TreatmentPageLayout from '@/app/components/TreatmentPageLayout';
import Arrow from '@/app/components/ui/Arrow';
import { treatmentCategories, treatmentHref } from '@/app/data/treatments';
import { treatmentProcesses } from '@/app/data/treatment-processes';

type PageProps = { params: Promise<{ slug: string }> };

const pages = treatmentCategories.flatMap((category) => [
  { slug: category.slug, category, treatment: null },
  ...category.items.map((treatment) => ({ slug: treatment.slug, category, treatment })),
]);

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map(({ slug }) => ({ slug }));
}

async function getPage(params: PageProps['params']) {
  const { slug } = await params;
  const page = pages.find((entry) => entry.slug === slug);
  if (!page) notFound();
  return page;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, treatment } = await getPage(params);
  return {
    title: `${treatment?.name ?? `${category.name} Treatments`} | WOW FACTOR`,
    description: treatment?.overview ?? category.overview,
  };
}

export default async function TreatmentPage({ params }: PageProps) {
  const { category, treatment } = await getPage(params);
  const heading = treatment?.name ?? `${category.name} treatments`;
  const items = category.items.filter((item) => item.slug !== treatment?.slug);

  return (
    <TreatmentPageLayout>
      <section className="treatment-page-hero">
        <nav aria-label="Breadcrumb" className="treatment-breadcrumb">
          <Link href="/treatments#treatments-directory">Treatments</Link>
          <span aria-hidden="true">/</span>
          {treatment ? (
            <>
              <Link href={treatmentHref(category.slug)}>{category.name}</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{treatment.name}</span>
            </>
          ) : (
            <span aria-current="page">{category.name}</span>
          )}
        </nav>
        <h1>{heading}</h1>
        {treatment ? (
          <a className="pill-btn" href="#booking">Book a consultation <Arrow /></a>
        ) : (
          <p>{category.overview}</p>
        )}
      </section>

      {treatment && (
        <div className="treatment-process">
          <section>
            <h2>How it’s done</h2>
            <p>{treatmentProcesses[treatment.slug]}</p>
          </section>
          <section>
            <h2>At your consultation</h2>
            <p>{treatment.overview}</p>
          </section>
        </div>
      )}

      <section className="treatment-page-list" aria-labelledby="treatment-list-title">
        <h2 id="treatment-list-title">
          {treatment ? `More ${category.name.toLowerCase()} treatments` : 'Explore treatments'}
        </h2>
        <ul>
          {items.map((item) => (
            <li key={item.slug}>
              <Link href={treatmentHref(item.slug)} className="directory-treatment">
                <span>{item.name}</span>
                <span className="directory-treatment-arrow"><Arrow /></span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </TreatmentPageLayout>
  );
}
