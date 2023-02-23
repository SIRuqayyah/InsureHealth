import React from 'react';
import SlideText from './SlideText';

export default function Text(){
    const slides = [
      {
        text: 'Trusting insure health has allowed me the opportunity to be relaxed anytime i changed my home location or office location due to the availability of my records, the fact that i can pull my records anytime anywhere just shows how competent they are.',
        description: 'Samuel John',
      },
      {
        text: 'Insure Health has given me access to medical care through their competent hands regardless of the state i am in and at any point i have needed it, i trust them to always come through for me and they do.',
        description: 'Shola C.',
      },
      {
        text: 'My family and i have benefited immensely from insure health, i do not regret hoping on the plan at any time and i will continue to recommend it to all my friends who have families too because of the tremendous help they have been to us.',
        description: 'Pascal',
      },
      {
        text: "With insure health's flexible payment plan, healthcare has continued to remain accessible for me at every point i needed it.",
        description: 'Judith Audu',
      },
    ];
  
    return (
      <div>
        <SlideText slides={slides} />
      </div>
    );
  }
  