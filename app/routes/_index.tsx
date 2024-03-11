import type {MetaFunction} from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{title: "New Remix App"}, {name: "description", content: "Welcome to Remix!"}];
};

export default function Index() {
  return (
    <div className="bg-green-500">
      <h1 className="text-3xl">Welcome to Remixxxxx</h1>
    </div>
  );
}
