import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="space-y-12">

   
      {/* About */}
      <section id="about">
        <h2 className="text-3xl font-semibold">About</h2>
        <p className="mt-4 text-gray-400 max-w-2xl">
          I'm a Computer Science student at California State University, Fullerton, concentrating in Cybersecurity. My interests sit at the intersection of cybersecurity, infrastructure, networking, cloud computing, and automation. I enjoy building hands-on systems to understand how technology works from the network and operating system level through applications and security.
          <br /><br />
          Much of my technical experience comes from building hands-on environments outside the classroom. I've worked with virtualized systems, cloud security environments, network segmentation, Linux, Docker, Active Directory, vulnerability management, and security monitoring.
          <br /><br />

        </p>

        <h3 className="text-xl font-semibold">Beyond Technology</h3>
        <p className="mt-4 text-gray-400 max-w-2xl">
        My interests include helping others with technical issues, keeping users safe and secure, and exploring new technologies. Outside of tech, I enjoy staying active at the gym, surfing, and playing men's softball with friends. I also like cooking, watching movies, and reading.
        </p>
        <br></br>
        <p><a className="text-gray-400 underline" href="https://www.fchornets.com/sports/bsb/2023-24/releases/20240501oroaju">2024 Season 2nd Team All-OEC honor at Fullerton College</a></p>

      </section>

      {/* Focus */}
      <section id="focus">
        <h2 className="text-3xl font-semibold">Focus</h2>

        <h3 className="text-xl text-white font-semibold">Cybersecurity</h3>
        <p className="mt-4 text-gray-400 max-w-2xl">
          Security monitoring, vulnerability management, system security, identity, and network security.
        </p>

        <h3 className="text-xl text-white font-semibold">Infrastructure</h3>
        <p className="mt-4 text-gray-400 max-w-2xl">
          Linux, virtualization, networking, containers, servers, and self-hosted environments.
        </p>

        <h3 className="text-xl text-white font-semibold">Cloud</h3>
        <p className="mt-4 text-gray-400 max-w-2xl">
          Cloud infrastructure, cloud security, logging, monitoring, and Azure.
        </p>

        <h3 className="text-xl text-white font-semibold">Automation & Development</h3>
        <p className="mt-4 text-gray-400 max-w-2xl">
          Python, PowerShell, APIs, databases, automation workflows, and application development.
        </p>
      </section>

      <section id="projects">

        {/* 
        <div className="space-y-8">
      
          <h1 className="text-3xl font-semibold">Featured Projects</h1>
        
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard title="Home Lab" href="https://github.com/Ryan4012/HomeLab" variant="it" description={"Bio here"} />
            <ProjectCard title="Client SaaS" href="https://github.com/Ryan4012/Auto-Client" variant="dev" description={"Bio here"} />
            <ProjectCard title="Home SOC Lab" href="https://github.com/Ryan4012/AzureHomeSOCLab" variant="cloud" description={"Bio here"} />
            <ProjectCard title="Active Directory Enviornment" href="https://github.com/Ryan4012/ActiveDirectoryLab" variant="it" description={"Bio here"} />
            <ProjectCard title="Vulnerability Management Lab" href="https://github.com/Ryan4012/VulnerabilityManagementLab" variant="cyber" description={"Bio here"} />

          </div>
        </div>
        */}

        <div className="p-6 rounded-xl border border-gray-800 bg-neutral-900/50">
          <h1 className="text-3xl font-semibold mb-3 text-center">Featured Projects</h1>
          
          <div className="space-y-4 text-gray-300">
            <div className="space-y-2 [&>p]:text-sm [&>p]:text-gray-400">

              <div className="space-y-8">
                    
                <div className="grid md:grid-cols-2 gap-6">
                  <ProjectCard title="Home Lab" href="https://github.com/Ryan4012/HomeLab" variant="it" description={"Designed and operated a virtualized, segmented home infrastructure environment using Proxmox, OpenWrt, Docker, and Raspberry Pi."} subdescription={"Proxmox • Linux • VLANs • Docker • Tailscale"} click={"Veiw Documentation"} />
                  <ProjectCard title="Active Directory Enviornment" href="https://github.com/Ryan4012/ActiveDirectoryLab" variant="it" description={"Built and administered a virtualized Windows domain environment to practice identity management, authentication, Group Policy, DNS, and Windows infrastructure administration."} subdescription={"Windows Server • Active Directory • Group Policy • DNS • VirtualBox"} click={"Veiw Documentation"} />                  
                  <ProjectCard title="Automated Booking & Client Management Platform" href="https://github.com/Ryan4012/Auto-Client" variant="dev" description={"Designed and operated a self-hosted client management and automation platform using n8n, PostgreSQL, Directus, and Docker to automate booking workflows, client records, and business processes."} subdescription={"n8n • PostgreSQL • Directus • Docker • Cloudflare • Tailscale"} click={"Veiw Documentation"} />
                  <ProjectCard title="Home SOC Lab" href="https://github.com/Ryan4012/AzureHomeSOCLab" variant="cloud" description={"Built a cloud-based Security Operations Center simulation using Microsoft Sentinel and Azure to collect, analyze, and investigate security telemetry from a monitored Windows environment."} subdescription={"Azure • Microsoft Sentinel • KQL • Log Analytics • Windows"} click={"Veiw Documentation"} />
                  <ProjectCard title="Vulnerability Management Lab" href="https://github.com/Ryan4012/VulnerabilityManagementLab" variant="cyber" description={"Built a vulnerability management environment to identify, assess, and remediate security vulnerabilities across virtualized systems using Nessus and supporting security tools."} subdescription={"Nessus • Linux • Windows • Vulnerability Management • Virtualization"} click={"Veiw Documentation"} />

                </div>
              </div>

            </div>
          </div>
        </div>


      </section>

     

      {/* Highlights */}
      <section id="experience" className="space-y-8">

        <h1 className="text-3xl font-semibold my-8">Experience</h1>

        <div className="p-6 rounded-xl border border-gray-800 bg-neutral-900/50">
          <h3 className="text-xl font-semibold mb-3">Career</h3>
          <ul className="space-y-2 text-gray-300">
            <p className="text-xl text-white">IT Technician Intern Role for Burgi Technologies</p>
            <li>Provide IT support across multiple organizations, including hardware deployment, troubleshooting, device lifecycle management, inventory, procurement, and documentation.</li>
            
            <p className="text-xl text-white">University Data Center Student Assistant for CSUF</p>
            <li>Supported day-to-day data center operations through infrastructure monitoring, server deployment and decommissioning, asset management, structured cabling, ticketing, and access-control procedures.</li>
          </ul>
        </div>

        

      </section>

      <section id="education">

        <h1 className="text-3xl font-semibold my-8">Education & Development</h1>


        <div className="p-6 rounded-xl border border-gray-800 bg-neutral-900/50">
          <h2>Education</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Bachelor of Science: Computer Science - Cybersecurity Concentration from CSUF [August 2024 - December 2026]</li>
            <li>Associate of Arts: IDS Social Behavior and Self Development from Fullerton College [August 2022 - June 2024]</li>
          </ul>

          <br></br>

          <h2>Technical Development</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Offensive Security Society at CSUF - Applied Independent Study through Workshops and Labs</li>
            <li>CompTIA A+, Security+, and Network+ Curriculum from Professor Messer</li>
          </ul>

          <br></br>
          <h2>Certifications</h2>
          <ul className="space-y-2 text-gray-300">
            <li>...</li>
          </ul>

        </div>

      </section>

      {/* 
      <section id="skills">

      <h1 className="text-3xl font-semibold my-8">Skills</h1>

        <div className="p-6 rounded-xl border border-gray-800 bg-neutral-900/50">
          <h3 className="text-xl font-semibold mb-3">Tools & Technologies</h3>
          <ul className="space-y-2 text-gray-300">
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
          </ul>
        </div>

      </section>
      */}

      

    </div>
    
  );
}
