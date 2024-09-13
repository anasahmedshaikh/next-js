import Link from "next/link";


export default function Header(){
    return(
        <div>
        <ul id="header">
            <li><Link className="abc" href="/">Home</Link></li>
            <li><Link className="abc" href="/about">About</Link></li>
            <li><Link className="abc" href="/contact">Contact Us</Link></li>
            <li><Link className="abc" href="/services">Services</Link></li>
        </ul>
        </div>
    )
}