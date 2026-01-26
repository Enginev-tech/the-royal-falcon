import * as React from "react"

import { Widget, WidgetContent, WidgetHeader, WidgetTitle } from "./ui/widget"
import { Label } from "./ui/label"

const details = [
  {
    image: "/events/championsleague.webp",
    name: "UCL",
    teamName: "Champions League",
    score: "2",
  },
  {
    image: "/events/voerbal.jpeg",
    name: "EPL",
    teamName: "Premier League",
    score: "1",
  },
]

export function SportsSm01Widget() {
  return (
    <Widget className="bg-[var(--muted)]/70 border-[var(--border)]">
      <WidgetHeader>
        <WidgetTitle className="text-[var(--muted-foreground)] text-sm">Live</WidgetTitle>
        <WidgetTitle className="text-[var(--muted-foreground)] text-sm">Vandaag</WidgetTitle>
      </WidgetHeader>
      <WidgetContent className="items-end justify-between">
        {details.map((team) => (
          <div key={team.name} className="flex flex-col items-center gap-1">
            <img
              className="size-8 rounded-full object-cover"
              src={team.image}
              alt={team.teamName}
              width={32}
              height={32}
              loading="lazy"
            />
            <Label className="text-lg tracking-wider text-[var(--foreground)]">{team.name}</Label>
            <Label className="text-3xl text-[var(--foreground)]">{team.score}</Label>
          </div>
        ))}
      </WidgetContent>
    </Widget>
  )
}
