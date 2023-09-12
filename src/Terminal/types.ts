import { ReactNode } from "react";

export type TerminalHistoryItem = ReactNode | string;
export type TerminalHistory = TerminalHistoryItem[];
export type TerminalPushToHistoryWithDelayProps = {
    content: TerminalHistoryItem;
    delay?: number;
};

export type TerminalCommands = {
    [command: string]: () => void;
};

export interface TerminalProps {
    history?: string[];
    promptLabel?: string;
    commands?: Record<string, () => void>;
    onPushToHistory?: (message: string) => void; // Add this line
}
