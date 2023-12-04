import React, { ComponentPropsWithoutRef, ReactNode } from 'react'

interface ModalType extends ComponentPropsWithoutRef<"div"> {
    children: ReactNode
}

const Modal = ({children}: ModalType) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Modal