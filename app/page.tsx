export default async function Index() {
  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-8">
      <div></div>
      <div className="col-span-3 text-center mt-3.5 text-5xl">
        <h1>Welcome!</h1>
      </div>
      <div></div>

      <div></div>
      <div className="col-span-2 row-span-4 text-justify">
        <p>
          Hello! I'm Ryan Cox, a full-stack software developer based out of Northampton, MA, USA. 
        </p>
      </div>
      <div className="row-span-4">
        <img className="object-contain" src="https://avatars.githubusercontent.com/u/67571680?v=4"></img>
      </div>
      <div></div>
    </div>
  )
}