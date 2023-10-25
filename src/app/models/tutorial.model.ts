export class Tutorial {
  key?: string | null;
  title?: string;
  description?: string;
  published?: boolean;
}
export class Users {
  key?: string | null;
  name !: string;
  email !: string;
  pass !: string;
}

