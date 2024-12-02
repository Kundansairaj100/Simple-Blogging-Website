import { Avatar } from "./BlogCard"
export function Appbar()
{
    return <div className="border-b-2 flex justify-between px-10 py-4">
        <div className="flex justify-center items-center text-2xl text-bold">Medium</div>
        <div className="flex justify-center items-center"><Avatar size={6} name="kundan"/></div>
    </div>
}