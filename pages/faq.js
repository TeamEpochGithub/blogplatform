import Head from 'next/head'
import React, { useState } from 'react';
import { Questions} from '../components';
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

export default function Home() {

  const [isActive, setIsActive] = useState(false);
  const accordionData = [
    {
      title: 'Who are we?',
      content: `We are a Dream Team of TU Delft focused on AI.  
      As Team Epoch, we compete in AI competitions all around the world. Our team currently consists of 16 
      motivated students with different study backgrounds and skills ranging from Computer Science to Technology,
       Policy and Management. Because of these diverse skill sets, we are confident in our ability to succeed.
       Team Epoch competes simultaneously in multiple competitions with different 
         fields such as healthcare, transportation, sports, or business. By having a broad range of topics for the 
         competitions,our team will thrive with well-trained and well-rounded AI engineers by the end of the year.
         By enabling students with various backgrounds to compete 
         in AI competitions we aim to actively contribute to democratizing AI. We believe in good AI and that for the future of AI 
         accessibility to AI knowledge is crucial. This not only prevents monopolistic outcomes but also helps to improve the 
         development of AI in the right direction: as a positive and useful solution to societal problems.`
    },
    {
        title: 'What do we do?',
        content: `The AI competitions that we compete in are in the field of data science. 
        The idea of these competitions is that as long as you have access to a computer and the internet, you can participate. 
        The organizers of the competition usually provide a large dataset and the objective of the challenge.
        This is a real-life problem for which most of the time a guideline for the solution already exists, called the 'baseline'.
        The goal of the competition is to surpass the baseline and build a better-performing model. 
        Team Epoch aims to find new solutions for these competitions by combining already existing methods.
        Which competitions we do depends on different aspects like the topic, 
         the organizers, the expected approach, the given dataset, and the scale of the competition. 
         Of course, all of these should be in line with our mission statement.`
    },
    {
        title: 'Why are we doing this?',
        content: `We aim to have a positive impact on the world with AI. We want to pave an accessible path forward into what we 
        believe will be the most disrupting field of innovation in the near and distant future. 
        We want to do this by executing the following goals: develop state-of-the-art software, partner up with artists in order to do the 
        greatest co-creating projects combining AI with art and to involve as many people as possible in the field of AI.
        `
    },
    {
        title: 'What is AI?',
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
        reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
        quaerat iure quos dolorum accusantium ducimus in illum vero commodi
        pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
        quidem maiores doloremque est numquam praesentium eos voluptatem amet!
        Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'How to join us',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    },    
    {
        title: 'How to contribute',
        content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
        quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
        dolor ut sequi minus iste? Quas?`
    }
  ];

  return (
<>
    <div className="container mx-auto px-10 mb-8 mt-20">
        <Head>
          <title>Epoch Blog Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
    
    <div className="text-center mt-24 mb-8 text-xl justify-center font-bold text-white" style={{ color: 'white', fontSize: 60 }}>
        <Typist>
           Do you have any
          <span className="transition duration-500 text-transparent
                    bg-clip-text 
                    bg-gradient-to-r from-emerald-300 
                    to-blue-400 font-semibold">{" questions "}</span>
         for us?
          </Typist>
    </div>
    <div className="text-center mb-8 text-lg justify-center font-semibold text-white">
        Click on the following topics to know more!
    </div>
        <div className="mb-2 text-xl text-white  ">
            {accordionData.map(({ title, content }) => (
            <Questions title={title} content={content} />
            ))}
        </div>
       <div className="text-center mt-10 font-bold">
            <button type="button" 
                    className="transition duration-500  
                        bg-gradient-to-r from-emerald-500 
                            to-blue-500 hover:scale-105
                            text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                    <a href="mailto:tgomezmena211002@gmail.com">Let us know if you have any other questions </a>        
            </button>
            </div>
      </div>
    </>
  )
}

