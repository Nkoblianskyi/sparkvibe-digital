"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"

interface ConfirmationPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ConfirmationPopup({ isOpen, onClose }: ConfirmationPopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <DialogTitle className="text-center text-2xl">Message Sent!</DialogTitle>
          <DialogDescription className="text-center text-base">
            Thank you for contacting us. We've received your message and will get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <Button onClick={onClose} className="mt-2">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
