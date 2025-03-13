import FormTime from "../../components/FormTime";
import FormUser from "../../components/FormUsers";
import TimeLine from "../../components/TimeLine";
import UserList from "../../components/UserList";

function Home() {
  return (
    <div className="flex">
      <div className="w-1/6 bg-white-100 p-2 overflow-y-auto max-h-[700px]">
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
  );
}

export default Home;
