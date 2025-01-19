export type LoginFormState =
  | {
      errors?: {
        email?: string;
        password?: string;
      };
      toastError?: string;
      toastSuccess?: string;
    }
  | undefined;
