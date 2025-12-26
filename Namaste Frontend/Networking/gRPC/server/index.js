import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROTO_PATH = path.join(__dirname, '../customers.proto');

// Rest of your code...

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  arrays: true,
  defaults: true,
  oneofs: true,
});

const CustomerService = grpc.loadPackageDefinition(packageDefinition).CustomerService;

const server = new grpc.Server();

const customers = [
    { id: "1", name: "John Doe", age: 30, address: "123 Main St" },
    { id: "2", name: "Jane Smith", age: 25, address: "456 Oak Ave" },
    { id: "3", name: "Mike Johnson", age: 40, address: "789 Pine Rd" },
    { id: "4", name: "Emily Davis", age: 35, address: "321 Maple Ln" },
    { id: "5", name: "David Wilson", age: 28, address: "654 Cedar St" },
];

server.addService(CustomerService.service, {
    getAll: (call, callback) => {
        callback(null, { customers });
    },
    get: (call, callback) => {
        const customer = customers.find(c => c.id === call.request.id);
        if (customer) {
            callback(null, customer);
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Customer not found"
            });
        }
    },
    insert: (call, callback) => {
        const newCustomer = call.request;

        newCustomer.id = uuidv4();
        customers.push(newCustomer);
        callback(null, newCustomer);
    },
    update: (call, callback) => {
        const customer = customers.find(c => c.id === call.request.id);
        if (customer) {
            const index = customers.indexOf(customer);
            customers[index] = call.request;
            callback(null, customers[index]);
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Customer not found"
            });
        }
    },
    remove: (call, callback) => {
        console.log('Received delete request for ID:', call.request.id);
        const customer = customers.find(c => c.id === call.request.id);
        console.log('Customers list:', customers);
        console.log('Customer found:', customer);
        if (customer) {
            const index = customers.indexOf(customer);
            customers.splice(index, 1);
            callback(null, { id: call.request.id });
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Customer not found"
            });
        }
    },
});

server.bindAsync("localhost:50051", grpc.ServerCredentials.createInsecure(), (err, port) => {
    if(err) {
        console.error("Error binding server:", err);
        return;
    }
    console.log("grpc Server running at http://localhost:50051");
    server.start();
});