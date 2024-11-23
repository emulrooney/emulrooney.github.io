'use client'

import './styles/components/nav.css';
import './styles/components/link-button.css';
import Link from "next/link";
import { usePathname } from 'next/navigation'
import {TransitionLink} from "@/app/components/transitionLink";

export default function Header() {
  const pathname = usePathname()

  return (<header>
    <div>
      <Link href="/">
      <h1>Evan Mulrooney</h1>
      <h2>Full-stack Software Developer</h2>
      </Link>
      <nav>
        <ul>

          <li key="1">
            <TransitionLink
              className={"link-button " + (pathname == "/aboutme" || pathname == "/" ? "active" : "")}
              href={"/aboutme"}>
              About me
            </TransitionLink>
          </li>
          <li key="2">
            <TransitionLink
              className={"link-button " + (pathname == "/resume" ? "active" : "")}
              href={"/resume"}>
              Experience & resume
            </TransitionLink>
          </li>
          <li key="3">
            <TransitionLink
              className={"link-button " + (pathname == "/projects" ? "active" : "")}
              href={"/projects"}>
              Projects
            </TransitionLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>);
}
