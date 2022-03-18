/* eslint-disable sort-keys-fix/sort-keys-fix */
import { style } from '@vanilla-extract/css';
import { vars } from './vars.css';

export const RADIO_SIZE = 32;

export const radio = style({
  backgroundColor: 'rgba(255, 255, 255, 0.32)',
  borderRadius: 16,
  height: RADIO_SIZE,
  outline: 'none',
  position: 'relative',
  width: RADIO_SIZE,
  selectors: {
    // '&:hover::before': {
    //   transform: 'scale(1)',
    //   vars: {
    //     '--color': 'rgba(255, 255, 255, 0.32)',
    //   },
    // },
    // '&::before': {
    //   content: "''",
    //   borderRadius: '999px',
    //   display: 'block',
    //   height: `${RADIO_SIZE + 4}px`,
    //   margin: '-2px 0 0 -2px',
    //   pointerEvents: 'none',
    //   width: `${RADIO_SIZE + 4}px`,
    //   transform: 'scale(0.8)',
    //   boxShadow: '0 0 0 2px var(--color)',
    //   transition: 'all 133ms linear',
    //   vars: {
    //     '--color': 'transparent',
    //   },
    // },
    // '&[data-state=checked]::before': {
    //   transform: 'scale(1)',
    //   boxShadow: '0 0 0 3px white',
    //   transition: 'all 100ms ease',
    // },
    '&::after': {
      content: 'attr(data-label)',
      alignItems: 'center',
      color: 'white',
      display: 'flex',
      height: '100%',
      inset: 0,
      justifyContent: 'center',
      position: 'absolute',
      width: '100%',
    },
  },
});

export const ring = style({
  position: 'absolute',
  top: -2,
  left: -2,
  borderRadius: vars.radii.round,
  boxShadow: `0 0 0 2px ${vars.colors.white100}`,
  height: `${RADIO_SIZE + 4}px`,

  pointerEvents: 'none',
  width: `${RADIO_SIZE + 4}px`,
  zIndex: 1,
});
