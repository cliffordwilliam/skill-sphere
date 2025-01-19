export type RegisterFormState =
  | {
      errors?: {
        email?: string;
        password?: string;
      };
      toastError?: string;
      toastSuccess?: string;
    }
  | undefined;
