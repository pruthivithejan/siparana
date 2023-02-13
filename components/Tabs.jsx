import {
  Classes,
  Grade6,
  Grade7,
  Grade8,
  Grade9,
  Grade10,
  Grade11,
} from "@/lib/content";
import {
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Flex,
} from "@chakra-ui/react";
import { DownloadIcon, ViewIcon } from "@chakra-ui/icons";

const TabListView = () => {
  return (
    <Tabs isFitted variant="soft-rounded" colorScheme="green">
      <TabList mb="1em" overflowX="scroll">
        {Classes.map((cl, index) => {
          return <Tab key={index}>{cl.class}</Tab>;
        })}
      </TabList>
      <TabPanels>
        <TabPanel display="flex" flexDirection="column" gap="2.5rem">
          {Grade6.map((card, index) => {
            return (
              <DownloadCard
                key={index}
                img={card.img}
                grade={card.grade}
                name={card.subject}
                description={card.description}
                link={card.link}
              />
            );
          })}
        </TabPanel>
        <TabPanel display="flex" flexDirection="column" gap="2.5rem">
          {Grade7.map((card, index) => {
            return (
              <DownloadCard
                key={index}
                img={card.img}
                grade={card.grade}
                name={card.subject}
                description={card.description}
                link={card.link}
              />
            );
          })}
        </TabPanel>
        <TabPanel display="flex" flexDirection="column" gap="2.5rem">
          {Grade8.map((card, index) => {
            return (
              <DownloadCard
                key={index}
                img={card.img}
                grade={card.grade}
                name={card.subject}
                description={card.description}
                link={card.link}
              />
            );
          })}
        </TabPanel>
        <TabPanel display="flex" flexDirection="column" gap="2.5rem">
          {Grade9.map((card, index) => {
            return (
              <DownloadCard
                key={index}
                img={card.img}
                grade={card.grade}
                name={card.subject}
                description={card.description}
                link={card.link}
              />
            );
          })}
        </TabPanel>
        <TabPanel display="flex" flexDirection="column" gap="2.5rem">
          {Grade10.map((card, index) => {
            return (
              <DownloadCard
                key={index}
                img={card.img}
                grade={card.grade}
                name={card.subject}
                description={card.description}
                link={card.link}
              />
            );
          })}
        </TabPanel>
        <TabPanel display="flex" flexDirection="column" gap="2.5rem">
          {Grade11.map((card, index) => {
            return (
              <DownloadCard
                key={index}
                img={card.img}
                grade={card.grade}
                name={card.subject}
                description={card.description}
                link={card.link}
              />
            );
          })}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

const DownloadCard = (props) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={`/content/${props.img}.png`}
        alt="Book Cover"
      />

      <Stack>
        <CardBody>
          <Heading size="md">
            {props.grade} - {props.name}
          </Heading>
          <Text py="2">{props.description}.</Text>
        </CardBody>

        <CardFooter>
          <Flex
            gap="1em"
            flexDirection={{ base: "column", sm: "row", md: "row" }}
            minW={{ base: "100%", sm: "200px" }}
          >
            <Button
              as="a"
              leftIcon={<DownloadIcon />}
              variant="solid"
              colorScheme="blue"
              target="_blank"
              href={`https://drive.google.com/uc?export=download&id=${props.link}`}
            >
              බාගත කරගන්න
            </Button>
            <Button
              as="a"
              leftIcon={<ViewIcon />}
              variant="outline"
              colorScheme="blue"
              target="_blank"
              href={`https://drive.google.com/file/d/${props.link}/view`}
            >
              විවෘත කරන්න
            </Button>
          </Flex>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default function DownloadList() {
  return (
    <Container
      maxW={"6xl"}
      py={4}
      direction={{ base: "column", md: "column" }}
      spacing={4}
      justify={{ base: "center", md: "space-between" }}
      align={{ base: "center", md: "space-between" }}
    >
      <TabListView />
    </Container>
  );
}
