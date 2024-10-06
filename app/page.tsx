import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="bg-background text-foreground min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Hello World</h1>
    </main>
    </>
  );
}
