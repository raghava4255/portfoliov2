import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CommandSequence {
  command: string;
  output: string[];
}

const COMMANDS: CommandSequence[] = [
  {
    command: 'dotnet publish -c Release -o ./publish',
    output: [
      'MSBuild version 17.8.0 for .NET',
      '  Determining projects to restore...',
      '  Restored WebAPI.csproj (in 142 ms).',
      '  WebAPI -> ./bin/Release/net8.0/WebAPI.dll',
      '  WebAPI -> ./publish/',
      'Successfully published application in 2.45s.'
    ]
  },
  {
    command: 'docker build -t fullstack-api:latest .',
    output: [
      'Sending build context to Docker daemon  42.5MB',
      'Step 1/8 : FROM mcr.microsoft.com/dotnet/aspnet:8.0',
      ' ---> e268c8b5c907',
      'Step 2/8 : WORKDIR /app',
      ' ---> Running in a34c0e66bf21',
      'Step 3/8 : COPY ./publish .',
      ' ---> 5c38827fa11c',
      'Step 4/8 : ENTRYPOINT ["dotnet", "WebAPI.dll"]',
      'Successfully built 5c38827fa11c',
      'Successfully tagged fullstack-api:latest'
    ]
  },
  {
    command: 'docker compose up -d',
    output: [
      'Creating network "app_default" with the default driver',
      'Creating volume "app_postgres_data" with local driver',
      'Creating postgres-db ... done',
      'Creating fullstack-api ... done',
      'Container postgres-db  Healthy',
      'Container fullstack-api  Started'
    ]
  },
  {
    command: 'terraform apply -auto-approve',
    output: [
      'terraform.tfstate: Refreshing state...',
      'azurerm_resource_group.rg: Creating...',
      'azurerm_kubernetes_cluster.aks: Creating...',
      'azurerm_kubernetes_cluster.aks: Still creating... (10s elapsed)',
      'azurerm_kubernetes_cluster.aks: Creation complete [id=/subscriptions/...]',
      'Apply complete! Resources: 2 added, 0 changed, 0 destroyed.'
    ]
  },
  {
    command: 'kubectl get pods -n production',
    output: [
      'NAME                             READY   STATUS    RESTARTS   AGE',
      'api-gateway-7f89b94bc-x7p2d      1/1     Running   0          5m12s',
      'dotnet-backend-56c9d784ef-m8lqz  1/1     Running   0          5m10s',
      'postgres-db-0                    1/1     Running   0          5m10s'
    ]
  },
  {
    command: 'az webapp deploy --name api-prod --src-path ./publish.zip',
    output: [
      'Command group \'webapp deploy\' is in preview.',
      'Initiating deployment for ./publish.zip...',
      'Uploading package... Done',
      'Deployment status: success',
      'URL: https://api-prod.azurewebsites.net/api/health'
    ]
  },
  {
    command: 'git push origin main',
    output: [
      'Enumerating objects: 23, done.',
      'Counting objects: 100% (23/23), done.',
      'Delta compression using up to 8 threads',
      'Compressing objects: 100% (14/14), done.',
      'Writing objects: 100% (15/15), 1.84 KiB | 1.84 MiB/s, done.',
      'To github.com:alex-carter/dotnet-devops-platform.git',
      '   a1b2c3d..e5f6g7h  main -> main'
    ]
  }
];

export const DevOpsTerminal: React.FC = () => {
  const [currentCmdIndex, setCurrentCmdIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [history, setHistory] = useState<string[]>([]);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentCommand = COMMANDS[currentCmdIndex].command;

    if (isTyping) {
      if (charIndex < currentCommand.length) {
        const timeout = setTimeout(() => {
          setTypedText((prev) => prev + currentCommand[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 60 + Math.random() * 40); // realistic typing speed variation
        return () => clearTimeout(timeout);
      } else {
        // Typing finished, wait, then show outputs
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setHistory((prev) => [...prev, `dev@workspace:~$ ${currentCommand}`, ...COMMANDS[currentCmdIndex].output]);
        }, 400);
        return () => clearTimeout(timeout);
      }
    } else {
      // Wait to transition to the next command
      const timeout = setTimeout(() => {
        setIsTyping(true);
        setTypedText('');
        setCharIndex(0);
        
        // Keep logs history short so we don't overflow the UI
        if (history.length > 25) {
          setHistory((prev) => prev.slice(prev.length - 20));
        }

        setCurrentCmdIndex((prev) => (prev + 1) % COMMANDS.length);
      }, 3500); // Read output time before clearing and starting next
      return () => clearTimeout(timeout);
    }
  }, [currentCmdIndex, charIndex, isTyping, history]);

  // Floating technology icon items
  const floatingIcons = [
    { name: 'Docker', color: 'text-sky-400', initialX: -40, initialY: -30, floatRangeY: [-20, 20], floatRangeX: [-10, 10], duration: 6, path: 'M13.983 11.078h2.119v-2.006h-2.119v2.006zm-2.825 0h2.118v-2.006h-2.118v2.006zm-2.824 0h2.118v-2.006h-2.118v2.006zm-2.824 0h2.119v-2.006h-2.119v2.006zm-2.825 0h2.119v-2.006h-2.119v2.006zm2.825-2.507h2.118v-2.006h-2.118v2.006zm2.824 0h2.118v-2.006h-2.118v2.006zm2.825 0h2.119v-2.006h-2.119v2.006zm-5.649-2.508h2.118v-2.007h-2.118v2.007zm22.378 3.611c-.512-.178-1.56-.25-2.072-.25-.39 0-.825.042-1.116.143-.357.125-.86.357-1.129.537v-4.437c-.378-.291-.849-.464-1.358-.464-.32 0-.623.072-.897.202l-.213.111v6.974c-.313.125-.572.339-.75.617-.681 1.059.202 2.015.694 2.457 2.023 1.815 4.67 2.118 7.329 2.118 4.298 0 7.822-2.316 7.822-6.527 0-1.743-1.072-3.693-3.312-4.498zm-22.378-6.119h2.118v-2.007h-2.118v2.007z' },
    { name: 'Kubernetes', color: 'text-blue-500', initialX: 420, initialY: -40, floatRangeY: [20, -20], floatRangeX: [10, -10], duration: 7, path: 'M12.01 0L2.1 5.72v11.44l9.91 5.72 9.91-5.72V5.72L12.01 0zm0 3l7.31 4.22v8.44L12.01 20l-7.31-4.34V7.22L12.01 3z' },
    { name: 'Azure', color: 'text-sky-500', initialX: -50, initialY: 260, floatRangeY: [-15, 15], floatRangeX: [20, -20], duration: 8, path: 'M1.74 19.5h8.92l6.23-11.75-8.91 6.55zm20.52 0h-8.92l-6.23-11.75 8.91 6.55z' },
    { name: 'Linux', color: 'text-amber-400', initialX: 430, initialY: 120, floatRangeY: [15, -15], floatRangeX: [-15, 15], duration: 6.5, path: 'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z' },
    { name: 'Git', color: 'text-orange-500', initialX: 180, initialY: -50, floatRangeY: [-25, 25], floatRangeX: [15, -15], duration: 7.5, path: 'M23.184 11.604L12.396.816a1.111 1.111 0 00-1.572 0L9.12 2.52l3.228 3.228c.84-.288 1.788.084 2.22.84.444.756.324 1.716-.288 2.328a2.023 2.023 0 01-2.328.288l-2.676 2.676a2.008 2.008 0 01-.288 2.328 2.015 2.015 0 01-3.168-2.22l-2.88-2.88a2.016 2.016 0 01-2.22.288L.816 12.396a1.111 1.111 0 000 1.572L11.604 24.78c.432.432 1.14.432 1.572 0L24.78 13.992a1.127 1.127 0 000-1.572l-1.596-.816z' },
    { name: '.NET', color: 'text-violet-400', initialX: 200, initialY: 280, floatRangeY: [25, -25], floatRangeX: [-20, 20], duration: 9, path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-5h2v5zm0-6.5h-2V8h2v2z' }
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-video sm:aspect-auto sm:h-[400px]">
      {/* Floating Icons */}
      {floatingIcons.map((icon, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${icon.color} opacity-20 hover:opacity-80 transition-opacity duration-300 z-10 cursor-pointer pointer-events-auto`}
          style={{ left: icon.initialX, top: icon.initialY }}
          animate={{
            y: icon.floatRangeY,
            x: icon.floatRangeX,
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>{icon.name}</title>
            <path d={icon.path} />
          </svg>
        </motion.div>
      ))}

      {/* Terminal Body */}
      <div className="w-full h-full glass-panel rounded-xl overflow-hidden shadow-2xl border border-white/10 flex flex-col font-mono text-[11px] sm:text-xs">
        {/* Top Control Bar */}
        <div className="bg-slate-900/60 px-4 py-3 flex items-center justify-between border-b border-white/5">
          <div className="flex space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-[10px] text-slate-500 font-semibold select-none">devops-pipeline.sh</span>
          <div className="w-10"></div>
        </div>

        {/* Console logs */}
        <div className="flex-1 p-4 overflow-y-auto space-y-1.5 text-slate-300 select-all scrollbar-thin">
          {history.map((logLine, index) => {
            const isCommand = logLine.startsWith('dev@workspace:~$');
            return (
              <div
                key={index}
                className={
                  isCommand
                    ? 'text-cyan-400 font-semibold mt-2'
                    : logLine.includes('Success') || logLine.includes('complete')
                    ? 'text-emerald-400'
                    : logLine.includes('Creating') || logLine.includes('Step')
                    ? 'text-purple-400'
                    : 'text-slate-400'
                }
              >
                {logLine}
              </div>
            );
          })}

          {/* Typing Line */}
          <div className="flex items-center text-cyan-400 font-semibold">
            <span>dev@workspace:~$ </span>
            <span className="text-slate-200 ml-1.5">{typedText}</span>
            <span className="inline-block w-1.5 h-4 bg-cyan-400 ml-0.5 animate-pulse"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DevOpsTerminal;
