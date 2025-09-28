import { Head, Link } from '@inertiajs/react'
import { Fragment } from 'react'
import Permission from './Permission'
import { PermissionType } from './types'

interface IndexProps {
  permissions: PermissionType[]
  flash: { notice?: string }
}

export default function Index({ permissions, flash }: IndexProps) {
  return (
    <>
      <Head title="Permissions" />
      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        {flash.notice && (
          <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
            {flash.notice}
          </p>
        )}
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-4xl">Permissions</h1>
          <Link
            href="/permissions/new"
            className="rounded-lg py-3 px-5 bg-blue-600 text-white block font-medium"
          >
            New permission
          </Link>
        </div>

        <div className="min-w-full">
          {permissions.map((permission) => (
            <Fragment key={permission.id}>
              <Permission permission={permission} />
              <p>
                <Link
                  href={`/permissions/${permission.id}`}
                  className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
                >
                  Show this permission
                </Link>
              </p>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
