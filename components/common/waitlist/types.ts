export interface WaitlistDialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export interface FormData {
  email: string;
  firstName: string;
}

export interface StepProps {
  onNext: (value: string) => void;
  value: string;
  isSubmitting?: boolean;
}

export type Step = 'email' | 'name' | 'success';