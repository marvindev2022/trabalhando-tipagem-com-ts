# 🚀 **Transformação Dinâmica de Chaves com TypeScript: Um Guia para Iniciantes**

Você já se deparou com o desafio de harmonizar a estrutura de dados dinamicamente no TypeScript, especialmente quando lidando com um banco de dados que pode retornar objetos sem uma clara identificação de prefixo, como `clientName` ou `userName`? Neste cenário, a ausência de documentação específica pode gerar um código complexo e difícil de manter.

É nesse contexto que a função TypeScript que vou apresentar se destaca. Ela oferece uma solução inteligente para a transformação dinâmica de chaves, permitindo não apenas corrigir inconsistências de prefixos, mas também facilitar a interpretação dos dados em seu código.

```typescript
type Model = {
  name: string;
  birthDate: Date;
  email: string;
  address: string;
  phone: string;
};

type CamelCaseConvert<Prop, Prefix extends string> = {
  [K in keyof Prop as `${Prefix & string}${Capitalize<string & K>}`]: Prop[K];
};

const example: CamelCaseConvert<Model, 'client'> = {
  clientName: 'example',
  clientBirthDate: new Date(), 
  clientEmail: 'example@gmail.com',
  clientAddress: 'example',
  clientPhone: 'example',
};

console.log(example);
```

Neste exemplo, a função `CamelCaseConvert` assume um papel vital ao transformar dinamicamente as chaves dos objetos. Isso resulta em um código mais flexível e legível, abordando de forma eficaz as complexidades decorrentes de inconsistências na estrutura dos dados.

**Obs:** O uso do `extends` é crucial para garantir que o prefixo seja uma string, enquanto `& string` previne o erro "Type 'K' cannot be used to index type 'Prop'". A função `Capitalize` desempenha um papel crucial, assegurando que a primeira letra da propriedade seja maiúscula.

## 💡 **Por que isso é útil?**

- **Dinamicidade:** A função aceita diferentes tipos e prefixos, proporcionando uma transformação flexível.
- **Legibilidade:** A nomenclatura `CamelCase` torna o código mais fácil de entender, melhorando a manutenção do código.

## 👩‍💻 **Exemplo de Uso:**

```typescript
const anotherExample: CamelCaseConvert<Model, 'user'> = {
  userName: 'Alice',
  userBirthDate: new Date('1985-05-15'), 
  userEmail: 'alice@example.com',
  userAddress: '456 Oak St',
  userPhone: '+9876543210',
};
```

Essa técnica se mostrou um recurso valioso, economizando tempo e aprimorando a manutenção do código. Experimente em seus projetos e compartilhe suas experiências!

```typescript
#TypeScript #CodingTips #TypeScriptTricks #WebDevelopment #Programming
```
