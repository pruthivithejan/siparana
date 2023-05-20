import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import {
  Classes,
  Grade6,
  Grade7,
  Grade8,
  Grade9,
  Grade10,
  Grade11,
} from "@/lib/content";
import { CardDemo } from "./DowloadCard";

const TabList = () => {
  return (
    <div className="mt-10 flex justify-center ">
      <Tabs defaultValue="account" className="w-[400px] ">
        <TabsList className="justify-start">
          {Classes.map((cl, index) => {
            return (
              <TabsTrigger value={cl.class} key={index}>
                {cl.class}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <div className="flex flex-wrap justify-center">
          <TabsContent
            value="6 ශ්‍රේණිය"
            className="grid grid-rows-4 grid-flow-col gap-4"
          >
            {Grade6.map((card, index) => {
              return (
                <CardDemo
                  key={index}
                  img={card.img}
                  grade={card.grade}
                  subject={card.subject}
                  description={card.description}
                  link={card.link}
                />
              );
            })}
          </TabsContent>
          <TabsContent value="account">to your account here.</TabsContent>
          <TabsContent value="7 ශ්‍රේණිය">
            Change your password here.
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default TabList;
