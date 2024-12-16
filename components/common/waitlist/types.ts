export interface WaitlistDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  earlyAccess?: {
    discount: string;
    description: string;
  };
}

export interface WaitlistFormProps {
  onSubmit: (email: string) => Promise<void>;
  isSubmitting: boolean;
}

export interface SuccessMessageProps {
  onClose: () => void;
}