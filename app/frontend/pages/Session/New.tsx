import { Form, usePage } from '@inertiajs/react'
import { Link } from '@inertiajs/react'
import { Input } from '../../components/ui/input'

export default function New() {
    const { errors } = usePage().props
    return (
        <Form action="/session" method="post">
            {() => (
                <>
                    <div className="mx-20 mt-20 mb-0">
                        <h1 className="text-3xl">Owner Log in</h1>
                        <div className='my-8 flex:row'>
                            < Input name="email_address" type="email" className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2  w-full" placeholder="Email" />
                            <Input name="password" type="password" className="block shadow rounded-md border border-gray-400 outline-none px-3 py-2 mt-4 w-full" placeholder="Password" />
                            {errors.login && <div>{errors.login}</div>}
                            <button
                                className="mt-4 rounded-lg py-3 px-5 bg-teal-700 text-teal-50 font-medium cursor-pointer" type="submit">
                                LogIn
                            </button>
                            <Link href="/passwords/new" method="get" as="button"
                                className="mt-4 mx-4 rounded-lg py-3 px-5 bg-gray-200 text-gray-400 font-medium cursor-pointer" >
                                Forgot password
                            </Link>
                        </div>
                    </div>

                </>
            )}
        </Form>
    )
}
