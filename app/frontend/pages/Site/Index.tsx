import { Head, Link } from '@inertiajs/react'
import { Fragment } from 'react'
import Site from './Site'
import { SiteType } from './types'

interface IndexProps {
    sites: SiteType[]
    flash: { notice?: string }
}

// NOT USED RN
export default function Index({ sites, flash }: IndexProps) {
    return (
        <>
            <Head title="Sites" />
            <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
                {flash.notice && (
                    <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
                        {flash.notice}
                    </p>
                )}
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-4xl">Sites</h1>
                    <Link
                        href="/sites/new"
                        className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium"
                    >
                        New site
                    </Link>
                </div>

                <div className="min-w-full">
                    {sites.map((site) => (
                        <Fragment key={site.id}>
                            <Site site={site} />
                            <p>
                                <Link
                                    href={`/sites/${site.id}`}
                                    className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
                                >
                                    Show this site
                                </Link>
                            </p>
                        </Fragment>
                    ))}
                </div>
            </div>
        </>
    )
}
