import Image from 'next/image';

export default async function Index() {
  return (
    <div className="grid grid-cols-6 grid-rows-5 gap-8">
      <div></div>
      <div className="col-span-4 text-5xl place-self-center">
        <h1>Welcome!</h1>
      </div>
      <div></div>

      <div></div>
      <div className="col-span-2 row-span-4 text-justify">
        <p>
          Hello! I'm Ryan Cox, a full-stack software developer based out of Northampton, MA, USA.
        </p>
        <br></br>
        <p>
          I've been fortunate to work on some really interesting software in my career so far. Some of the coolest projects I've worked on have been:
          <br></br>
          <br></br>
            - Chuckulator: A warehouse simulator that allowed our customers to create, view, automate, and interact with fleets of emulated robots in real-time via a web UI.
          <br></br>
          <br></br>
            - <a href="https://www.air-worldwide.com/software-solutions/Touchstone">Touchstone</a>: An underwriting risk management platform that assessed exposure to extreme events like earthquakes, hurricanes, floods, wildfires, climate change, and much more.
          <br></br>
          <br></br>
            - Check out my <a href="/resume">resume</a> for a full list of my work
        </p>
      </div>
      <div className="col-span-2 row-span-4">
        <Image 
          src="/me_and_t.jpg" 
          alt="A photo of me (left) at the Perlan Museum in Reykjavik, Iceland"
          height={500}
          width={500}
          className='object-fill'></Image>
      </div>
      <div></div>
    </div>
  )
}