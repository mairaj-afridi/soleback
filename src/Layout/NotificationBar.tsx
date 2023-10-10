import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { RiNotification3Fill } from "react-icons/ri";
import { Indicator } from "@mantine/core";
import { CgMenuRight } from "react-icons/cg";
import { Popover, Button, Text } from "@mantine/core";
import Pop from "./Pop";

type Props = {
  openDrawer: () => void;
};

const NotificationBar: React.FC<Props> = ({ openDrawer }: Props) => {
  const Router = useLocation();

  // State to track whether the popover is open or closed
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  // Function to handle the click event on the Indicator
  const handleIndicatorClick = () => {
    // You can perform any action you want here, e.g., show the provider
    // For now, let's just toggle the popover
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <div className="w-full flex items-center justify-between lg:px-10 md:px-6 px-4 py-6 shadow-md">
      <h2 className="text-black-main text-2xl font-medium capitalize">
        {Router.pathname.slice(1, Router.pathname.length)}
      </h2>

      <Popover
        width={360}
        opened={isPopoverOpen} // Set the opened state based on the isPopoverOpen state
        onClose={() => setIsPopoverOpen(false)} // Close the popover when clicking outside
        position="bottom"
        offset={0}
      >
        <Popover.Target>
          <Button className="text-red-500">
            <div
              className="h-full flex items-center justify-center gap-5"
              onClick={handleIndicatorClick} // Attach the click event handler to the Indicator
            >
              <span className="bg-brand-main py-1 px-2 text-black-main text-center text-sm font-semibold rounded-md">
                2.27 zl / 0.0 zl
              </span>
              <Indicator  color="red" className="mr-1 text-red-500"  processing>
                <RiNotification3Fill className="text-[22px] text-[#c2c3b0]" />
              </Indicator>
            </div>
            <button
              className="h-full md:hidden flex items-center justify-center"
            >
              <CgMenuRight className="text-black-main text-2xl" />
            </button>
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
            <Pop/>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default NotificationBar;
