import { Avatar, Card, CardBody, CardFooter, CardHeader, Chip, Divider } from "@nextui-org/react";
import { IconName } from 'GlobalTypes';
import BiochemistryIcons from '../icons/BiochemistryIcons';

const Library = () => {
  const list: {
    title: string,
    icon: IconName,
    stream: string,
    tutor: string
  }[] = [
      {
        title: "Science",
        icon: 'Bacteria',
        stream: "Grade 06",
        tutor: "Isuru Prabhashana"
      },
      {
        title: "Science",
        icon: 'Carbon-Dioxide',
        stream: "Grade 07",
        tutor: "Isuru Prabhashana"
      },
      {
        title: "Science",
        icon: 'Book',
        stream: "Grade 08",
        tutor: "Isuru Prabhashana"
      },
      {
        title: "Science",
        icon: 'Chromosomes',
        stream: "Grade 09",
        tutor: "Isuru Prabhashana"
      },
      {
        title: "Science",
        icon: 'Cloning',
        stream: "Grade 10",
        tutor: "Isuru Prabhashana"
      },
      {
        title: "Science",
        icon: 'Experiment',
        stream: "Grade 11",
        tutor: "Isuru Prabhashana"
      },
      {
        title: "Biology",
        icon: 'Bacteria',
        stream: "Advaced Level",
        tutor: "Isuru Prabhashana"
      },
      {
        title: "ICT",
        icon: 'Theory',
        stream: "Advaced Level",
        tutor: "Danushka Madushan"
      },
      {
        title: "Chemistry",
        icon: 'Flask',
        stream: "Advaced Level",
        tutor: "Isuru Prabhashana"
      },
      {
        title: "Econ",
        icon: 'Lab',
        stream: "Advaced Level",
        tutor: "Isuru Prabhashana"
      },
    ];

  return (
    <div className="gap-4 flex items-center justify-center flex-wrap">
      {list.map(({ title, icon, stream, tutor }, index) => (
        <Card className='w-fit' shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardHeader>
            <Chip color="success" variant="bordered" radius='sm'>{stream}</Chip>
          </CardHeader>
          <CardBody className="flex items-center p-2">
            <BiochemistryIcons iconName={icon} size={80} uid={Math.random().toString()}/>
          </CardBody>
          <CardFooter className="text-small flex-col gap-2">
            <Chip color="primary" size='md' variant="flat">{title}</Chip>
            <Divider />
            <div className='flex items-center gap-x-2'>
              <Avatar isBordered size='sm' color="default" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <span className='text-sm'>{tutor}</span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default Library
