import { Box, BoxProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FC, ReactElement } from 'react';
import { InView } from 'react-intersection-observer';

const transitionVariant = {
  fadeOut: { opacity: 0, y: -10 },
  fadeIn: { opacity: 1, y: 0 },
};

const Card: FC<BoxProps> = ({ children, ...restProps }) => {
  return (
    <InView triggerOnce threshold={0.2}>
      {({ inView, ref }): ReactElement => (
        <motion.div
          ref={ref}
          variants={transitionVariant}
          initial="fadeOut"
          animate={inView ? 'fadeIn' : 'fadeOut'}
          transition={{ ease: 'easeInOut', duration: 1.2 }}
        >
          <Box
            bg="white"
            border="1px solid lightgray"
            mb="4"
            borderRadius="3px"
            p={{
              base: 5,
              md: '10',
            }}
            _hover={{
              border: '1px solid black',
            }}
            transition="0.5s ease-in"
            {...restProps}
          >
            {children}
          </Box>
        </motion.div>
      )}
    </InView>
  );
};

export default Card;
