import { Head, Link } from '@inertiajs/react'
import Permission from './Permission'
import { PermissionType } from './types'

interface ShowProps {
  permission: PermissionType
  flash: { notice?: string }
}

export default function Show({ permission, flash }: ShowProps) {
  return (
    <>
      <Head title={`Permission #${permission.id}`} />

      <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
        <div className="mx-auto">
          {flash.notice && (
            <p className="py-2 px-3 bg-green-50 mb-5 text-green-500 font-medium rounded-lg inline-block">
              {flash.notice}
            </p>
          )}

          <h1 className="font-bold text-4xl">Permission #{permission.id}</h1>

          <Permission permission={permission} />

          <Link
            href={`/permissions/${permission.id}/edit`}
            className="mt-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Edit this permission
          </Link>
          <Link
            href="/permissions"
            className="ml-2 rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium"
          >
            Back to permissions
          </Link>
          <div className="inline-block ml-2">
            <Link
              href={`/permissions/${permission.id}`}
              as="button"
              method="delete"
              className="mt-2 rounded-lg py-3 px-5 bg-gray-100 font-medium"
            >
              Destroy this permission
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
