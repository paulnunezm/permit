import { Head, usePage } from '@inertiajs/react'
import Form from './Form'
import { SiteType } from './types'
import AppLayout from '../../layouts/app-layout'

interface EditProps {
    site: SiteType
}

export default function Edit({ site }: EditProps) {

    const role = usePage().props.current_user.role.name
    console.log(role)
    return (
        <>
            <AppLayout title='Editing Site'>
                <Head title="Editing site" />
                <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
                    <Form
                        site={site}
                        onSubmit={(form) => {
                            form.transform((data) => ({ site: data }))
                            form.patch(`/sites/${site.id}`)
                        }}
                        submitText="Update Site"
                    />
                </div>
            </AppLayout>
        </>
    )
}
