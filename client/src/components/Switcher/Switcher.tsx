import react, {useState} from "react";

import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";

const Switcher = () => {
    const data = [
        {
          label: "HTML",
          value: "html",
          desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
        },
        
     
        {
          label: "Vue",
          value: "vue",
          desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're 
          constantly trying to express ourselves and actualize our dreams.`,
        },
    ];
    
    const [open, setOpen] = useState(1);
    
    
     
    return (
        <Tabs value="html">
          <TabsHeader>
            {data.map(({ label, value }, i) => (
              <Tab key={value} value={value} className={`active:bg-slate-400 rounded-lg ${open === i ? 'bg-slate-200' : 'bg-white'}`} onClick={()=>{setOpen(i)}}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
    );
}

export default Switcher;