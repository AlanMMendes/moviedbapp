import * as Tooltip from "@radix-ui/react-tooltip";

const TooltipComponent = ({ children, tooltipText }: any) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-gray-700 max-w-64 z-50 h-auto text-white font-extralight text-md rounded p-2 shadow-lg"
            sideOffset={5}
          >
            {tooltipText}
            <Tooltip.Arrow className="fill-gray-700" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipComponent;
