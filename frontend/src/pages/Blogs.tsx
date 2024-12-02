import { Appbar } from "../compoents/Appbar";
import { BlogCard } from "../compoents/BlogCard";


export function Blogs() {
    return <div className="flex flex-col gap-y-2">
        <Appbar/>
        <div className="flex justify-center"><div className="flex flex-col gap-y-2 max-w-xl">
        <BlogCard authorName="N Kundan" title="Why I am single" content="I tried bhai bohut try kiya par hage ja rahu hu yarrr madat karo koi" publishedDate="30th November 2024" />
        <BlogCard authorName="N Kundan" title="Why I am single" content="I tried bhai bohut try kiya par hage ja rahu hu yarrr madat karo koi" publishedDate="30th November 2024" />
        <BlogCard authorName="N Kundan" title="Why I am single" content="I tried bhai bohut try kiya par hage ja rahu hu yarrr madat karo koi" publishedDate="30th November 2024" />
    </div>
    </div>
    </div>
}