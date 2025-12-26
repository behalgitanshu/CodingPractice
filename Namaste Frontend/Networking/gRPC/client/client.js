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

const client = new CustomerService('localhost:50051', grpc.credentials.createInsecure());

export default client;
