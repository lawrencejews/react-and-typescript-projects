import * as React from 'react';

/**
 * Things you could try:
 *
 * JSX.Element;
 * JSX.Element | JSX.Element[]; 
* React.ReactNode;
 * React.ReactChildren;
 * React.ReactChild[];
 */

type BoxProps = { children: React.ReactNode; style?:React.CSSProperties}; // Accepts everything.

 const Box = ({ children }: BoxProps) => {
   return (
     <section style={{ padding: "1em", border: "5px solid purple", ...style}}>
       {children}
     </section>
   );
 };
 
 export default function Application() {
   return (
     <Box>
       Just a string.
       <p>Some HTML that is not nested.</p>
       <Box style={{borderColor: "red"}}>
         <h2>Another React component with one child.</h2>
       </Box>
       <Box>
         <h2>A nested React component with two children.</h2>
         <p>The second child.</p>
       </Box>
     </Box>
   );
 }
 