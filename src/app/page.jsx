import Admission from "@/components/Admission";
import Brand from "@/components/Brand";
import Cambridge from "@/components/Cambridge";
import HeroList from "@/components/HeroList";
import StatList from "@/components/StatList";
import Subscribe from "@/components/Subscribe";
import TeacherList from "@/components/TeacherList";
import WorkList from "@/components/WorkList";

const Page = () => {
  return (
    <>
      <HeroList />  
      <Cambridge />
     <TeacherList />
      <Admission />
      <Brand />
    </>
  );
};

export default Page;
