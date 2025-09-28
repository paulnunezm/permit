import { SiteType } from './types'

interface SiteProps {
  site: SiteType
}

export default function Site({ site }: SiteProps) {
  return (
    <div>
      <p className="my-5">
        <strong className="block font-medium mb-1">Name:</strong>
        {site.name?.toString()}
      </p>
      <p className="my-5">
        <strong className="block font-medium mb-1">User:</strong>
        {site.user_id?.toString()}
      </p>
    </div>
  )
}
