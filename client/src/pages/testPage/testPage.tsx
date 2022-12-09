import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
 
const TestPage = () => {
  return (
    <Menu animate={{
      mount: { y: 0 },
      unmount: { y: 25 },
    }}>
      <MenuHandler>
        <Button variant="gradient" className="w-20 h-10 bg-slate-500 text-[5px]">Open Menu</Button>
      </MenuHandler>
      <MenuList className="w-[140px] h-[140px]">
        <MenuItem className="">
          <div className="w-25 h-8 flex flex-row justify-center rounded-lg hover:bg-slate-100">
          <span className="RobotoMediumText">Test</span>
          </div>
        </MenuItem>
        <MenuItem>1</MenuItem>
        <MenuItem>1</MenuItem>
      </MenuList>
    </Menu>
  );
}
export default TestPage