import { Head, Link } from '@inertiajs/react'
import Form from './Form'
import { SiteType } from './types'

interface NewProps {
  site: SiteType
}

export default function New({ site }: NewProps) {
  return (
    <>
      <Head title="New site" />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <h1 className="font-bold text-4xl">New site</h1>

        <Form
          site={site}
          onSubmit={(form) => {
            form.transform((data) => ({ site: data }))
            form.post('/sites')
          }}
          submitText="Create Site"
        />

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
