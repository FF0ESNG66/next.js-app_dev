import Hello from "@/components/hello";

const Home = () => {
  console.log('This is a server component!')

  return (
    <main>


    <div className="text-5xl underline">
        Welcom to Next.js!
    </div>

    <Hello />

    </main>
    
  )
}

export default Home
