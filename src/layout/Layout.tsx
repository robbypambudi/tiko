import * as React from 'react';
import useDialogStore from 'src/store/useDialogStore';

import BaseDialog from '@components/dialog/BaseDialog';

import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  //#region  //*=========== Store ===========
  const open = useDialogStore.useOpen();
  const state = useDialogStore.useState();
  const handleClose = useDialogStore.useHandleClose();
  const handleSubmit = useDialogStore.useHandleSubmit();
  //#endregion  //*======== Store ===========
  // Put Header or Footer Here
  return (
    <>
      <Header />
      <BaseDialog
        onClose={handleClose}
        onSubmit={handleSubmit}
        open={open}
        options={state}
      />
      {children}
    </>
  );
}
