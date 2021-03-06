import Link from "next/link"
import ReactMarkdown from "react-markdown";

const Blog = props => {
    return (
        <div className="flex flex-col items-center">
            <h6 className="text-indigo-600 font-semibold uppercase mb-3">Introduction</h6>
            <h3 className="text-3xl font-bold mb-6 text-center">{props.title}</h3>
            <div className="mb-8 md:mb-4 text-center md:text-justify">
                <ReactMarkdown children={require(`../src/blogs/${props.slug}.md`).default}/>
            </div>
            <div className="w-full flex items-center justify-between pb-6">
                <Link href="../">
                    <a className="px-6 py-2 text-gray-100 bg-indigo-600 hover:bg-indigo-700 rounded transition-colors">Go back home</a>
                </Link>
                <h6 className="text-gray-500">{props.date}</h6>
            </div>

        </div>
    )
}

export default Blog;