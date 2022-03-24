import Head from 'next/head'

export default function Home() {
  return (
<>
    <div className="container mx-auto px-10 mb-8 ">
        <Head>
          <title>Team Epoch</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
    
    <div className="bg-white opacity-80 shadow-lg shadow-stone-500/60 rounded-lg p-0 ml-10 mr-10  lg:p-6 pb-12 mb-8">
      <div className="ml-10 mr-10 justify-center mb-6 text-4xl font-bold text-black">We aim to have a positive impact on the world with AI</div>
      <div className="ml-10 mr-10 mb-6 text-justify text-black">We want to pave an accessible path forward into what we 
            believe will be the most disrupting field of innovation in the near and distant future. 
            We want to do this by executing the following goals:
        <li className="ml-8">To develop state-of-the-art software.</li>
        <li className="ml-8">Partner up with artists in order to do the greatest co-creating projects combining AI with art.</li>
        <li className="ml-8">To involve as many people as possible in the field of AI.</li>
        </div>
        </div>
        <div class="bg-white opacity-80 shadow-lg shadow-stone-500/60 rounded-lg aspect-w-16 aspect-h-9 mb-10 scale-90">
        <iframe width="638" 
                height="478" 
                src="https://www.youtube.com/embed/jVEV6XdJjLk" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                className="items-center scale-x-105"
                allowfullscreen
                ></iframe>
        </div>

        <div className="bg-white opacity-80 shadow-lg shadow-stone-500/60 rounded-lg p-0 ml-10 mr-10  lg:p-6 pb-12 mb-8"> 
        <div className="ml-4 mr-6 mb-6 font-bold text-4xl text-black">Who are we?</div>
        <div className="ml-4 mr-6 mb-6 text-black text-justify">We are a Dream Team of TU Delft focused on AI.  
        As Team Epoch, we compete in AI competitions all around the world. Our team currently consists of 16 
        motivated students with different study backgrounds and skills ranging from Computer Science to Technology,
         Policy and Management. Because of these diverse skill sets, we are confident in our ability to succeed.</div>
        <div className="ml-4 mr-6 mb-6 text-black text-justify">Team Epoch competes simultaneously in multiple competitions with different 
         fields such as healthcare, transportation, sports, or business. By having a broad range of topics for the 
         competitions,our team will thrive with well-trained and well-rounded AI engineers by the end of the year.</div>
         <div className="ml-4 mr-6 mb-8 text-black text-justify">By enabling students with various backgrounds to compete 
         in AI competitions we aim to actively contribute to democratizing AI. We believe in good AI and that for the future of AI 
         accessibility to AI knowledge is crucial. This not only prevents monopolistic outcomes but also helps to improve the 
         development of AI in the right direction: as a positive and useful solution to societal problems.</div>
      </div>

         <div className="bg-white opacity-80 shadow-lg shadow-stone-500/60 rounded-lg p-0  ml-10 mr-10 lg:p-6 pb-12 mb-8">
         <div className="ml-4 mr-6 mb-6 font-bold text-4xl text-black">What do we do?</div>
        <div className="ml-4 mr-6 mb-6 text-black text-justify">The AI competitions that we compete in are in the field of data science. 
        The idea of these competitions is that as long as you have access to a computer and the internet, you can participate. 
        The organizers of the competition usually provide a large dataset and the objective of the challenge. </div>
        <div className="ml-4 mr-6 mb-6 text-black text-justify">This is a real-life problem for which most of the time a guideline for the solution already exists, called the 'baseline'.
        The goal of the competition is to surpass the baseline and build a better-performing model. 
        Team Epoch aims to find new solutions for these competitions by combining already existing methods.</div>
         <div className="ml-4 mr-6 mb-6 text-black text-justify">Which competitions we do depends on different aspects like the topic, 
         the organizers, the expected approach, the given dataset, and the scale of the competition. 
         Of course, all of these should be in line with our mission statement.</div>
         </div>
</div>
    </>
  )
}

