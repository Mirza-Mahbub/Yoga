import Button from "./Common/Button";
import Logo from "./Common/Logo";
import Menu from "./Common/Menu";
import Avatar from "./SVG/Avatar";

export default function Header() {
  return (
    <div className="flex w-full justify-center bg-[#dbe8e7]">
      <header className="flex justify-between items-center py-10 w-7xl ">
        <Logo texColor="text-[#404b48]" />
        <div className="flex justify-center items-center gap-5">
          <nav className="flex justify-between items-center gap-10 px-4">
            <Menu>Home</Menu>
            <Menu>About Us</Menu>
            <Menu>Classes</Menu>
            <Menu>Pages</Menu>
            <Menu>Blog</Menu>
            <Menu>Features</Menu>
          </nav>
          <Button styling="bg-[#5f857d] hover:bg-[#69938a]">
            View Classes
          </Button>
          <div className="bg-[#5f857d] rounded-full p-2">
            <Avatar />
          </div>
        </div>
      </header>
    </div>
  );
}
