import { Head, Link } from '@inertiajs/react'
import Role from './Role'
import { RoleType } from './types'

interface ShowProps {
  role: RoleType
  flash: { notice?: string }
}

export default function Show({ role, flash }: ShowProps) {
  return (
    <>
      <Head title={`Role #${role.id}`} />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <div className="mx-auto">
          {flash.notice && (
            <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
              {flash.notice}
            </p>
          )}

          <h1 className="font-bold text-4xl">Role #{role.id}</h1>

          <Role role={role} />

          <Link
            href={`/roles/${role.id}/edit`}
            className="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Edit this role
          </Link>
          <Link
            href="/roles"
            className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Back to roles
          </Link>
          <div className="inline-block ml-2">
            <Link
              href={`/roles/${role.id}`}
              as="button"
              method="delete"
              className="mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium"
            >
              Destroy this role
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
