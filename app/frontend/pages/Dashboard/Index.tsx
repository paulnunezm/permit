import { Head, Link, usePage } from '@inertiajs/react'
import AppLayout from '../../layouts/app-layout'

type Site = {
    id: number;
    name: string;
};

type MyPageProps = {
    sites: Site[];
};

export default function Index() {
    const { sites } = usePage<MyPageProps>().props
    return (
        <>
            <AppLayout title='Dashboard' hideBackButton={false}>
                <div className="mx-auto md:w-2/3 w-full px-8 pt-8">
                    <div className="flex-row justify-between items-center">
                        <h2 className="text-2xl font-semibold">Sites</h2>

                        <Link href="/sites/new" method="get" as="button"
                            className="
                            mt-4 w-40 rounded-lg py-3 px-5 
                            bg-gray-200 text-gray-600 
                            hover:bg-gray-600 hover:text-gray-50
                            font-medium cursor-pointer" >
                            Create new site
                        </Link>

                        <section>
                            {sites.map((site, index) => (
                                <div className='my-8 flex gap-2 items-center'>

                                    <Link href={`/sites/${site.id}`} method="get" as="button"
                                        className='
                                        w-100
                                        py-3 px-5 
                                        text-left 
                                        rounded-lg
                                        hover:bg-gray-100 hover:text-gray-900' >
                                        {site.name}
                                    </Link>

                                    <Link href={`/sites/${site.id}/edit`} method="get" as="button"
                                        className="
                            w-40 rounded-lg py-3 px-5 
                            bg-emerald-200 text-emerald-800 
                            hover:bg-emerald-400 hover:text-green-50
                            font-medium cursor-pointer" >
                                        Edit
                                    </Link>

                                    <Link href="#" method="get" as="button"
                                        className="
                            w-40 rounded-lg py-3 px-5 
                            bg-gray-200 text-gray-400 
                            font-medium cursor-pointer" >
                                        Delete
                                    </Link>
                                </div>
                            ))}
                        </section>
                    </div>

                </div>
            </AppLayout >
        </>
    )
}
