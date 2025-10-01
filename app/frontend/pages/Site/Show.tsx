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
    return (
        <>
            <AppLayout title={`Site - ${site.name}`} >

                <Site site={site} />
                <section className='w-full h-full flex flex-col gap-12'>
                    <div className="flex lg:flex-row  flex-col gap-2">
                        <Link
                            href={`/sites/${site.id}/edit`}
                            className="
                            mt-4 w-auto h-auto rounded-lg py-3 px-5 
                            bg-gray-200 text-gray-600 
                            hover:bg-gray-600 hover:text-gray-50
                            font-medium text-center cursor-pointer" >
                            Edit this site
                        </Link>

                        <Link
                            href={`/permissions/new`}
                            as="button"
                            method="get"
                            className="
                            mt-4 w-auto rounded-lg py-3 px-5 
                            bg-gray-200 text-gray-600 
                            hover:bg-gray-600 hover:text-gray-50
                            font-medium text-center cursor-pointer" >
                            Create permission
                        </Link>

                        <Link
                            href={`#`}
                            as="button"
                            method="get"
                            className="
                            mt-4 w-auto rounded-lg py-3 px-5 
                            bg-gray-200 text-gray-400 
                            font-medium text-center cursor-pointer" >
                            Create new site
                        </Link>

                        <Link
                            href={`#`}
                            className="
                            mt-4 w-auto rounded-lg py-3 px-5 
                            bg-gray-200 text-gray-400 
                            font-medium text-center cursor-pointer" >
                            Create new member
                        </Link>
                    </div>

                    <div>
                        <h2 className='text-xl font-semibold'>Users</h2>
                        <ul >
                            {users.map((user, index) => (
                                <li key={index}> {user.username} - {user.role.name} </li>
                            ))}
                        </ul>
                    </div>

                    <div >
                        <h2 className='text-xl font-semibold'>Permissions</h2>
                        <ul>
                            {permissions.map((permission, index) => (
                                <li key={index}>
                                    <Permission permission={permission} />
                                </li>
                            ))}
                        </ul>
                    </div>

                </section>
            </AppLayout >
        </>
    )
}
