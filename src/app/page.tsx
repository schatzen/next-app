import os from "os";

export default function Home() {
  console.log(os.hostname());
  return <h1>Main Page</h1>;
}
