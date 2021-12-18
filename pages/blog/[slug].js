import Head from "next/head";
import Link from "next/link";

const Blog = ({blog}) => {
    if (blog === undefined) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-900">
                <Head>
                    <title>Blog not found</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <h3 className="text-5xl font-bold mb-3">Blog not found</h3>
                <p className="text-xl text-gray-400 mb-6">Please check the URL in the address bar and try again.</p>

                <div className="flex gap-y-3">
                    <Link href="../">
                        <a className="px-6 py-2 text-gray-100 bg-indigo-600 hover:bg-indigo-700 rounded transition-colors">Go back home</a>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Head>
                <title>{blog.title}</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                      rel="stylesheet"/>
            </Head>
        </div>
    )
}

Blog.getInitialProps = async (context) => {
    let {slug} = context.query

    let blog = await fetch(`http://localhost:3000/api/blog/${slug}`)

    if (blog.status !== 200) {
        return {
            blog: undefined
        }
    }

    blog = await blog.json();

    return {
        blog: blog
    }
}

export default Blog;