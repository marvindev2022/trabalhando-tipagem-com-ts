# 🚀 **Transformação Dinâmica de Chaves com TypeScript: Um Guia para Iniciantes**

Você já se deparou com a necessidade de adaptar dados de um formato para outro de maneira dinâmica no TypeScript? Recentemente, me vi enfrentando esse desafio ao precisar converter chaves de `snake_case` para `camelCase`, e gostaria de compartilhar uma solução interessante usando TypeScript!

```typescript
type Model = {
  name: string;
  age: Date;
  email: string;
  address: string;
  phone: string;
};

 type CamelCaseConvert<Prop, Prefix extends string> = { // o uso do extends é para garantir que o prefixo seja uma string
    [K in keyof Prop as `${Prefix & string}${Capitalize<string & K>}`]: Prop[K]; /* o uso de " & string" é para evitar o erro de "Type 'K' cannot be used to index type 'Prop'."
    Capitalize é para garantir que a primeira letra da propriedade seja maiúscula
     */
  };

const example: CamelCase<Model, 'client'> = {
  clientName: 'example',
  clientAge: new Date(),
  clientEmail: 'example@gmail.com',
  clientAddress: 'example',
  clientPhone: 'example',
};

console.log(example);
```

Neste exemplo, a função `CamelCase` permite transformar dinamicamente as chaves de objetos, proporcionando um código mais flexível e legível.

## 💡 **Por que isso é útil?**

- **Dinamicidade:** A função aceita diferentes tipos e prefixos, permitindo uma transformação flexível.
- **Legibilidade:** A nomenclatura `CamelCase` torna o código mais fácil de entender.

## 👩‍💻 **Exemplo de Uso:**

```typescript
const anotherExample: CamelCase<Model, 'user'> = { // Model faz referência ao tipo e 'user' é o prefixo usado antes
  userName: 'Alice',
  userAge: new Date('1985-05-15'),
  userEmail: 'alice@example.com',
  userAddress: '456 Oak St',
  userPhone: '+9876543210',
};
```

Posso dizer que essa técnica me economizou bastante tempo e melhorou a manutenção do código! Experimente em seus projetos e compartilhe suas experiências.

```typescript
#TypeScript #CodingTips #TypeScriptTricks #WebDevelopment #Programming
```

---

Sinta-se à vontade para personalizar ainda mais o post de acordo com sua preferência ou adicionar hashtags específicas que se alinhem com seu público e conteúdo. Espero que este guia seja útil para alunos novatos! 😊✨
