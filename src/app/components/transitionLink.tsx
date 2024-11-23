'use client'
import React, {ReactNode} from 'react'
import Link, {LinkProps} from "next/link";
import { useRouter } from 'next/navigation';

interface TransitionLinkProps extends LinkProps {
  children: ReactNode,
  className: string,
  href: string;
}

/**
 * Simple class to replace <Link>s. This adds a gentle fade and enforces a scroll to the top.
 * @param children
 * @param className
 * @param href
 * @param props
 * @constructor
 */
export const TransitionLink = ({
                                 children,
                                 className,
                                 href,
                                 ...props
                               }: TransitionLinkProps
) => {
  const router = useRouter();

  const animationSleep = (sleepTime: number)=> {
    return new Promise((resolve) => {
      setTimeout(resolve, sleepTime);
    })
  }

  const onClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const main = document.querySelector('main');
    main?.classList.add('page-transition');
    await animationSleep(200);
    router.push(href);
    await animationSleep(200);
    window.scrollTo({top: 0, behavior: 'smooth'});
    main?.classList.remove('page-transition');
  }

  return <Link href={href} onClick={onClick} className={className} {...props}>
    {children}
  </Link>
}