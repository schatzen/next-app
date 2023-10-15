import { CounterButton } from "@/components/CounterButton";

export default function Home() {
  console.log("hello from Server");
  return (
    <>
      <h1>Main Page</h1>
      <CounterButton />
    </>
  );
}
