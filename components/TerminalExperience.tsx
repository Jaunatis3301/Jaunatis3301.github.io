"use client";

import { Ascii, type Piece } from "ascii.rest/react";
import { bootLog, scramble } from "ascii.rest/pieces";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";

type Stage = "boot" | "login" | "access" | "shell";

const fastBoot: Piece = {
  meta: { ...bootLog.meta, name: "jaunrcy boot" },
  default: () => {
    const frame = bootLog.default();
    return (time, environment) => frame(time * 3 + 0.25, environment);
  },
};

const initialLines = ["Welcome to the other side. Type help to begin."];

export default function TerminalExperience() {
  const router = useRouter();
  const [stage, setStage] = useState<Stage>("boot");
  const [loginStep, setLoginStep] = useState<"username" | "password">("username");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [command, setCommand] = useState("");
  const [lines, setLines] = useState<string[]>(initialLines);
  const loginInputRef = useRef<HTMLInputElement>(null);
  const commandRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stage !== "boot" && stage !== "access") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(
      () => setStage(stage === "boot" ? "login" : "shell"),
      reduceMotion ? 0 : stage === "boot" ? 4600 : 1900,
    );
    return () => window.clearTimeout(timer);
  }, [stage]);

  useEffect(() => {
    if (stage === "login") loginInputRef.current?.focus();
    if (stage === "shell") commandRef.current?.focus();
  }, [stage, loginStep]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") router.push("/");
    };
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, [router]);

  useEffect(() => {
    outputRef.current?.scrollTo({ top: outputRef.current.scrollHeight, behavior: "smooth" });
  }, [lines]);

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loginStep === "username") {
      if (!username.trim()) return;
      setLoginError("");
      setLoginStep("password");
      return;
    }
    if (username.trim().toLowerCase() === "visitor" && password.toLowerCase() === "moon") {
      setLoginError("");
      setPassword("");
      setStage("access");
      return;
    }
    setLoginError("Login incorrect. Try the hint, then enter the account again.");
    setUsername("");
    setPassword("");
    setLoginStep("username");
  };

  const submitCommand = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = command.trim();
    if (!input) return;
    setCommand("");
    const normalized = input.toLowerCase().replace(/\s+/g, " ");
    if (normalized === "clear") {
      setLines([]);
      return;
    }
    if (normalized === "exit") {
      router.push("/");
      return;
    }
    if (normalized === "reboot") {
      setLines(initialLines);
      setLoginStep("username");
      setUsername("");
      setPassword("");
      setLoginError("");
      setStage("boot");
      return;
    }
    const responses: Record<string, string> = {
      help: "help · ls · whoami · clear · reboot · exit\nMore commands will appear here later.",
      ls: "No files here yet.",
      whoami: "visitor — welcome to the other side of jaunrcy.",
    };
    setLines((current) => [
      ...current,
      `visitor@jaunrcy:~$ ${input}`,
      responses[normalized] ?? `Command not found: ${input}. Type help for available commands.`,
    ]);
    commandRef.current?.focus();
  };

  return (
    <div className="terminal-page">
      <main id="main" className="terminal-main">
        <Link href="/" className="focus-ring terminal-return">
          exit ↗
        </Link>
        <div className="terminal-screen">
          {stage === "boot" && (
            <section aria-label="Simulated boot sequence" className="terminal-content">
              <p className="terminal-status">
                <span>[boot]</span> initializing jaunrcy / the other side
              </p>
              <div className="terminal-boot-art">
                <Ascii
                  piece={fastBoot}
                  label="Animated startup log ending at a login prompt"
                  style={{ lineHeight: 1.15, margin: 0 }}
                />
              </div>
              <button className="focus-ring terminal-action" onClick={() => setStage("login")}>
                skip boot ↵
              </button>
            </section>
          )}
          {stage !== "boot" && (
            <section aria-label="Terminal session" className="terminal-content terminal-shell">
              <p className="terminal-status">
                <span>[ OK ]</span> system ready
              </p>
              <p className="terminal-tty">jaunrcy tty01</p>
              {stage === "login" && (
                <>
                  <p className="terminal-muted">Fictional login. Do not enter a real password.</p>
                  {loginStep === "password" && (
                    <p className="terminal-login-history">
                      jaunrcy login: <span>{username}</span>
                    </p>
                  )}
                  <form onSubmit={login} autoComplete="off" className="terminal-login-form">
                    <label htmlFor="terminal-login-input">
                      {loginStep === "username" ? "jaunrcy login:" : "Password:"}
                    </label>
                    <input
                      key={loginStep}
                      id="terminal-login-input"
                      ref={loginInputRef}
                      className="terminal-input"
                      type={loginStep === "password" ? "password" : "text"}
                      value={loginStep === "password" ? password : username}
                      onChange={(event) =>
                        loginStep === "password"
                          ? setPassword(event.target.value)
                          : setUsername(event.target.value)
                      }
                      autoComplete="off"
                      autoCapitalize="off"
                      spellCheck={false}
                      required
                    />
                    <button
                      className="focus-ring terminal-submit"
                      type="submit"
                      aria-label="Continue"
                    >
                      ↵
                    </button>
                  </form>
                  <p role="status" aria-live="polite" className="terminal-error">
                    {loginError}
                  </p>
                  <button
                    className="focus-ring terminal-action terminal-hint-toggle"
                    type="button"
                    onClick={() => setShowHint((value) => !value)}
                    aria-expanded={showHint}
                  >
                    {showHint ? "hide hint −" : "need a hint? +"}
                  </button>
                  {showHint && (
                    <p className="terminal-muted terminal-hint">
                      account: visitor / passphrase: moon
                    </p>
                  )}
                </>
              )}
              {(stage === "access" || stage === "shell") && (
                <div className="terminal-login-history">
                  <p>
                    jaunrcy login: <span>{username}</span>
                  </p>
                  <p>Password: ••••</p>
                  <p className="terminal-status">
                    <span>[ OK ]</span> credentials accepted
                  </p>
                </div>
              )}
              {stage === "access" && (
                <div className="terminal-access" aria-label="Access granted">
                  <Ascii
                    piece={scramble}
                    options={{ phrases: ["ACCESS GRANTED"] }}
                    label="Access granted text resolving from scrambled characters"
                    style={{ lineHeight: 1.2, margin: 0 }}
                  />
                </div>
              )}
              {stage === "shell" && (
                <>
                  <p className="terminal-last-login">Last login: just now on jaunrcy tty01</p>
                  <div ref={outputRef} className="terminal-output" role="log" aria-live="polite">
                    {lines.map((line, index) => (
                      <p key={index} className={line.startsWith("visitor@") ? "terminal-echo" : ""}>
                        {line.startsWith("visitor@") ? (
                          <>
                            <span>visitor@jaunrcy</span> <em>~</em> ❯{" "}
                            {line.slice("visitor@jaunrcy:~$ ".length)}
                          </>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                  <div className="terminal-prompt-identity" aria-hidden="true">
                    <span className="terminal-prompt__rail">╭─</span>
                    <span className="terminal-prompt__user">visitor@jaunrcy</span>
                    <span className="terminal-prompt__in"> in </span>
                    <span className="terminal-prompt__path">~</span>
                  </div>
                  <form onSubmit={submitCommand} className="terminal-command-form">
                    <label htmlFor="terminal-command" className="terminal-prompt__arrow">
                      ╰─❯
                    </label>
                    <input
                      id="terminal-command"
                      ref={commandRef}
                      className="terminal-command-input"
                      value={command}
                      onChange={(event) => setCommand(event.target.value)}
                      autoComplete="off"
                      autoCapitalize="off"
                      spellCheck={false}
                      aria-label="Terminal command"
                    />
                    <button className="focus-ring terminal-command-submit" type="submit">
                      ↵
                    </button>
                  </form>
                </>
              )}
            </section>
          )}
        </div>
        <p className="terminal-footnote">
          simulated session · no commands run on your computer · esc to exit
        </p>
      </main>
    </div>
  );
}
