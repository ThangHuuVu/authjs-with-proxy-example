import CustomLink from "@/components/CustomLink";
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
        <div className="mx-auto max-w-md space-y-6 text-center flex items-center flex-col">
          <Image src="/logo.png" alt="Auth.js" width="64" height="64" />
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
            NextAuth.js Proxy Example
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            This example shows how to deploy Auth.js behind a proxy server. The
            main app is a Next.js app (
            <CustomLink href="https://github.com/ThangHuuVu/authjs-with-proxy-example">
              Source
            </CustomLink>
            ) deployed on Netlify, and the Auth.js app (
            <CustomLink href="https://github.com/ThangHuuVu/next-auth-behind-proxy">
              Source
            </CustomLink>
            ) is deployed on Vercel.
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="/authjs/signin"
          >
            <LogIn className="mr-2 h-5 w-5" />
            Sign In with Auth.js
          </Link>
        </div>
      </div>
    </>
  );
}
