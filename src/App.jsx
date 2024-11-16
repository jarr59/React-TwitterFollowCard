import {TwitterFollowCard} from "./TwitterFollowCard.jsx";
import React from "react";

export function App() {
    return (
        <React.Fragment>
            <TwitterFollowCard userName="IbaiLlanos">
                LLANOS
            </TwitterFollowCard>

            <TwitterFollowCard userName="elmarianaa">
                May
            </TwitterFollowCard>

            <TwitterFollowCard userName="samyriveratv">
                Samy
            </TwitterFollowCard>
        </React.Fragment>
    );
}