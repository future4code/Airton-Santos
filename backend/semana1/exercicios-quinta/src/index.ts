import axios from 'axios';

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews';

//Exercício 1:
//*a. Qual endpoint você deve utilizar para isso?*
//https://us-central1-labenu-apis.cloudfunctions.net/labenews/subscribers/all

//*b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?*
//Promise<any[]>

//*c. Implemente uma função nomeada que faça o que foi pedido.*
// async function getSubscribers(): Promise<any[]> {
//     const users = await axios.get(`${baseUrl}/subscribers/all`);
//     return users.data;
//   };

//Exercício 2:
//*a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow function assíncrona*
//função nomeada assíncrona, o async vai antes de nomear a função, e a arrow function assíncrona vai após nomear a função.

//*b. Implemente a função solicitada, usando arrow function*
// const getSubscribers = async (): Promise<any[]> => {
//     const users = await axios.get(`${baseUrl}/subscribers/all`);
//     return users.data;
//   };

//Exercício 3:
// type Subscriber = {
//     id: string,
//     name: string,
//     email: string
//   }
// *a. Se apenas trocarmos o retorno da função para: `Promise<User[]>` , teremos algum erro de tipagem?*
// Não.
// *b. Na aula, comentamos que sempre fazemos um mapeamento do resultado de uma Promise, caso seja inidicado que ela retorne um `Promise<any>`. Explique com as suas palavras o porquê de fazermos isso*
//O Typescript não iria indicar o erro, caso algo na função mudasse, então tipamos, para garantir que vamos passar os dados corretos.

// *c. Reimplemente a função, corretamente.*
// const getSubscribers = async (): Promise<User[]> => {
//     const users = await axios.get(`${baseUrl}/subscribers/all`);
//     return users.data.map((res: any) => {
//       return {
//         id: res.id,
//         name: res.name,
//         email: res.email,
//       };
//     });
//   };

//Exercício 4:

// a. Qual é o tipo dessa função? Por quê?
//Função nomeada. Pois ela não retorna nada.

// b. Implemente a função solicitada
// async function createNews(title: string, content: string, date: number = Date.now()): Promise<void> {
//     await axios.put(`${baseUrl}/news`, {
//       title,
//       content,
//       date
//     });
//   } 

//Exercício 5:

// *a. O que aconteceria se fizéssemos a requisição dentro de um `forEach`? É recomendável utilizá-lo nesse caso?*
// O JS não lida bem com funções de array.

// *b. Implemente a função solicitada*
// const sendNotifications = async (
//     users: User[],
//     message: string
//   ): Promise<void> => {
//     const promiseArray: Promise<any>[] = [];
//     for (const user of users) {
//       await axios.post(`${baseUrl}/notifications/send`, {
//         subscriberId: user.id,
//         message: message,
//       });
//     }
//     console.log("All notifications sent");
//   };

//Exercício 6:

// *a. O que o `Promise.all` faz?*
// Ele permite que você reúna todas as requisições, e usando a assincronicidade, ele irá aguardar todas as requisições serem enviadas, antes de entrar na próxima linha de código.

// *b. Quais as vantagens de se utilizar o `Promise.all` no caso de se enviar as notificações para todos os usuários?*
// A vantagem, é garantir a ordem das requisições, e além disso, diminui o tempo de execução de uma função assincrona.

// *c. Reimplemente a função utilizando `Promise.all`*
// const sendNotifications = async (
//     users: User[],
//     message: string
//   ): Promise<void> => {
//     const promiseArray = [];
//     for (const user of users) {
//       promiseArray.push(
//         axios.post(`${baseUrl}/notifications/send`, {
//           subscriberId: user.id,
//           message: message,
//         })
//       );
//     }
//     await Promise.all(promiseArray);
//   };

//Exercício 7:

// *a. Crie uma função que crie um novo assinante no nosso jornal*
// const createSubscriber = async (name: string, email: string) => {
//     await axios.put(`${baseUrl}/subscribers`, {
//       name,
//       email
//     });
//   };

// *b. Crie uma função que seja responsável pela criação de uma notícia. Só que, dessa vez, além de criar a notícia, ela deve enviar uma notificação para cada um dos usuários*
// const createAndSendNotifications = async () => {
//     try {
//       await createNews(
//         "Novidade a caminho",
//         "Labenu: uma nova escola de programação",
//         1590522289000
//       );
//       const users = await getSubscribers();
//       await sendNotifications(users, "Testando mensagens");
//     } catch (err) {
//       console.log("err: ", err.message);
//     }
//   };

// *c. Crie uma função que pegue todas as notificações de todos os usuários da aplicação*
// const getAllNotifications = async (): Promise<any> => {
//     const users = await getSubscribers();
//     const notificationPromises = [];
//     for (const user of users) {
//       notificationPromises.push(
//         axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)
//       );
//     }
//     const result = await Promise.all(notificationPromises);
//     const dataFromResult = result.map((res) => res.data);
//     return dataFromResult;
//   };

async function createNews(title: string, content: string, date: number = Date.now()): Promise<void> {
  await axios.put(`${baseUrl}/news`, {
    title,
    content,
    date
  });
}  

const getSubscribersQuantity = async(): Promise<number> => {
    const subscribers = await axios.get(`${baseUrl}/subscribers/all`);
    return subscribers.data.length;
  };

type Subscriber = {
  id: string,
  name: string,
  email: string
}

const getAllSubscribers = async(): Promise<Subscriber[]> => {
  const subscribers = await axios.get(`${baseUrl}/subscribers/all`);
  return subscribers.data.map((subscriber: Subscriber) => {
    return {
      id: subscriber.id,
      name: subscriber.name,
      email: subscriber.email
    }
  })
};


const sendNotifications = async(subscriber: Subscriber, message: string): Promise<void> => {
  console.log('Enviando notificação para: ', subscriber.name);
  await axios.post(`${baseUrl}/notifications/send`, {
    subscriberId: subscriber.id,
    message
  });
  console.log('Notificação enviada para: ', subscriber.name);
};

type Notification = {
  id: string,
  subscriberId: string,
  message: string
}

const getNotificationsBySubscriberId = async(subscriberId: string): Promise<Notification[]> => {
  const res = await axios.get(`${baseUrl}/subscribers/${subscriberId}/notifications/all`);
  return res.data.map((notification: Notification) => {
    return {
      subscriberId: notification.subscriberId,
      message: notification.message
    }
  })
};


const main = async () => {
try {
  await createNews('Sorvete 0800', 'Hoje, para comemorar essa frente fria que paira sobre SP, a Labenu irá distribuir sorvete 0800');
  const subscribers = await getAllSubscribers();

  const promisesArray = [];
  for (const subscriber of subscribers) {
    promisesArray.push(
      sendNotifications(subscriber, 'Sorvete 0800[2]')
    )
  }
  await Promise.all(promisesArray);
  console.log('Teminei tudo');

  const notificationPromiseArray = [];
  for(const subscriber of subscribers) {
    notificationPromiseArray.push(
      getNotificationsBySubscriberId(subscriber.id)
    )
  }

  const promiseAllResult = await Promise.all(notificationPromiseArray);
  console.log('Result: ', promiseAllResult)

} catch (e) {
  console.log(e.response.data)
  }
};

main();