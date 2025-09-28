import { Head, Link } from '@inertiajs/react'
import Form from './Form'
import { SiteType } from './types'

interface EditProps {
  site: SiteType
}

export default function Edit({ site }: EditProps) {
  return (
    <>
      <Head title="Editing site" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">Editing site</h1>

        <Form
          site={site}
          onSubmit={(form) => {
            form.transform((data) => ({ site: data }))
            form.patch(`/sites/${site.id}`)
          }}
          submitText="Update Site"
        />

        <Link
          href={`/sites/${site.id}`}
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Show this site
        </Link>
        <Link
          href="/sites"
          className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
        >
          Back to sites
        </Link>
      </div>
    </>
  )
}
