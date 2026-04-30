type Props = {
    title: string;
    href: string;
    variant: "cyber" | "cloud" | "dev";
  };
  
  export default function ProjectCard({ title, href, variant }: Props) {
    
    const styles = {
      cyber: "border-red-500 hover:shadow-red-500/20",
      cloud: "border-blue-400 hover:shadow-blue-400/20",
      dev: "border-green-500 hover:shadow-green-500/20",
    };
  
    return (
      <a
        href={href}
        className={`p-6 rounded-xl border transition hover:scale-[1.02] ${styles[variant]}`}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
      </a>
    );
  }