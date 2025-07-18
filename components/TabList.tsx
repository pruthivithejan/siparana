import React from "react";
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
    <div className="my-10 w-full">
      <Tabs defaultValue="6 ශ්‍රේණිය" className="w-full max-w-7xl mx-auto">
        <div className="flex justify-center w-full mb-6 px-4">
          <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 w-fit mx-auto max-w-full">
            {Classes.map((cl, index) => (
              <TabsTrigger value={cl.class} key={index} className="text-xs sm:text-sm px-2 sm:px-3">
                {cl.class}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="min-h-[500px]">
          <TabsContent
            value="6 ශ්‍රේණිය"
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {Grade6.map((card, index) => (
              <CardDemo
                key={index}
                img={card.img}
                grade={card.grade}
                subject={card.subject}
                description={card.description}
                link={card.link}
              />
            ))}
          </TabsContent>

          <TabsContent
            value="7 ශ්‍රේණිය"
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {Grade7.map((card, index) => (
              <CardDemo
                key={index}
                img={card.img}
                grade={card.grade}
                subject={card.subject}
                description={card.description}
                link={card.link}
              />
            ))}
          </TabsContent>
          <TabsContent
            value="8 ශ්‍රේණිය"
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {Grade8.map((card, index) => (
              <CardDemo
                key={index}
                img={card.img}
                grade={card.grade}
                subject={card.subject}
                description={card.description}
                link={card.link}
              />
            ))}
          </TabsContent>
          <TabsContent
            value="9 ශ්‍රේණිය"
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {Grade9.map((card, index) => (
              <CardDemo
                key={index}
                img={card.img}
                grade={card.grade}
                subject={card.subject}
                description={card.description}
                link={card.link}
              />
            ))}
          </TabsContent>
          <TabsContent
            value="10 ශ්‍රේණිය"
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {Grade10.map((card, index) => (
              <CardDemo
                key={index}
                img={card.img}
                grade={card.grade}
                subject={card.subject}
                description={card.description}
                link={card.link}
              />
            ))}
          </TabsContent>
          <TabsContent
            value="11 ශ්‍රේණිය"
            className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {Grade11.map((card, index) => (
              <CardDemo
                key={index}
                img={card.img}
                grade={card.grade}
                subject={card.subject}
                description={card.description}
                link={card.link}
              />
            ))}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default TabList;
