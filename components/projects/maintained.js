import ProjectCard from "./project_card"

function Maintained() {
    return (
      <div id="maintained" className="max-w-7xl mx-auto items-center">
            <h2 className="text-xl font-bold text-[#0B4870] underline underline-offset-8 decoration-[#FFA62B] text-center pt-12">
                Maintained Projects
            </h2>
            <div className="grid justify-items-center mx-4 my-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <ProjectCard title={'Simulate'} description={'A collection of simulations and visualizations for all sorts of stuff (Majorly Algorithmic or Mathematical)'} github={'https://github.com/builtree/simulate'} deployment={'https://www.builtree.org/simulate/web/'} image={'https://raw.githubusercontent.com/builtree/assets/simulate/documentation/SimulateTitle.svg'}/>
                <ProjectCard title={'Handwrite'} description={'Handwrite generates a custom font based on your handwriting sample.'} github={'https://github.com/builtree/handwrite'} deployment={'https://builtree.org/handwrite-web'} image={'https://raw.githubusercontent.com/builtree/handwrite-web/dev/public/logo512.png'}/>
            </div>
        </div>
        
  )
}

export default Maintained