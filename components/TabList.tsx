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
    <div className="my-10 flex justify-center ">
      <Tabs defaultValue="6 ශ්‍රේණිය" className="grid max-w-7xl mx-auto">
        <TabsList className="mx-auto h-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {Classes.map((cl, index) => {
            return (
              <TabsTrigger value={cl.class} key={index}>
                {cl.class}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <div className="flex flex-wrap justify-center">
          <div className="overflow-hidden">
            <TabsContent
              value="6 ශ්‍රේණිය"
              className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
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
            <TabsContent
              value="7 ශ්‍රේණිය"
              className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {Grade7.map((card, index) => {
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
            <TabsContent
              value="8 ශ්‍රේණිය"
              className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {Grade8.map((card, index) => {
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
            <TabsContent
              value="9 ශ්‍රේණිය"
              className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {Grade9.map((card, index) => {
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
            <TabsContent
              value="10 ශ්‍රේණිය"
              className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {Grade10.map((card, index) => {
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
            <TabsContent
              value="11 ශ්‍රේණිය"
              className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {Grade11.map((card, index) => {
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
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default TabList;
