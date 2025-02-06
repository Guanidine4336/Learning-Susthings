
"use client"
import { usePathname } from "next/navigation"


export default function notFound() {

    const pathname = usePathname();

    const productId = pathname.split("/")[2];
    const reviewId = pathname.split("/")[4];
    return (
        <div>
            <h2>Review {reviewId} not found for {productId}</h2>
            {/* <p>Could not find the page</p> */}
        </div>
    )
}