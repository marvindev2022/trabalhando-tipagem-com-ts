type SnakeCaseModel = {
    client_name: string;
    client_age: Date;
    client_email: string;
    client_address: string;
    client_phone: string;
  };
  
  type CamelCase<prop> = {
    [K in keyof prop as CamelCaseKey<K & string >]: prop[K];
  };
  
  type CamelCaseKey<T extends string > = T extends `${infer First}_${infer Rest}`
    ? `${Uncapitalize<First>}${Capitalize<Rest>}`
    : T;
  
  const teste: CamelCase<SnakeCaseModel> = {
    clientName: 'teste',
    clientAge: new Date(),
    clientEmail: 'teste@gmail.com',
    clientAddress: 'teste',
    clientPhone: 'teste',
  };
  
  console.log(teste);

  