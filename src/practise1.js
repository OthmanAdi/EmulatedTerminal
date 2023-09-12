// practise1.js

import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { Terminal } from './Terminal/index.tsx';
import { useTerminal } from './Terminal/useTerminal.ts';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';
import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';  // assuming you use react-router for navigation


const FullHeightContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftColumn = styled.div`
  flex: 8; 
  background-color: #A8E6CF;
  padding: 20px; // Some padding for better appearance
`;

const RightColumn = styled.div`
  flex: 3;
  background-color: #FFD3B6;
  padding: 2rem;  // Adding padding to all sides
  overflow-y: auto;  // This makes the content vertically scrollable if it overflows the container
`;

const DownloadButton = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const markdownContent = `
# Task: Linux File Permissions

Welcome to the Linux file permissions practice!

## Objective

Your objective is to understand and practice the basic file permissions commands in a Linux terminal.

**Instructions:**

1. Use the [\`ls -l\`](https://www.atatus.com/blog/ls-command-in-linux-with-example/) command to view the permissions of files in the current directory.
   - This command lists files with detailed information including permissions, ownership, and modification dates.

2. Identify the owner, group, and permission string of a given file.
   - Understand the structure of the output from \`ls -l\`. For example, in \`-rw-r--r-- 1 user group ...\`, 'user' is the owner, 'group' is the group, and \`-rw-r--r--\` is the permission string.

3. Check the default permissions for new files and directories using the [\`umask\`](https://wiki.archlinux.org/title/umask) command.

4. Change the permissions of a file using the [\`chmod\`](https://www.linode.com/docs/guides/modify-file-permissions-with-chmod/) command. Practice with both absolute (using octal notation) and symbolic modes.
   - For example, \`chmod 755 filename\` or \`chmod u+x filename\`.

5. View the attributes of a file using the [\`lsattr\`](https://www.ibm.com/docs/en/aix/7.2?topic=l-lsattr-command) command. This might display attributes like 'i' for immutable.

6. Change the attributes of a file using the [\`chattr\`](https://www.tecmint.com/chattr-command-examples/) command.
   - For example, \`chattr +i filename\` to set a file as immutable.

Remember: This terminal is emulated. Not all commands may work as they do in a real environment. Stick to the instructions for best results.
`;


function Practice1() {
    const {
        history,
        pushToHistory,
        setTerminalRef,
        resetTerminal,
    } = useTerminal();

    useEffect(() => {
        resetTerminal();
        pushToHistory("Welcome to Lecture 3 Terminal Practise");
    }, [resetTerminal, pushToHistory]);

    function handleDownload() {
        const solutionContent = `

        Lösungshandbuch: Linux Dateiberechtigungen

Einleitung:
Dieses Handbuch führt Sie durch die Lösung der Aufgabe "Linux Dateiberechtigungen". Es enthält Schritt-für-Schritt-Anleitungen und nützliche Links, die Ihnen helfen, die notwendigen Befehle zu verstehen und auszuführen.

Schritt 1: Dateiberechtigungen anzeigen

Aufgabe: Führen Sie den Befehl ls -l aus, um die Berechtigungen der Dateien im aktuellen Verzeichnis anzuzeigen.
Lösung: Im Terminal, geben Sie ls -l ein und drücken Sie Enter.
Erwartetes Ergebnis: -rw-r--r-- 1 user group 12345 Jan 1 12:34 example.txt
Hilfreicher Link: Linux ls Befehl
Schritt 2: Dateieigentümer und -gruppe identifizieren

Aufgabe: Identifizieren Sie den Eigentümer, die Gruppe und den Berechtigungsstring einer gegebenen Datei.
Tipp: Schauen Sie sich die Ausgabe von ls -l genau an. Zum Beispiel zeigt -rw-r--r-- 1 user group an, dass 'user' der Eigentümer ist und 'group' die Gruppe.
Hilfreicher Link: Suchen Sie online nach "Linux Dateiberechtigungen verstehen".
Schritt 3: Standardberechtigungen überprüfen

Aufgabe: Überprüfen Sie die Standardberechtigungen für neue Dateien und Verzeichnisse mit dem Befehl umask.
Lösung: Geben Sie umask ins Terminal ein.
Erwartetes Ergebnis: 0022
Hilfreicher Link: Linux umask Befehl
Schritt 4: Dateiberechtigungen ändern

Aufgabe: Ändern Sie die Berechtigungen einer Datei mit dem Befehl chmod. Üben Sie sowohl mit absoluter (oktaler Notation) als auch mit symbolischer Methode.
Lösung: Geben Sie chmod 755 example.txt oder chmod u+x example.txt ein.
Erwartetes Ergebnis: Für den ersten Befehl: "Permissions for example.txt changed to -rwxr-xr-x". Für den zweiten Befehl: "User execution permission added for example.txt".
Hilfreicher Link: Linux chmod Befehl
Schritt 5: Dateiattribute anzeigen

Aufgabe: Zeigen Sie die Attribute einer Datei mit dem Befehl lsattr an.
Lösung: Geben Sie lsattr example.txt ins Terminal ein.
Erwartetes Ergebnis: ----i--------e--- example.txt
Hilfreicher Link: Linux lsattr Befehl
Schritt 6: Dateiattribute ändern

Aufgabe: Ändern Sie die Attribute einer Datei mit dem Befehl chattr.
Lösung: Geben Sie chattr +i example.txt ein, um eine Datei als unveränderlich zu kennzeichnen.
Erwartetes Ergebnis: Immutable attribute set for example.txt
Hilfreicher Link: Linux chattr Befehl
Abschluss: Sobald Sie alle Aufgaben erfolgreich abgeschlossen haben, können Sie den Befehl finish eingeben, um die Übung zu beenden.
        
        `;

        const blob = new Blob([solutionContent], { type: 'text/plain;charset=utf-8' });
        const href = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = href;
        link.download = 'Lösungshandbuch.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    const [executedCommands, setExecutedCommands] = useState(new Set());

    const allRequiredCommands = ["ls -l", "umask", "chmod 755 example.txt", "chmod u+x example.txt", "lsattr example.txt", "chattr +i example.txt"];  // Add all required commands here

    const commands = useMemo(() => ({
        'ls -l': () => {
            pushToHistory(`-rw-r--r-- 1 user group 12345 Jan 1 12:34 example.txt`);
            executedCommands.add('ls -l');
            setExecutedCommands(new Set([...executedCommands]));
            if (allRequiredCommands.every(cmd => executedCommands.has(cmd))) {
                pushToHistory('You have completed all the tasks. Type "finish" to end the practice.');
            }
        },
        'umask': () => {
            pushToHistory(`0022`);
            executedCommands.add('umask');
            setExecutedCommands(new Set([...executedCommands]));
            if (allRequiredCommands.every(cmd => executedCommands.has(cmd))) {
                pushToHistory('You have completed all the tasks. Type "finish" to end the practice.');
            }
        },
        'chmod 755 example.txt': () => {
            pushToHistory(`Permissions for example.txt changed to -rwxr-xr-x`);
            executedCommands.add('chmod 755 example.txt');
            setExecutedCommands(new Set([...executedCommands]));
            if (allRequiredCommands.every(cmd => executedCommands.has(cmd))) {
                pushToHistory('You have completed all the tasks. Type "finish" to end the practice.');
            }
        },
        'chmod u+x example.txt': () => {
            pushToHistory(`User execution permission added for example.txt`);
            executedCommands.add('chmod u+x example.txt');
            setExecutedCommands(new Set([...executedCommands]));
            if (allRequiredCommands.every(cmd => executedCommands.has(cmd))) {
                pushToHistory('You have completed all the tasks. Type "finish" to end the practice.');
            }
        },
        'lsattr example.txt': () => {
            pushToHistory(`----i--------e--- example.txt`);
            executedCommands.add('lsattr example.txt');
            setExecutedCommands(new Set([...executedCommands]));
            if (allRequiredCommands.every(cmd => executedCommands.has(cmd))) {
                pushToHistory('You have completed all the tasks. Type "finish" to end the practice.');
            }
        },
        'chattr +i example.txt': () => {
            pushToHistory(`Immutable attribute set for example.txt`);
            executedCommands.add('chattr +i example.txt');
            setExecutedCommands(new Set([...executedCommands]));
            if (allRequiredCommands.every(cmd => executedCommands.has(cmd))) {
                pushToHistory('You have completed all the tasks. Type "finish" to end the practice.');
            }
        },
        'ls -a': () => {
            pushToHistory(`This command lists all files, including hidden ones. Not the one we're looking for right now.`);
        },
        'chmod 777 example.txt': () => {
            pushToHistory(`This sets all permissions, which might not be secure. Be careful!`);
        },
        'finish': () => {
            if (allRequiredCommands.every(cmd => executedCommands.has(cmd))) {
                endOfTutorialSuccess();
            } else {
                pushToHistory('You have not completed all the tasks. Once done, you will be prompted to type "finish".');
            }
        }
    }), [pushToHistory, executedCommands]);

    // // Inside each command, before executing its main logic, add:
    // executedCommands.add(commandName);
    // setExecutedCommands(new Set([...executedCommands]));

    // if (allRequiredCommands.every(cmd => executedCommands.has(cmd))) {
    //     pushToHistory('You have completed all the tasks. Type "finish" to end the practice.');
    // }


    function endOfTutorialSuccess() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        Swal.fire({
            title: 'Congratulations!',
            text: 'You completed the tutorial!',
            icon: 'success',
            timer: 5000, // display for 5 seconds
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false
        });
    }

    return (
        <FullHeightContainer>
            <LeftColumn>
                <Terminal
                    history={history}
                    ref={setTerminalRef}
                    promptLabel=">"
                    commands={commands}
                    onPushToHistory={pushToHistory}  // Pass pushToHistory function here
                />
            </LeftColumn>
            <RightColumn>
                <ReactMarkdown>
                    {markdownContent}
                </ReactMarkdown>
                <DownloadButton onClick={handleDownload}>
                    Lösung herunterladen
                </DownloadButton>
                <Link to="/">  {/* This assumes that your home route is '/' */}
                    <button>Back Home</button>
                </Link>
            </RightColumn>
        </FullHeightContainer>
    );
}

export default Practice1;
