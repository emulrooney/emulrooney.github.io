import React from "react";

export default function Page({id, children,}: Readonly<
  {
    id: string;
    children: React.ReactNode;
  }
>) {
  return (
    <section id={id}>
      {children}
    </section>
    );
}