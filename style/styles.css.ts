import { style } from '@vanilla-extract/css'

export const page = {
  container: style({
    margin: 0,
    padding: 0,
  }),
}

export const homeHero = {
  container: style({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'black', ///////////////////////////////////////////
    color: '#ddd', ////////////////////////////////////
    margin: 0,
    padding: 0,
  }),
  heading: style({
    fontSize: '10vw',
    fontFamily: '"Kelly Slab", cursive',
  }),
}
