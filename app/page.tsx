import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <main className="flex justify-center items-center h-screen">
      <Button asChild size={"lg"}>
        <Link href={"/employee"}>Sign in as Employee</Link>
      </Button>
    </main>
  );
};

export default Home;
