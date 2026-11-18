
"use client";

import { useEffect, useRef, useState } from "react";

const destinations = [
  {
    label: "About Me",
    description: "Personal background and introduction",
    command: "about",
    href: "/#about",
  },
  {
    label: "Projects",
    description: "Technical projects and homelab",
    command: "projects",
    href: "/#projects",
  },
  {
    label: "Experience",
    description: "Professional experience and work",
    command: "experience",
    href: "/experience",
  },
  {
    label: "Technical Skills",
    description: "Technologies and competencies",
    command: "skills",
    href: "/skills",
  },
  {
    label: "Contact",
    description: "Contact information and links",
    command: "contact",
    href: "/contact",
  },
];

export default function TerminalNav() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>
  ) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelected((prev) => (prev + 1) % destinations.length);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelected(
        (prev) =>
          (prev - 1 + destinations.length) % destinations.length
      );
    }

    if (event.key === "Home") {
      event.preventDefault();
      setSelected(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      setSelected(destinations.length - 1);
    }

    if (event.key === "Enter") {
      event.preventDefault();
      window.location.assign(destinations[selected].href);
    }

    if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <>
      {/* Terminal launcher */}
      <button
        className="terminal-launcher"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="terminal-dot" />
        {open ? "CLOSE TERMINAL" : "OPEN TERMINAL"}
        <span className="terminal-shortcut">[ ESC ]</span>
      </button>

      {/* Terminal window */}
      {open && (
        <div
          className="terminal-window"
          ref={panelRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          role="region"
          aria-label="Terminal navigation"
        >
          <div className="terminal-header">
            <div className="terminal-title">
              <span className="terminal-indicator" />
              PORTFOLIO_TERMINAL.exe
            </div>

            <button
              className="terminal-close"
              onClick={() => setOpen(false)}
              aria-label="Close terminal"
            >
              ×
            </button>
          </div>

          <div className="terminal-body">
            <div className="terminal-intro">
              <p className="green">
                INITIALIZING PORTFOLIO INTERFACE...
              </p>
              <p className="green">ACCESS GRANTED.</p>
              <br />
              <p>Welcome, visitor.</p>
              <p className="muted">
                Select a destination using your keyboard.
              </p>
            </div>

            <div className="terminal-prompt">
              <span className="green">root@portfolio:~$</span>
              <span> navigate --menu</span>
            </div>

            <div className="terminal-options">
              {destinations.map((item, index) => (
                <button
                  key={item.command}
                  className={`terminal-option ${
                    selected === index ? "selected" : ""
                  }`}
                  onMouseEnter={() => setSelected(index)}
                  onClick={() =>
                    window.location.assign(item.href)
                  }
                >
                  <span className="option-arrow">
                    {selected === index ? ">" : " "}
                  </span>

                  <span className="option-number">
                    [{String(index + 1).padStart(2, "0")}]
                  </span>

                  <span className="option-content">
                    <span className="option-label">
                      {item.label}
                    </span>
                    <span className="option-description">
                      {item.description}
                    </span>
                  </span>

                  <span className="option-command">
                    /{item.command}
                  </span>
                </button>
              ))}
            </div>

            <div className="terminal-footer">
              <p>
                <span className="green">root@portfolio:~$</span>
                <span className="cursor">_</span>
              </p>
              <p className="muted">
                ↑ ↓ NAVIGATE &nbsp; ENTER SELECT &nbsp; ESC CLOSE
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .terminal-launcher {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9998;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: #050d08;
          color: #00ff75;
          border: 1px solid #087c3b;
          border-radius: 5px;
          font-family: monospace;
          font-size: 12px;
          letter-spacing: 1px;
          cursor: pointer;
          box-shadow: 0 0 15px #00ff7520;
        }

        .terminal-launcher:hover {
          background: #0b1d10;
          box-shadow: 0 0 20px #00ff7540;
        }

        .terminal-dot,
        .terminal-indicator {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #00ff75;
          box-shadow: 0 0 8px #00ff75;
        }

        .terminal-shortcut {
          color: #548568;
          font-size: 10px;
        }

        .terminal-window {
          position: fixed;
          bottom: 82px;
          right: 24px;
          z-index: 9999;
          width: min(480px, calc(100vw - 32px));
          background: #030a06;
          border: 1px solid #087c3b;
          border-radius: 7px;
          color: #d1e8d8;
          font-family: "Courier New", monospace;
          box-shadow:
            0 0 25px #00ff7518,
            0 15px 50px #00000090;
          outline: none;
          overflow: hidden;
          animation: terminal-open 0.2s ease-out;
        }

        @keyframes terminal-open {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .terminal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: #08170d;
          border-bottom: 1px solid #174b2b;
        }

        .terminal-title {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #00ff75;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .terminal-close {
          background: none;
          border: none;
          color: #76a987;
          font-size: 23px;
          cursor: pointer;
        }

        .terminal-body {
          position: relative;
          padding: 20px;
          background-image: repeating-linear-gradient(
            transparent,
            transparent 3px,
            #00ff7505 4px
          );
        }

        .terminal-intro {
          font-size: 12px;
          line-height: 1.7;
        }

        .terminal-intro p {
          margin: 0;
        }

        .green {
          color: #00ff75;
        }

        .muted {
          color: #668473;
          font-size: 11px;
        }

        .terminal-prompt {
          margin-top: 22px;
          margin-bottom: 12px;
          font-size: 12px;
        }

        .terminal-options {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .terminal-option {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          text-align: left;
          padding: 10px 8px;
          border: 1px solid transparent;
          background: transparent;
          color: #b5d5bf;
          cursor: pointer;
          font-family: inherit;
          font-size: 12px;
        }

        .terminal-option:hover,
        .terminal-option.selected {
          background: #0b2414;
          border-color: #175b32;
        }

        .option-arrow {
          width: 10px;
          color: #00ff75;
        }

        .option-number {
          color: #598c6b;
        }

        .option-content {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        .option-label {
          color: #00ff75;
          font-weight: bold;
        }

        .option-description {
          color: #789583;
          font-size: 10px;
        }

        .option-command {
          color: #477456;
          font-size: 10px;
        }

        .terminal-footer {
          border-top: 1px solid #174b2b;
          margin-top: 18px;
          padding-top: 14px;
          font-size: 11px;
        }

        .terminal-footer p {
          margin: 5px 0;
        }

        .cursor {
          color: #00ff75;
          animation: blink 1s steps(2) infinite;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        @media (max-width: 480px) {
          .terminal-window {
            right: 16px;
            bottom: 76px;
          }

          .terminal-launcher {
            right: 16px;
            bottom: 16px;
          }

          .option-command {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .terminal-window,
          .cursor {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
