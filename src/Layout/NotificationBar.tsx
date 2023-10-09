import React from "react";
import { useLocation } from "react-router-dom";
import { RiNotification3Fill } from "react-icons/ri";
import { Indicator } from "@mantine/core";
import { CgMenuRight } from "react-icons/cg";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';


type Props = {
  openDrawer: () => void;
};

const NotificationBar: React.FC<Props> = ({ openDrawer }: Props) => {
  const [opened, { open, close }] = useDisclosure(false);

  const Router = useLocation();
  return (
    <div className="w-full flex items-center justify-between lg:px-10 md:px-6 px-4 py-6 shadow-md">
       <Modal opened={opened} onClose={close} title="Authentication">
      
        <h1>lfdksjflaks</h1>
      </Modal>
      <h2 className="text-black-main text-2xl font-medium capitalize">
        {Router.pathname.slice(1, Router.pathname.length)}
      </h2>
      <div className="h-full flex items-center justify-center gap-5">
        <span className="bg-brand-main py-1 px-2 text-black-main text-center text-sm font-semibold rounded-md">
          2.27 zl / 0.0 zl
        </span>
        <Indicator  onClick={open} color="red" size={8} processing>
          <RiNotification3Fill className="text-[22px] text-[#e75e46]" />
        </Indicator>
      </div>
      <button
        onClick={openDrawer}
        className="h-full md:hidden flex items-center justify-center"
      >
        <CgMenuRight className="text-black-main text-2xl" />
      </button>
    </div>
  );
};

export default NotificationBar;
