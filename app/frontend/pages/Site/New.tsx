import { Head, Link } from '@inertiajs/react'
import Form from './Form'
import { SiteType } from './types'
import AppLayout from '../../layouts/app-layout.jsx'

interface NewProps {
    site: SiteType
}

export default function New({ site }: NewProps) {
    return (
        <>
            <AppLayout title="New site">
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
            </AppLayout>
        </>
    )
}
