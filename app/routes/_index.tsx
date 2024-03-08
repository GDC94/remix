import type {MetaFunction} from "@remix-run/node";

import {Button} from "../components/ui/button";

export const meta: MetaFunction = () => {
  return [{title: "New Remix App"}, {name: "description", content: "Welcome to Remix!"}];
};

export default function Index() {
  return (
    <div
      className="bg-green-500"
      style={{fontFamily: "system-ui,     sans-serif", lineHeight: "1.8"}}
    >
      <h1 className="text-3xl">Welcome to Remixxxxx</h1>
      <ul>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/blog" rel="noreferrer">
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/jokes" rel="noreferrer">
            Deep Dive Jokes App Tutorial
          </a>
        </li>

        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
        <Button>shadcn</Button>
      </ul>
    </div>
  );
}