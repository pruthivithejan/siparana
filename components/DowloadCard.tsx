import { DownloadCloudIcon, EyeIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card> & {
  grade: string;
  subject: string;
  img: string;
  description: string;
  link: string;
};

export function CardDemo({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>
          {props.grade} - {props.subject}
        </CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4 ">
          <Image
            src={`/content${props.img}.png`}
            width={200}
            height={350}
            alt={props.description}
            priority={true}
            className="rounded-md"
          />
        </div>
      </CardContent>
      <CardFooter>
        <div className="mx-auto ">
          <Link
            href={`https://drive.google.com/uc?export=download&id=${props.link}`}
          >
            <Button className="w-full">
              <DownloadCloudIcon className="mr-2 h-4 w-4 " /> බාගත කරගන්න
            </Button>
          </Link>
          <Link href={`https://drive.google.com/file/d/${props.link}/view`}>
            <Button className="w-full" variant={"secondary"}>
              <EyeIcon className="mr-2 h-4 w-4" /> විවෘත කරන්න
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
