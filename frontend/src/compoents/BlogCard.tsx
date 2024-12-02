interface BlogCardProps
{
    authorName: string;
    title: string;
    content:string;
    publishedDate: string;
}

export function BlogCard({
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps)
{
    return <div className="border border-slate-300 pb-4 p-2">
        <div className="flex">
        <div className="flex justify-center flex-col"><Avatar size={6} name={authorName}/></div> 
         <div className="text-sm font-extralight pl-2 flex justify-center flex-col">{authorName}</div>
         <div className="flex justify-center flex-col pl-2"><Circle/></div>
         <div className="pl-2 font-thin text-slate-400">{publishedDate}</div>
         </div>
        <div className="text-xl font-semibold pt-2">{title}</div>
        <div className="text-md font-thin">{content.slice(0,100)+"..."}</div>
        <div className="text-slate-500 text-sm font-thin pt-4">{`${Math.ceil(content.length) / 100} minute(s) read`}</div>
    </div>
}

function Circle ()
{
    return <div className="w-1 h-1 rounded-full bg-slate-500"></div>
}
export function Avatar ({name,size} : {name:string,size:number})
{
    
    return <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className="font-xs font-extralight text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
    
}