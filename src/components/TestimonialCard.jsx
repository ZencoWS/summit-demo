"use client";

import { RxStar, RxStarFilled } from "react-icons/rx";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { optimize } from "../utils/cloudinary";

export default function Testimonial(info) {
    const rating = info.rating
    const msg = info.message
    const pic = info.profilePic
    const name = info.name
    const property = info.property
    const location = info.location

    // Rating Logic
    

    return (
        // TestimonialCard.jsx
        <article className="flex min-h-[288px] justify-between w-full flex-col gap-4 rounded-md bg-summit-green-lightest px-8 py-8 text-summit-white md:min-h-[250px] md:gap-2 md:px-6 md:py-6">
            {/* Stars */}
            <div>
                <ul className="flex flex-row gap-1 justify-start items-start">
                    {/* Array => Rating to Stars */}
                    {Array.from({length: 5}, (_, index) => (
                        <li key={index}>
                            {index < Math.max(0, Math.min(5, Math.round(Number(rating) | 0))) ? (
                                <RxStarFilled className="w-6 h-6 text-yellow-400" />
                            ) : (
                                <RxStar className="w-6 h-6 text-summit-white/40"/>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            {/* Message */}
            <div className="mt-2 flex w-full justify-start items-start text-start min-[480px]:mt-0">
                <p className="text-balance text-[1.2rem]">
                    <ImQuotesLeft className="inline align-baseline mr-2 " />
                        {msg}
                    <ImQuotesRight className="inline align-baseline ml-2" />
                </p>
            </div>
            {/* Reviewer Info */}
            <div className="mt-2 flex flex-row gap-6 justify-start items-start min-[480px]:mt-0">
                <img src={optimize(pic)} className="rounded-[100%] w-[64px] h-[64px] object-cover object-center" />
                <aside className="flex flex-col py-2">
                    <small className="font-medium text-md">{name}</small>
                    <small className="font-normal text-sm">{property}, {location}</small>
                </aside>    
            </div>
       </article>
    )
}
