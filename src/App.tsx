import { Cog8ToothIcon } from "@heroicons/react/24/outline";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-blue-900 border-4 border-red-500 rounded-lg flex flex-col items-center p-24">
        <Cog8ToothIcon className="stroke-1 w-50 text-blue-200 animate-[spin_10s_linear_infinite]" />
        <div className="p-12 w-96 border-4 rounded-lg border-red-500 flex flex-col gap-y-4 mt-8">
          <h1 className="text-blue-200 text-2xl font-semibold">
            Site under maintainence
          </h1>
          <p className="text-blue-200">
            V2 of my portfolio website is on the way. It will feature a simpler
            design with more of a focus on my personal projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
