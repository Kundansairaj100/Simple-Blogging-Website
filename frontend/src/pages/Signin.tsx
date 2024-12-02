import { Quote } from "../compoents/Quote"
import { Auth } from "../compoents/Auth"
export const Signin  = () => {
    return <div className="grid grid-cols-2 lg:grid-cols-1">
        <div className=""><Auth type="signin"/></div>
        <div className="hidden lg:block"><Quote></Quote></div>
        </div>
}