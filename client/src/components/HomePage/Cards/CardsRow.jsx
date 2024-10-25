import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AboutUsCard from './Card';

export default function AboutUsCards() {
  const TheCardInfo = [
    {
      imageSrc: './assets/icons/user.svg',
      title: "The number of final people in the vocabulary",
      num: 0,
    },
    {
      imageSrc: './assets/icons/group.svg',
      title: "Number of groups missing members",
      num: 0,
    },
    {
      imageSrc: './assets/icons/target.svg',
      title: "Points are awarded based on the time taken to complete each event",
      num: "NAvil",
    },
    {
      imageSrc: './assets/icons/prize.svg',
      title: "Both teams and individuals will receive valuable prizes",
      num: "NAvil",
    },
  ];

  return (
    <div className="mt-20 md:mt-96 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-9 mx-10">
        {TheCardInfo.map((ele, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true, 
            threshold: 0.1, 
          });

          const cardProps = {
            initial: { opacity: 0, y: 20 },
            animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
            transition: { duration: 0.5, delay: index * 0.1 },
          };

          return (
            <motion.div ref={ref} key={index} {...cardProps}>
              <AboutUsCard
                imagesrc={ele.imageSrc}
                title={ele.title}
                dis={isNaN(ele.num) ? undefined : ele.num}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
