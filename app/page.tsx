export default function Home() {
  return (
    <div className="space-y-12">

      {/* About */}
      <section>
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4 text-gray-400 max-w-2xl">
        Hi, I'm Ryan and welcome to my website! I'm currently studying Computer Science at CSUF with a concentration in Cybersecurity. Through projects like building a Home SOC Lab, setting up an Active Directory environment, and running vulnerability management testing, I've gained hands-on experience with tools such as Oracle VirtualBox, PowerShell, Azure Services, KQL, VMware, and Nessus Essentials. Alongside my studies, I've always valued teamwork and perseverance which are qualities I built over 11 years of playing baseball. The lessons I learned on the field about discipline, communication, and working toward a common goal carry over into my approach to solving technical challenges and collaborating with others in the world of technology.
          <br /><br />
          My interests include helping others with technical issues, keeping users safe and secure, and exploring new technologies. Outside of tech, I enjoy staying active at the gym, surfing, and playing men's softball with friends. I also like cooking, watching movies, and reading.
        </p>
      </section>

      {/* Highlights */}
      <section className="grid md:grid-cols-3 gap-6">

        <div className="p-6 rounded-xl border border-gray-800 bg-neutral-900/50">
          <h3 className="text-xl font-semibold mb-3">Portfolio</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Home Server Lab</li>
            <li>SOC Lab</li>
            <li>Pi Camera App</li>
          </ul>
        </div>

        <div className="p-6 rounded-xl border border-gray-800 bg-neutral-900/50">
          <h3 className="text-xl font-semibold mb-3">Career</h3>
          <p>IT Technician Intern</p>
          <p>Google IT Cert</p>
        </div>

        <div className="p-6 rounded-xl border border-gray-800 bg-neutral-900/50">
          <h3 className="text-xl font-semibold mb-3">Education</h3>
          <p>CSUF - Computer Science</p>
        </div>

      </section>

    </div>
  );
}
