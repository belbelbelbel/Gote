import { CalendarDays } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export const  HoverFooterCard = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@Bendee</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/images/bendeelogo.jpg" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Bendee</h4>
            <p className="text-sm">
            Blending style and simplicity
            </p>
            <div className="flex items-center pt-2">
              {/* <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "} */}
              <span className="text-xs text-muted-foreground">
              One crazy creation at a time 😎
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
