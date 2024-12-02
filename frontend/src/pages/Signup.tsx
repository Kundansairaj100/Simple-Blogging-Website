import { Quote } from "../compoents/Quote"
import { Auth } from "../compoents/Auth"
export const Signup  = () => {
    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className=""><Auth type="signup"/></div>
        <div className="hidden lg:block"><Quote></Quote></div>
        </div>
}