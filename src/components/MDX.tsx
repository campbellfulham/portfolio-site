import type {
  HTMLAttributes,
  TableHTMLAttributes,
  AnchorHTMLAttributes,
} from "react";

export const mdxComponents = {
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-10 text-2xl font-semibold" {...props} />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-8 text-xl font-semibold" {...props} />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="leading-7 my-4" {...props} />
  ),
  a: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="underline underline-offset-2 hover:opacity-80" {...props} />
  ),
  pre: (props: HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="rounded-xl p-4 overflow-x-auto bg-zinc-900 text-zinc-50 my-6"
      {...props}
    />
  ),
  code: (props: HTMLAttributes<HTMLElement>) => (
    <code className="px-1 py-0.5 rounded bg-zinc-100" {...props} />
  ),
  table: (props: TableHTMLAttributes<HTMLTableElement>) => (
    <table
      className="w-full border-collapse my-6
                 [&_th]:text-left [&_th]:font-medium
                 [&_*]:border [&_*]:border-zinc-200 dark:[&_*]:border-zinc-800
                 [&_*]:p-3"
      {...props}
    />
  ),
};

export default mdxComponents;
