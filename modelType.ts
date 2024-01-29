type DataBaseModel = {
    name: string;
    birthDate: Date;
    email: string;
    address: string;
    phone: string;
  };
  
  type CamelCaseConvert<Prop, Prefix extends string> = {
    [K in keyof Prop as `${Prefix & string}${Capitalize<string & K>}`]: Prop[K];
  };
  
  const primeiroTeste: CamelCaseConvert<DataBaseModel, 'client'> = {
    clientName: 'teste',
    clientBirthDate: new Date(),
    clientEmail: 'teste@gmail.com',
    clientAddress: 'teste',
    clientPhone: 'teste',
  };
  
  const outroTeste: CamelCaseConvert<DataBaseModel, 'user'> = {
    userName: 'teste',
    userBirthDate: new Date(),
    userEmail: 'teste@gmail.com',
    userAddress: 'teste',
    userPhone: 'teste',
  };
  
  const ultimoTeste: CamelCaseConvert<DataBaseModel, 'admin'> = {
    adminAddress: 'teste',
    adminBirthDate: new Date(),
    adminEmail: 'teste@teste.com',
    adminName: 'teste',
    adminPhone: 'teste',
  };
  
  