import { Head, usePage } from '@inertiajs/react'
import Form from './Form'
import { PermissionType } from './types'
import AppLayout from '../../layouts/app-layout.jsx'

interface NewProps {
    permission: PermissionType
}

export default function New({ permission }: NewProps) {
    return (
        <>
            <AppLayout>
                <Head title="New permission" />

                <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
                    <h1 className="font-bold text-4xl">New permission</h1>

                    <Form
                        permission={permission}
                        onSubmit={(form) => {
                            form.transform((data) => ({ permission: data }))
                            form.post('/permissions')
                        }}
                        submitText="Create Permission"
                    />

                </div>
            </AppLayout>
        </>
    )
}
