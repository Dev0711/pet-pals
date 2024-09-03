/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/JYyhVbbkGMa
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator";


export default function UserProfile({ user }) {

  return (
    (<div className="max-w-3xl mx-auto p-6 sm:p-8 bg-[#FFF5C3] border-2 border-black mt-20 mb-14 rounded-lg">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <div className="flex-shrink-0 ">
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-black">
            <AvatarImage src={user?.profilePicUrl ? user?.profilePicUrl : "/placeholder-user.jpg"} />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1 grid gap-2 self-center">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">{user?.username}</h1>
            {user?.isVerified ? <Badge variant="secondary">Verified</Badge> : null}
          </div>
          <div className="text-muted-foreground">
            <span>{user?.email}</span>
            <span className="mx-2">·</span>
            <span>{user?.city || user?.state ? <>{user?.city}{", "}{user?.state}</> : null}</span>
          </div>
          {/* <div className="grid sm:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <PawPrintIcon className="w-5 h-5 text-primary" />
              <span>Prefers dogs</span>
            </div>
            <div className="flex items-center gap-2">
              <PawPrintIcon className="w-5 h-5 text-primary" />
              <span>Prefers cats</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarCheckIcon className="w-5 h-5 text-primary" />
              <span>Adopted 2 pets</span>
            </div>
          </div> */}
        </div>
      </div>
      <Separator className="my-6" />
      <div className="grid gap-6">
        <div>
          <h2 className="text-lg font-semibold">About</h2>
          <p className="text-muted-foreground">
            I'm a passionate animal lover and have been volunteering at the local animal shelter for the past 3 years.
            I'm looking to adopt a furry friend to join my family.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Contact</h2>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-muted-foreground" />
              <span>{user?.phoneNo || "Not Available"}</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="w-5 h-5 text-muted-foreground" />
              <span>{user?.email}</span>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <h2 className="text-2xl font-bold">Adoption Preferences</h2>
          <div className="grid gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <PawPrintIcon className="h-5 w-5" />
              <span>Prefers dogs and cats</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <PawPrintIcon className="h-5 w-5" />
              <span>Open to all ages and sizes</span>
            </div>
          </div>
        </div>
        {user?.pets_ids ? <div>
          <h2 className="text-lg font-semibold">Adoption History</h2>
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/placeholder.svg"
                alt="Adopted Pet"
                width={80}
                height={80}
                className="rounded-lg" />
              <div>
                <h3 className="text-base font-semibold">Buddy</h3>
                <div className="text-muted-foreground">
                  <span>Adopted on</span>
                  <span className="mx-2">·</span>
                  <span>May 15, 2022</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/placeholder.svg"
                alt="Adopted Pet"
                width={80}
                height={80}
                className="rounded-lg" />
              <div>
                <h3 className="text-base font-semibold">Whiskers</h3>
                <div className="text-muted-foreground">
                  <span>Adopted on</span>
                  <span className="mx-2">·</span>
                  <span>September 20, 2021</span>
                </div>
              </div>
            </div>
          </div>
        </div> : null}
      </div>
    </div>)
  );
}

function CalendarCheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="m9 16 2 2 4-4" />
    </svg>)
  );
}


function MailIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>)
  );
}


function PawPrintIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="4" r="2" />
      <circle cx="18" cy="8" r="2" />
      <circle cx="20" cy="16" r="2" />
      <path
        d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
    </svg>)
  );
}


function PhoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
