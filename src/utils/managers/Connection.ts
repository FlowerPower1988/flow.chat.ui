import * as SignalR from  "@aspnet/signalr";

let Connections = {};

const initializeConnection = (url:string,token:string,name:string) =>{
    Connections[name] = new Connection(url,token);
    Connections[name].openConnection();
}

class Connection {

    private _connection: SignalR.HubConnection;

    constructor(url:string, token:string ){
        this._connection = new SignalR.HubConnectionBuilder()
        .withUrl(url,{ accessTokenFactory: () => token })
        .build();
    }

    public openConnection() : void{
        this._connection.start();
    }

    public addMessageHandler(methodName: string, newMethod: (...args: any[]) => void){
        this._connection.on(methodName,newMethod);
    }

    public async sendMessage(methodName:string, ...args: any[]){
        await this._connection.invoke(methodName, args);
    }
  
}

export {initializeConnection as createConnection}