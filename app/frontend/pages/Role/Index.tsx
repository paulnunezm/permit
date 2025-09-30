import { Head, Link } from '@inertiajs/react'
import { Fragment } from 'react'
import Role from './Role'
import { RoleType } from './types'

interface IndexProps {
  roles: RoleType[]
  flash: { notice?: string }
}

export default function Index({ roles, flash }: IndexProps) {
  return (
    <>
      <Head title="Roles" />
      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">Roles</h1>
          <Link
            href="/roles/new"
            className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium"
          >
            New role
          </Link>
        </div>

        <div className="min-w-full">
          {roles.map((role) => (
            <Fragment key={role.id}>
              <Role role={role} />
              <p>
                <Link
                  href={`/roles/${role.id}`}
                  className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
                >
                  Show this role
                </Link>
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
