import "./App.css";
import UserTable from "./components/custom/UserTable";
import { columns } from "./components/custom/UserColumns";
import useFetch from "./hooks/useFetch";
import { Input } from "@/components/ui/input";
import { Button } from "./components/ui/button";
import { useRef } from "react";

function App() {
  const userName = useRef(null);

  const { error, loading, data, fetchData } = useFetch({
    url: "https://dummyjson.com/users",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold">DIGITAL JALEBI</h1>
      <h2 className="text-xl font-light mt-2 mb-10">Ayush Singh Kushwah - 500095575</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchData(
            "https://dummyjson.com/users/search?q=" + userName.current.value
          );
        }}
        className="flex gap-5 mb-5"
      >
        <Input ref={userName} placeholder="Search user" />
        <Button
          style={{
            width: "100px",
          }}
        >
          Search
        </Button>
      </form>
      <UserTable columns={columns} data={data} />
    </div>
  );
}

export default App;
