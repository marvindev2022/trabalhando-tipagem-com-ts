type DataBaseModel = {
    name: string;
    age: Date;
    email: string;
    address: string;
    phone: string;
  };
  
  type CamelCaseConvert<Prop, Prefix extends string> = {
    [K in keyof Prop as `${Prefix & string}${Capitalize<string & K>}`]: Prop[K];
  };
  
  const primeiroTeste: CamelCaseConvert<DataBaseModel, 'client'> = {
    clientName: 'teste',
    clientAge: new Date(),
    clientEmail: 'teste@gmail.com',
    clientAddress: 'teste',
    clientPhone: 'teste',
  };
  
  const outroTeste: CamelCaseConvert<DataBaseModel, 'user'> = {
    userName: 'teste',
    userAge: new Date(),
    userEmail: 'teste@gmail.com',
    userAddress: 'teste',
    userPhone: 'teste',
  };
  
  const ultimoTeste: CamelCaseConvert<DataBaseModel, 'admin'> = {
    adminAddress: 'teste',
    adminAge: new Date(),
    adminEmail: 'teste@teste.com',
    adminName: 'teste',
    adminPhone: 'teste',
  };
  
  