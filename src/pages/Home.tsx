import { Card, CardHeader, CardBody, Image, Chip, CardFooter } from '@nextui-org/react'
import { useNavigate } from 'react-router'
import VerifiedIcon from '../icons/VerifiedIcon'

const Grades: {
  name: string,
  link: `/${string}`,
  langs: {
    sin: boolean,
    eng: boolean
  }
}[] = [
    {
      name: 'Advanced Level (AL)',
      link: '/grade',
      langs: {
        sin: true,
        eng: true
      }
    },
    {
      name: 'Ordinary Level (OL)',
      link: '/grade',
      langs: {
        sin: true,
        eng: true
      }
    },
    {
      name: 'Grade 13',
      link: '/grade',
      langs: {
        sin: true,
        eng: true
      }
    },
    {
      name: 'Grade 12',
      link: '/grade',
      langs: {
        sin: true,
        eng: true
      }
    },
    {
      name: 'Grade 11',
      link: '/grade',
      langs: {
        sin: true,
        eng: true
      }
    },
    {
      name: 'Grade 10',
      link: '/grade',
      langs: {
        sin: true,
        eng: true
      }
    },
    {
      name: 'Grade 09',
      link: '/grade',
      langs: {
        sin: true,
        eng: true
      }
    },
    {
      name: 'Grade 08',
      link: '/grade',
      langs: {
        sin: true,
        eng: true
      }
    },
    {
      name: 'Grade 07',
      link: '/grade',
      langs: {
        sin: true,
        eng: true
      }
    },
    {
      name: 'Grade 06',
      link: '/grade',
      langs: {
        sin: true,
        eng: true
      }
    },
    {
      name: 'Grade 05',
      link: '/grade',
      langs: {
        sin: true,
        eng: false
      }
    },
    {
      name: 'Grade 04',
      link: '/grade',
      langs: {
        sin: true,
        eng: false
      }
    },
    {
      name: 'Grade 03',
      link: '/grade',
      langs: {
        sin: true,
        eng: false
      }
    },
    {
      name: 'Grade 02',
      link: '/grade',
      langs: {
        sin: true,
        eng: false
      }
    },
    {
      name: 'Grade 01',
      link: '/grade',
      langs: {
        sin: true,
        eng: false
      }
    }
  ]

const Home = () => {
  const Navigate = useNavigate()

  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {
        Grades.map(({ name, link, langs: { sin, eng } }) => {
          return (
            <Card key={name + link} isPressable onPress={() => Navigate(link)} className="py-2">
              <CardHeader className="px-4 pb-0 pt-2 flex justify-between">
                <div className='flex flex-col items-start'>
                  <span className="text-xl font-light">{name}</span>
                </div>
                <VerifiedIcon size={25} />
              </CardHeader>
              <CardBody className="overflow-visible pt-2 pb-0">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                />
              </CardBody>
              <CardFooter>
                <div className='flex gap-x-2'>
                  {
                    sin && <Chip color="success" variant="dot" radius='md'>SIN</Chip>
                  }
                  {
                    eng && <Chip color="success" variant="dot" radius='md'>ENG</Chip>
                  }  
                </div>
              </CardFooter>
            </Card>
          )
        })
      }
    </div>
  )
}

export default Home
