import DeploymentLogo from "../deployment_logo"
import GitHubLogo from "../github_logo"

function ProjectCard({image, title, description, github, deployment}) {
  return (
      <div className="w-full h-min max-w-xs group bg-white rounded-lg border border-gray-200 shadow-md py-5">
        <div className="flex flex-col justify-between items-center group-hover:mx-8">
          <img className="mb-3 py-3 object-contain w-24 h-24 group-hover:w-12 group-hover:h-12 rounded-full shadow-lg" src={image} alt="Bonnie image" />
          <h3 className="mb-1 mx-auto text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <div className="hidden group-hover:flex group-hover:flex-col items-center px-5">
          <p className="text-sm text-center font-medium mb-4">{description}</p>
          <div className="flex flex-row justify-center gap-4">
            <GitHubLogo className="fill-slate-500 hover:fill-black" onClick={() => window.open(github, "_blank")}/>
            <DeploymentLogo className="fill-slate-500 hover:fill-black" onClick={() => window.open(deployment, "_blank")}/>
          </div>
        </div>
      </div>
  )
}

export default ProjectCard