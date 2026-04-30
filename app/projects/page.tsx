import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-semibold">Projects</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <ProjectCard title="Cybersecurity" href="#" variant="cyber" />
        <ProjectCard title="Cloud" href="#" variant="cloud" />
        <ProjectCard title="Software Dev" href="#" variant="dev" />
      </div>

    </div>
  );
}