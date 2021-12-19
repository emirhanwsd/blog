export default function request(request, result) {
    result.status(200).json([
        {
            "title": "Boost your conversation rate",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cumque dicta error eum fugit id nam.",
            "slug": "boost-your-conversation-rate",
            "date": "Mar 16, 2021"
        },
        {
            "title": "How to use search engine optimization to drive sales",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cumque dicta.",
            "slug": "how-to-use-search-engine-optimization-to-drive-sales",
            "date": "Mar 10, 2021"
        },
        {
            "title": "Improve your customer experience",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cumque dicta error eum fugit id nam necessitatibus.",
            "slug": "improve-your-customer-experience",
            "date": "Feb 12, 2021"
        },
        {
            "title": "Writing effective landing page copy",
            "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            "slug": "writing-effective-landing-page-copy",
            "date": "Jan 29, 2021"
        }
    ])
}