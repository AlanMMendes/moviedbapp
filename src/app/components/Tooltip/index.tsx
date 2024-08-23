import * as HoverCard from "@radix-ui/react-hover-card";
import { FaCircleExclamation } from "react-icons/fa6";

const Tooltip = ({ title, overview }: any) => (
  <HoverCard.Root>
    <HoverCard.Trigger asChild>
      <a
        className="absolute top-0 right-0 px-2 py-2 inline-block cursor-pointer rounded-full shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline-none focus:shadow-[0_0_0_2px_white]"
        href="https://twitter.com/radix_ui"
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaCircleExclamation className="h-auto w-5" />
      </a>
    </HoverCard.Trigger>
    <HoverCard.Portal>
      <HoverCard.Content
        className="z-50 data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade w-[300px] rounded-md bg-zinc-950 p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all"
        sideOffset={5}
      >
        <div className="flex flex-col gap-[7px]">
          <div className="flex flex-col gap-[15px]">
            <div>
              <div className="text-white m-0 text-[15px] font-semibold leading-[1.5]">
                {title}
              </div>
            </div>
            <div className="text-white m-0 text-[15px] leading-[1.5]">
              {overview}
            </div>
          </div>
        </div>

        <HoverCard.Arrow className="fill-white" />
      </HoverCard.Content>
    </HoverCard.Portal>
  </HoverCard.Root>
);

export default Tooltip;
