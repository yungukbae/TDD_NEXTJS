import Stack from "@/components/Stack";
import Link from "next/link";

const Menu = () => {
  const cls = "h-10 text-center bg-slate-200";
  return (
    <>
      <Stack direction="col">
        <div className={cls}>
          <Link href={"/dashboard"}>dashboard1</Link>
        </div>
        <div className={cls}>
          <Link href={"/dashboard2"}>dashboard2</Link>
        </div>
        <div className={cls}>
          <Link href={"/dashboard3"}>dashboard3</Link>
        </div>
      </Stack>
    </>
  );
};

export default Menu;
