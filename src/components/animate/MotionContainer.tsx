import { m } from 'framer-motion';
// @mui
import { Box } from '@mui/material';
//
import { varContainer } from './variants';

// ----------------------------------------------------------------------

interface IMotionContainerProps {
  action?: boolean;
  animate?: boolean;
  children?: React.ReactNode;
  [x: string]: any;
}

export const MotionContainer = ({
  animate,
  action = false,
  children,
  ...other
}: IMotionContainerProps) => {
  if (action) {
    return (
      <Box
        component={m.div}
        initial={false}
        animate={animate ? 'animate' : 'exit'}
        variants={varContainer()}
        {...other}
      >
        {children}
      </Box>
    );
  }

  return (
    <Box
      component={m.div}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={varContainer()}
      {...other}
    >
      {children}
    </Box>
  );
};
