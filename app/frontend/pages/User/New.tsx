import { useForm } from '@inertiajs/react'
import AppLayout from '../../layouts/app-layout.jsx'
import { Button } from '../../components/ui/button.js'

export default function New({ site }: Any) {
    const { data, setData, post, errors } = useForm({ username: "", site_id: site.id, site_name: site.name })
    return (
        <>
            <AppLayout title="Create new member user">
                <h2 className='text-lg'>For site {data.site_name}</h2>

                <form className="mt-6"
                    onSubmit={e => {
                        e.preventDefault();
                        post('/members')
                    }}>
                    <div>
                        <label>Member identifier (name, apt#)</label>
                        <input
                            className='block'
                            name='username'
                            type="text" value={data.username}
                            onChange={(e) => setData("username", e.target.value)}
                        />
                        {errors.username && <div>{errors.username}</div>}

                    </div>
                    <div className='mt-6'>
                        <label>Site Id</label>
                        <input
                            name='site_id'
                            className='block'
                            type="text"
                            value={data.site_id}
                            onChange={(e) => setData("site_id", e.target.value)}
                            readOnly
                        />
                        {errors.site_id && <div>{errors.site_id}</div>}
                    </div>

                    <div className='mt-6 text-xl'>
                        Roles selector is needed here
                    </div>

                    <div className='mt-6 text-xl'>
                        Hey! default password is <span className='text-purple-400'>password</span> <span className='text-sm'>(please don't tell anyone)</span>
                    </div>

                    <Button type="submit"
                        className='
                        mt-4 w-auto rounded-lg py-3 px-5 
                        bg-gray-200 text-gray-600 
                        hover:bg-gray-600 hover:text-gray-50
                        font-medium text-center cursor-pointer'>
                        Create member
                    </Button>
                </form>

            </AppLayout >
        </>
    )
}
