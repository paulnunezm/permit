import { Head, Link } from '@inertiajs/react'
import Site from './Site'
import { SiteType } from './types'

interface ShowProps {
  site: SiteType
  flash: { notice?: string }
}

export default function Show({ site, flash }: ShowProps) {
  return (
    <>
      <Head title={`Site #${site.id}`} />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <div className="mx-auto">
          {flash.notice && (
            <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
              {flash.notice}
            </p>
          )}

          <h1 className="font-bold text-4xl">Site #{site.id}</h1>

          <Site site={site} />

          <Link
            href={`/sites/${site.id}/edit`}
            className="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Edit this site
          </Link>
          <Link
            href="/sites"
            className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Back to sites
          </Link>
          <div className="inline-block ml-2">
            <Link
              href={`/sites/${site.id}`}
              as="button"
              method="delete"
              className="mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium"
            >
              Destroy this site
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
