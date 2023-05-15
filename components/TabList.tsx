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

const TabList = () => {
  return (
    <div className="flex items-center justify-center mt-10 ">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          {Classes.map((cl, index) => {
            return (
              <TabsTrigger value={cl.class} key={index}>
                {cl.class}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <TabsContent value="6 ශ්‍රේණිය">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="account">to your account here.</TabsContent>
        <TabsContent value="7 ශ්‍රේණිය">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default TabList;
