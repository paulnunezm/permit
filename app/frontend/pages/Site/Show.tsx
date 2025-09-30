import { Head, Link } from '@inertiajs/react'
import Site from './Site'
import { SiteType } from './types'
import { PermissionType } from '../Permission/types'
import AppLayout from '../../layouts/app-layout'
import Permission from '../Permission/Permission'


type Role = {
    name: String
}

type User = {
    username: String,
    role: Role
}

interface ShowProps {
    site: SiteType
    users: User[]
    permissions: PermissionType[]
    flash: { notice?: string }
}

export default function Show({ site, users, permissions, flash }: ShowProps) {
    console.log(permissions)
    return (
        <>
            <AppLayout>
                <Head title={`Site - ${site.name}`} />

                <div className="mx-auto w-full px-8 pt-8">
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
                    <div className="mx-auto">
                        <Link
                            href={`#`}
                            className="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium" >
                            Create new member
                        </Link>
                        <div className="inline-block ml-2">
                            <Link
                                href={`/permissions/new`}
                                as="button"
                                method="get"
                                className="mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium" >
                                Create permission
                            </Link>
                        </div>
                    </div>

                    <div className="mx-auto w-full my-8">
                        <h2 className='text-xl font-semibold'>Users</h2>
                        <ul >
                            {users.map((user, index) => (
                                <li key={index}> {user.username} - {user.role.name} </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mx-auto my-8">
                        <h2 className='text-xl font-semibold'>Permissions</h2>
                        <ul>
                            {permissions.map((permission, index) => (
                                <li key={index}>
                                    <Permission permission={permission} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </AppLayout >
        </>
    )
}
