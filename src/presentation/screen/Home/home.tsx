import FormTime from "../../components/FormTime";
import FormUser from "../../components/FormUsers";
import TimeLine from "../../components/TimeLine";
import UserList from "../../components/UserList";

function Home() {
  return (
    <>
      <div className="flex-col md:hidden">
        <div className="w-full bg-white-100 p-2 flex flex-col gap-8">
          <FormUser />
          <FormTime />
        </div>

        <div className="flex-grow bg-white-100 p-4">
          <div className=" w-full bg-white-100 p-2 overflow-y-auto max-h-[200px]">
            <TimeLine />
          </div>
          <UserList />
        </div>
      </div>

      <div className="hidden md:flex">
        <div className=" w-1/8 bg-white-100 p-2 overflow-y-auto max-h-[700px]">
          <TimeLine />
        </div>
        <div className="flex-grow bg-white-100 p-4 ">
          <UserList />
        </div>
        <div className="w-1/4 bg-white-100 p-2 flex flex-col gap-8">
          <FormUser />
          <FormTime />
        </div>
      </div>
    </>
  );
}

export default Home;
